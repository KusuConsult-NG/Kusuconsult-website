'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    BellRing, 
    Map, 
    WifiOff, 
    Megaphone, 
    ArrowRight, 
    Smartphone, 
    Users, 
    Layers, 
    ChevronRight,
    Activity,
    Radio,
    Globe
} from 'lucide-react'
import Link from 'next/link'

type TabType = 'overview' | 'features'

export default function Ewer() {
    const [activeTab, setActiveTab] = useState<TabType>('overview')
    const [selectedFeature, setSelectedFeature] = useState<number>(0)

    const keyFeatures = [
        {
            title: 'Grassroots Alert & Dispatch',
            tagline: 'Direct routing to nearby field units with structured escalation.',
            description: 'Allows citizens to file distress signals or reports that route directly to nearby field units. If local units need support, alerts can be escalated through the command chain to regional and central teams.',
            icon: BellRing,
            color: 'from-rose-500 to-red-600',
            bgGlow: 'rgba(239, 68, 68, 0.15)',
            visual: (
                <div className="relative w-full h-48 bg-slate-950/40 rounded-xl border border-white/5 flex flex-col justify-center items-center overflow-hidden p-6">
                    <div className="flex items-center gap-2 md:gap-4 z-10 w-full justify-around">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-400 animate-pulse">
                                <Smartphone size={18} />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-semibold">Citizen</span>
                        </div>
                        <ChevronRight className="text-slate-600 animate-pulse" />
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
                                <Users size={18} />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-semibold">Field Unit</span>
                        </div>
                        <ChevronRight className="text-slate-600 animate-pulse delay-75" />
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/50 flex items-center justify-center text-sky-400">
                                <Layers size={18} />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-semibold">HQ Command</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent)]" />
                </div>
            )
        },
        {
            title: 'Active Response Map',
            tagline: 'Real-time telemetry and dispatcher interface for resource allocation.',
            description: 'Provides dispatchers with a real-time visualization of active alerts, location trails, and responder locations to ensure resources are routed accurately.',
            icon: Map,
            color: 'from-sky-400 to-indigo-500',
            bgGlow: 'rgba(14, 165, 233, 0.15)',
            visual: (
                <div className="relative w-full h-48 bg-slate-950/40 rounded-xl border border-white/5 overflow-hidden p-6 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-24 h-24 rounded-full border border-sky-500/20 animate-ping" />
                        <div className="absolute w-12 h-12 rounded-full border border-sky-500/40 animate-ping delay-500" />
                        <div className="w-3 h-3 rounded-full bg-sky-500 shadow-[0_0_10px_#0EA5E9] z-10" />
                        
                        <div className="absolute top-4 left-6 flex items-center gap-1.5 bg-slate-900/90 border border-white/10 px-2 py-0.5 rounded-full text-[9px] text-sky-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Unit A-02
                        </div>
                        <div className="absolute bottom-6 right-8 flex items-center gap-1.5 bg-slate-900/90 border border-rose-500/30 px-2 py-0.5 rounded-full text-[9px] text-rose-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                            Alert (LGA Central)
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Resilient Distress Signals',
            tagline: 'Hybrid network fallback with Appwrite Database & SMS fallbacks.',
            description: 'Uses a hybrid network of database streams and SMS gateway fallbacks, allowing users to send critical requests even in areas with poor or intermittent cellular coverage.',
            icon: WifiOff,
            color: 'from-amber-400 to-orange-500',
            bgGlow: 'rgba(245, 158, 11, 0.15)',
            visual: (
                <div className="relative w-full h-48 bg-slate-950/40 rounded-xl border border-white/5 overflow-hidden p-6 flex flex-col justify-center items-center">
                    <div className="flex gap-8 items-center z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                <Globe size={20} />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-semibold">Data Stream</span>
                        </div>
                        
                        <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-amber-500 relative flex items-center justify-center">
                            <span className="absolute w-2 h-2 rounded-full bg-white animate-ping" />
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <Radio size={20} className="animate-pulse" />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-semibold">SMS Gateway</span>
                        </div>
                    </div>
                    <div className="mt-4 text-[10px] text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-semibold">
                        Offline Fallback Protocol Active
                    </div>
                </div>
            )
        },
        {
            title: 'Targeted Broadcast Updates',
            tagline: 'Geofenced safety broadcasts targeting specific wards and districts.',
            description: 'Enables coordinators to instantly push safety alerts and important updates to specific wards, polling areas, or regions.',
            icon: Megaphone,
            color: 'from-emerald-400 to-teal-500',
            bgGlow: 'rgba(52, 211, 153, 0.15)',
            visual: (
                <div className="relative w-full h-48 bg-slate-950/40 rounded-xl border border-white/5 overflow-hidden p-6 flex flex-col justify-center items-center">
                    <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 z-10">
                            <Megaphone size={18} className="animate-bounce" />
                        </div>
                        <div className="absolute w-16 h-16 rounded-full border border-emerald-500/20 animate-ping" />
                        <div className="absolute w-24 h-24 rounded-full border border-emerald-500/10 animate-ping delay-300" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-[240px]">
                        <div className="text-[8px] bg-slate-900 border border-white/5 py-1 rounded text-center text-slate-400">Ward 01 (Broadcasting)</div>
                        <div className="text-[8px] bg-slate-900 border border-white/5 py-1 rounded text-center text-slate-400">Ward 02 (Broadcasting)</div>
                        <div className="text-[8px] bg-slate-900 border border-white/5 py-1 rounded text-center text-slate-400">Ward 03 (Queue)</div>
                    </div>
                </div>
            )
        }
    ]

    return (
        <section id="ewer" className="py-24 px-6 bg-slate-900 text-slate-100 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/35 text-xs font-bold uppercase tracking-wider text-rose-400"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse" />
                        Featured Product Case Study
                    </motion.div>
                    
                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white"
                    >
                        Rainbow EWER
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed font-medium"
                    >
                        A grassroots platform for emergency assistance, public response, and localized first-responder coordination.
                    </motion.p>
                </div>

                {/* Tab selector */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                activeTab === 'overview' 
                                ? 'bg-primary text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            At-a-Glance Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                activeTab === 'features' 
                                ? 'bg-primary text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Key Features
                        </button>
                    </div>
                </div>

                {/* Tab content area */}
                <div className="relative min-h-[480px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden hover:border-white/20 transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none" />
                                        
                                        <h4 className="text-xl font-bold text-white mb-4">Empowering Civic Emergency Coordination</h4>
                                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                            Rainbow EWER is a public safety and assistance network designed to connect citizens in need of urgent help with local responders. The platform ensures that when an individual triggers an alert, response units are dispatched quickly and coordinated across neighborhoods, ward districts, and central support operations.
                                        </p>
                                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                                <h5 className="font-bold text-white mb-1 text-sm">Dispatched Mobilization</h5>
                                                <p className="text-xs text-slate-400">Escalates alerts through the command chain in seconds.</p>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                                <h5 className="font-bold text-white mb-1 text-sm">Resilient Fallbacks</h5>
                                                <p className="text-xs text-slate-400">Guarantees delivery using database sync & SMS alerts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 relative w-full h-[320px]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
                                    <div className="relative w-full h-full backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden">
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Product Telemetry</span>
                                            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[9px] text-emerald-400 font-semibold uppercase">Live Nodes</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-center py-4">
                                            <div className="w-28 h-28 rounded-full border border-white/5 flex items-center justify-center relative">
                                                <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
                                                <div className="w-20 h-20 rounded-full bg-indigo-500/5 border border-indigo-500/20 flex items-center justify-center">
                                                    <Activity className="text-rose-500 w-6 h-6 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-center text-slate-400">
                                            High-availability Appwrite database streams aligned with geo-targeted response protocols.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'features' && (
                            <motion.div
                                key="features"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                            >
                                <div className="lg:col-span-5 flex flex-col gap-3">
                                    {keyFeatures.map((feat, index) => {
                                        const Icon = feat.icon
                                        const isSelected = selectedFeature === index
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedFeature(index)}
                                                className={`w-full p-4 rounded-xl text-left border transition-all duration-300 flex items-center gap-4 ${
                                                    isSelected 
                                                    ? 'bg-white/10 border-white/20 shadow-lg translate-x-2' 
                                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                                }`}
                                            >
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feat.color} flex items-center justify-center text-white shrink-0`}>
                                                    <Icon size={16} />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-white text-sm leading-snug">{feat.title}</h5>
                                                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{feat.tagline}</p>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>

                                <div className="lg:col-span-7">
                                    <div className="h-full relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
                                        <div 
                                            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-500" 
                                            style={{ backgroundColor: keyFeatures[selectedFeature].bgGlow }}
                                        />

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded bg-gradient-to-br ${keyFeatures[selectedFeature].color} flex items-center justify-center text-white`}>
                                                    {(() => {
                                                        const IconComponent = keyFeatures[selectedFeature].icon
                                                        return <IconComponent size={14} />
                                                    })()}
                                                </div>
                                                <h4 className="text-lg font-bold text-white">{keyFeatures[selectedFeature].title}</h4>
                                            </div>
                                            
                                            <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
                                                {keyFeatures[selectedFeature].description}
                                            </p>
                                        </div>

                                        <div className="mt-8">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">Technical Flow Visualization</span>
                                            {keyFeatures[selectedFeature].visual}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* demo action button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <span>Schedule a Demo for EWER</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    )
}
