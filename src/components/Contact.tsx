'use client'

import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Let's Start Your Project</h3>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">
                        Ready to transform your business? Contact us today for a free consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-span-1 space-y-8"
                    >
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 h-full">
                            <h4 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h4>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-100 text-primary flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Email Us</p>
                                        <p className="text-lg text-slate-900 font-medium hover:text-primary transition-colors cursor-pointer">admin@kusuconsult.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Call Us</p>
                                        <p className="text-lg text-slate-900 font-medium hover:text-sky-600 transition-colors cursor-pointer">+234 703 617 1049</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Visit Us</p>
                                        <p className="text-lg text-slate-900 font-medium">No.23, Nenrot Plaza, Domkat Bali Road, Jos, Plateau State. Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <form action={async (formData) => {
                            try {
                                const { sendContactEmail } = await import('@/app/actions/contact')
                                const res = await sendContactEmail(formData)
                                if (res.success) {
                                    alert('Message sent successfully!')
                                    // Normally we would reset the form here
                                } else {
                                    alert(res.error || 'Failed to send message.')
                                }
                            } catch (e) {
                                alert('An error occurred.')
                            }
                        }} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
