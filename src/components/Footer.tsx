'use client'

import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                            Kusu<span className="text-primary">Consult</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Innovating specifically for your success. We build the future of digital interaction with AI, Cloud, and Software solutions.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start"><span className="font-bold text-white mr-2">Tel:</span> +234 703 617 1049</li>
                            <li className="flex items-start"><span className="font-bold text-white mr-2">Email:</span> admin@kusuconsult.com</li>
                            <li className="flex items-start"><span className="font-bold text-white mr-2">Addr:</span> No.23, Nenrot Plaza, Domkat Bali Road, Jos, Plateau State. Nigeria</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Mobile Applications</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cloud Consultancy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest tech updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-2 rounded-l-lg bg-slate-800 border-none text-white focus:ring-1 focus:ring-primary outline-none text-sm placeholder-slate-500"
                            />
                            <button className="px-4 py-2 bg-primary hover:bg-indigo-600 rounded-r-lg text-white font-bold text-sm transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} KusuConsult. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
