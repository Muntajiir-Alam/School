"use client";
import NavBar from "../../components/NavBar";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have questions about admissions, curriculum, or school policies? We are here to help. Reach out to our administrative office.
                    </p>
                </div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Contact Information & Map */}
                    <div className="w-full lg:w-5/12 space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-text-dark mb-8">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-bg-card text-primary flex items-center justify-center shrink-0 border border-border-light">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark text-lg mb-1">Campus Address</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            EduLe Public School, <br />
                                            Education Valley Road, Sector 62, <br />
                                            Noida, UP 201301, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-bg-card text-primary flex items-center justify-center shrink-0 border border-border-light">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark text-lg mb-1">Phone Numbers</h4>
                                        <p className="text-gray-600">Main Office: +91 98765 43210</p>
                                        <p className="text-gray-600">Admissions: +91 98765 43211</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-bg-card text-primary flex items-center justify-center shrink-0 border border-border-light">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark text-lg mb-1">Email Addresses</h4>
                                        <p className="text-gray-600">info@eduleschool.com</p>
                                        <p className="text-gray-600">admissions@eduleschool.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-64 bg-gray-200 relative group">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map View" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center bg-text-dark/40">
                                <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-semibold text-text-dark flex items-center gap-2">
                                    <MapPin size={18} className="text-primary" /> View on Google Maps
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/40 border border-gray-100 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-text-dark mb-6">Send us a Message</h3>

                            <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input type="text" className="w-full px-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                        <input type="email" className="w-full px-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                    <input type="tel" className="w-full px-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800" placeholder="+91 98765 43210" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject / Inquiry Type</label>
                                    <select className="w-full px-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-600 appearance-none">
                                        <option value="">Select an option</option>
                                        <option value="admission">Admissions</option>
                                        <option value="careers">Careers & Hiring</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="complaint">Feedback / Complaint</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                    <textarea rows="4" className="w-full px-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800 resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl shadow-md shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </main>

            <footer className="bg-text-dark text-white py-10 text-center text-sm mt-auto">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
