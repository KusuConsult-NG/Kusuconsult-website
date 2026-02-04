'use client'

import { Code, Lightbulb, Bot, ShieldCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
    {
        title: 'Custom Software Architecture',
        description: 'Bespoke digital ecosystems ranging from high-performance web platforms to enterprise-grade mobile applications, engineered for your specific operational goals.',
        icon: Code,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
    {
        title: 'Strategic Consultancy',
        description: 'Expert technical guidance and digital transformation strategies to navigate complex logic, optimize workflows, and achieve sustainable business growth.',
        icon: Lightbulb,
        color: 'text-amber-500',
        bg: 'bg-amber-50',
    },
    {
        title: 'Advanced Technologies (Web3 & AI)',
        description: 'Leveraging Artificial Intelligence, Machine Learning, and Blockchain protocols to drive innovation, automate processes, and secure competitive advantage.',
        icon: Bot,
        color: 'text-sky-500',
        bg: 'bg-sky-50',
    },
    {
        title: 'Quality Assurance & Security',
        description: 'Rigorous testing methodologies and security protocols ensuring your software solutions meet the highest standards of reliability and compliance.',
        icon: ShieldCheck,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Core Competencies</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Engineered for Excellence</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We architect robust, scalable solutions designed to elevate your business operations. From concept to deployment, we deliver end-to-end technology services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>

                            <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-indigo-700 transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
