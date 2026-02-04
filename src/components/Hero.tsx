'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">

            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-50 to-white -skew-x-12 translate-x-32 -z-0" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse -z-0" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000 -z-0" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sm font-semibold text-primary"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Established 2017 • Trusted by Industry Leaders
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1]"
                    >
                        Pioneering Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Digital & Blockchain Solutions
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg"
                    >
                        Since 2017, KusuConsult has empowered businesses with custom software, crypto ecosystems, and AI-driven innovation. We turn complexity into competitive advantage.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center">
                            Partner With Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 shadow-sm hover:border-primary/30 hover:bg-slate-50 transition-all flex items-center justify-center group">
                            <PlayCircle className="mr-2 w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            Explore Portfolio
                        </button>
                    </motion.div>
                </div>

                {/* Visual / Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative h-[500px] hidden lg:block"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-3 opacity-20 blur-xl"></div>
                    <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center p-8">
                        {/* Simulation of a Dashboard UI */}
                        <div className="w-full h-full grid grid-rows-3 gap-6">
                            <div className="grid grid-cols-3 gap-6 h-32">
                                <div className="col-span-2 bg-slate-50 rounded-xl animate-pulse"></div>
                                <div className="bg-slate-100 rounded-xl animate-pulse delay-75"></div>
                            </div>
                            <div className="bg-slate-50 rounded-xl animate-pulse delay-150"></div>
                            <div className="grid grid-cols-2 gap-6 h-32">
                                <div className="bg-indigo-50/50 rounded-xl animate-pulse delay-200"></div>
                                <div className="bg-slate-50 rounded-xl animate-pulse delay-300"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
