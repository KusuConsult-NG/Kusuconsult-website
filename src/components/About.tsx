'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Heart, Zap, Shield, Users, Globe2, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Main Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            Our Vision
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Experience & Knowledge <span className="text-primary">Since 2017</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                KusuConsult is a premier software development and blockchain consultancy firm. We specialize in delivering high-impact, innovative solutions tailored to address unique enterprise challenges.
                            </p>
                            <p>
                                With over a decade of collective experience and 7+ years serving the blockchain ecosystem, we empower clients to harness emerging technologies—including AI, Web3, and Cloud computing—to drive sustainable growth and operational efficiency.
                            </p>
                        </div>
                    </motion.div>

                    {/* Office Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
                    >
                        <Image
                            src="/images/about_office.png"
                            alt="KusuConsult Diverse Professional Tech Team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Excellence', desc: 'Uncompromising commitment to quality execution, from code architecture to client support.', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
                        { title: 'Innovation', desc: 'Pioneering cutting-edge solutions that anticipate and solve evolving market needs.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
                        { title: 'Integrity', desc: 'Operating with absolute transparency, honesty, and ethical standards in all engagements.', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                        { title: 'Collaboration', desc: 'Fostering synergistic partnerships with clients to ensure alignment and shared success.', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
                    ].map((value, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className={`w-10 h-10 rounded-lg ${value.bg} ${value.color} flex items-center justify-center mb-4`}>
                                <value.icon className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                            <p className="text-sm text-slate-600">{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Community Impact Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Social Impact Initiatives</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We are committed to fostering diversity and education in technology. Our initiatives focus on accelerating adoption and inclusion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                                <Globe2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Women in Tech & Blockchain</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Hosting specialized meetups to empower female participation in the blockchain space. Curated by successful female leaders to inspire and mentor the next generation.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Blockchain Development Academy</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Offering intensive 3-month development bootcamps for both aspiring and advanced engineers, with a dedicated focus on increasing female representation in the developer community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
