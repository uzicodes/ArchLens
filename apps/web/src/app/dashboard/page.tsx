'use client';

import React, { useMemo, useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    ReactFlow,
    Controls,
    Background,
    BackgroundVariant,
    useNodesState,
    useEdgesState,
    Position,
    Handle
} from '@xyflow/react';
import dagre from 'dagre';
import { Shield, Database, Layout, Server, AlertCircle, Loader2, FileCode2 } from 'lucide-react';

import '@xyflow/react/dist/style.css';

// Dagre Graph Auto-Layout Engine Configuration
const getLayoutedElements = (nodes: any[], edges: any[]) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    dagreGraph.setGraph({ rankdir: 'TB', nodesep: 70, ranksep: 100 });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: 220, height: 72 });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        return {
            ...node,
            targetPosition: Position.Top,
            sourcePosition: Position.Bottom,
            position: {
                x: nodeWithPosition.x - 90,
                y: nodeWithPosition.y - 30,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

// Custom Node Component
const FileNode = ({ data }: any) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'frontend': return <Layout className="w-4 h-4 text-emerald-400" />;
            case 'auth': return <Shield className="w-4 h-4 text-amber-400" />;
            case 'backend': return <Server className="w-4 h-4 text-indigo-400" />;
            case 'database': return <Database className="w-4 h-4 text-cyan-400" />;
            default: return <FileCode2 className="w-4 h-4 text-slate-400" />;
        }
    };

    const parts = data.label ? data.label.split('/') : ['Unknown'];
    const fileName = parts.pop();
    const directory = parts.length > 0 ? parts.join('/') + '/' : '';

    return (
        <div className={`p-4 bg-slate-900/80 backdrop-blur-sm border ${data.accentBorder || 'border-white/10'} rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 min-w-[200px]`}>
            <Handle type="target" position={Position.Top} className="!opacity-0" />
            <div className="flex-shrink-0 bg-slate-800 p-2 rounded-lg border border-white/5">
                {getIcon(data.type)}
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider truncate">
                    {directory || 'ROOT'}
                </span>
                <span className="text-sm font-bold text-slate-200 truncate">
                    {fileName}
                </span>
            </div>
            <Handle type="source" position={Position.Bottom} className="!opacity-0" />
        </div>
    );
};

function DashboardContent() {
    const nodeTypes = useMemo(() => ({ default: FileNode }), []);
    const searchParams = useSearchParams();
    const repoUrl = searchParams.get('repo');

    // FIX: Added <any> generic types so TypeScript knows these won't stay empty
    const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [summary, setSummary] = useState<string | null>(null);

    // Fetch real AST data from the API
    useEffect(() => {
        const fetchArchitecture = async () => {
            if (!repoUrl) {
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:3001/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ repoUrl })
                });

                const json = await response.json();

                if (json.success) {
                    const processedNodes = json.data.nodes.map((node: any) => {
                        let accentBorder = 'border-slate-600/30';
                        if (node.id.includes('layout')) {
                            accentBorder = 'border-blue-500/50';
                        } else if (node.id.endsWith('page')) {
                            accentBorder = 'border-green-500/50';
                        } else if (node.id.includes('components')) {
                            accentBorder = 'border-purple-500/50';
                        }
                        return {
                            ...node,
                            data: { ...node.data, accentBorder }
                        };
                    });

                    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                        processedNodes,
                        json.data.edges
                    );
                    setNodes(layoutedNodes);
                    setEdges(layoutedEdges);
                    if (json.summary) {
                        setSummary(json.summary);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch architecture:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArchitecture();
    }, [repoUrl, setNodes, setEdges]);

    if (isLoading) {
        return (
            <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                <p className="text-slate-400 font-medium tracking-wide">Parsing Repository AST...</p>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen bg-slate-950 flex">
            <aside className="w-80 h-full border-r border-white/10 bg-slate-900/50 backdrop-blur-md p-6 flex flex-col gap-6 z-10">
                <div>
                    <h2 className="text-lg font-semibold text-white">ArchLens Analysis</h2>
                    <p className="text-xs text-slate-400 mt-1 truncate" title={repoUrl || ''}>Repository: {repoUrl || 'None Provided'}</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex-shrink-0">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Status</h3>
                    <p className="text-sm text-emerald-400 mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live Graph Rendered
                    </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex-1 overflow-y-auto">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        AI Architecture Analysis
                    </h3>
                    {summary ? (
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {summary}
                        </p>
                    ) : (
                        <div className="space-y-2 mt-4">
                            <div className="h-4 bg-slate-700/50 rounded animate-pulse w-full"></div>
                            <div className="h-4 bg-slate-700/50 rounded animate-pulse w-5/6"></div>
                            <div className="h-4 bg-slate-700/50 rounded animate-pulse w-4/6"></div>
                            <p className="text-xs text-slate-500 mt-4 animate-pulse">Generating AI insights...</p>
                        </div>
                    )}
                </div>
            </aside>

            <main className="flex-1 h-full relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    defaultEdgeOptions={{
                        type: 'default',
                        animated: true,
                        style: { stroke: '#94a3b8', strokeWidth: 2 }
                    }}
                    colorMode="dark"
                    fitView
                >
                    <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#334155" />
                    <Controls showInteractive={false} className="bg-slate-900 border-white/10" />
                </ReactFlow>
            </main>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={
            <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                <p className="text-slate-400 font-medium tracking-wide">Loading Dashboard...</p>
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}