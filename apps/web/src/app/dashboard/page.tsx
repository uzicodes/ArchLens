'use client';

import React, { useMemo, useEffect, useState } from 'react';
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
import { Shield, Database, Layout, Server, AlertCircle, Loader2 } from 'lucide-react';

import '@xyflow/react/dist/style.css';

// Dagre Graph Auto-Layout Engine Configuration
const getLayoutedElements = (nodes: any[], edges: any[]) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    dagreGraph.setGraph({ rankdir: 'TB', nodesep: 70, ranksep: 100 });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: 180, height: 60 });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, { id: edge.id, target: edge.target });
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
const NodeWrapper = ({ data }: any) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'frontend': return <Layout className="w-4 h-4 text-emerald-400" />;
            case 'auth': return <Shield className="w-4 h-4 text-amber-400" />;
            case 'backend': return <Server className="w-4 h-4 text-indigo-400" />;
            case 'database': return <Database className="w-4 h-4 text-cyan-400" />;
            default: return <AlertCircle className="w-4 h-4 text-slate-400" />;
        }
    };

    return (
        <div className="px-4 py-3 bg-slate-900 border border-white/10 rounded-xl shadow-xl flex items-center gap-3 min-w-[180px]">
            <Handle type="target" position={Position.Top} className="!opacity-0" />
            {getIcon(data.type)}
            <span className="text-sm font-medium text-slate-200">{data.label}</span>
            <Handle type="source" position={Position.Bottom} className="!opacity-0" />
        </div>
    );
};

export default function DashboardPage() {
    const nodeTypes = useMemo(() => ({ default: NodeWrapper }), []);

    // FIX: Added <any> generic types so TypeScript knows these won't stay empty
    const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch real AST data from the API
    useEffect(() => {
        const fetchArchitecture = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                const json = await response.json();

                if (json.success) {
                    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                        json.data.nodes,
                        json.data.edges
                    );
                    setNodes(layoutedNodes);
                    setEdges(layoutedEdges);
                }
            } catch (error) {
                console.error('Failed to fetch architecture:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArchitecture();
    }, [setNodes, setEdges]);

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
                    <p className="text-xs text-slate-400 mt-1">Repository: apps/api/src</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Status</h3>
                    <p className="text-sm text-emerald-400 mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live Graph Rendered
                    </p>
                </div>
            </aside>

            <main className="flex-1 h-full relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    colorMode="dark"
                    fitView
                >
                    <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#334155" />
                    <Controls />
                </ReactFlow>
            </main>
        </div>
    );
}