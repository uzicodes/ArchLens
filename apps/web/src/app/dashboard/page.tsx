'use client';

import React, { useMemo } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    BackgroundVariant,
    useNodesState,
    useEdgesState,
    Position,
    Handle // <-- 1. Imported Handle
} from '@xyflow/react';
import dagre from 'dagre';
import { Shield, Database, Layout, Server, AlertCircle } from 'lucide-react';

import '@xyflow/react/dist/style.css';

// Mock Data representing an analyzed repository structure
const initialNodes = [
    { id: '1', data: { label: 'Next.js Frontend', type: 'frontend' }, position: { x: 0, y: 0 } },
    { id: '2', data: { label: 'Auth Middleware', type: 'auth' }, position: { x: 0, y: 0 } },
    { id: '3', data: { label: 'Node.js REST API', type: 'backend' }, position: { x: 0, y: 0 } },
    { id: '4', data: { label: 'PostgreSQL DB', type: 'database' }, position: { x: 0, y: 0 } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
];

// Dagre Graph Auto-Layout Engine Configuration
const getLayoutedElements = (nodes: any[], edges: any[]) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    // Set layout direction: Top to Bottom (TB)
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

// 2. Updated Node Component with Handles
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
            {/* Invisible target handle for incoming edges */}
            <Handle type="target" position={Position.Top} className="!opacity-0" />

            {getIcon(data.type)}
            <span className="text-sm font-medium text-slate-200">{data.label}</span>

            {/* Invisible source handle for outgoing edges */}
            <Handle type="source" position={Position.Bottom} className="!opacity-0" />
        </div>
    );
};

export default function DashboardPage() {
    const nodeTypes = useMemo(() => ({ default: NodeWrapper }), []);

    const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
        return getLayoutedElements(initialNodes, initialEdges);
    }, []);

    const [nodes, , onNodesChange] = useNodesState(layoutedNodes);
    const [edges, , onEdgesChange] = useEdgesState(layoutedEdges);

    return (
        <div className="w-screen h-screen bg-slate-950 flex">
            <aside className="w-80 h-full border-r border-white/10 bg-slate-900/50 backdrop-blur-md p-6 flex flex-col gap-6 z-10">
                <div>
                    <h2 className="text-lg font-semibold text-white">ArchLens Analysis</h2>
                    <p className="text-xs text-slate-400 mt-1">Repository: mock-org/mvp-demo</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Architecture Summary</h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                        This application utilizes a clean, decoupled layered layout architecture. The Next.js client flows traffic directly down into an internal validation micro-module before accessing core database layers.
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
                    colorMode="dark" // <-- 3. Forces native dark mode styling
                    fitView
                >
                    <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#334155" />
                    {/* 4. Removed the broken custom Tailwind classes */}
                    <Controls />
                </ReactFlow>
            </main>
        </div>
    );
}