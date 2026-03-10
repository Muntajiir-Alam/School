"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ShieldCheck, UserCircle, GraduationCap } from "lucide-react";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState('student');

    const roles = [
        { id: 'student', title: 'Student', icon: GraduationCap },
        { id: 'parent', title: 'Parent', icon: UserCircle },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-light font-sans p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100 z-10">

                {/* Left Side: Signup Form */}
                <div className="w-full md:w-7/12 p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center order-2 md:order-1">
                    <div className="max-w-md w-full mx-auto md:mx-0 lg:ml-auto">

                        {/* Mobile Branding (Visible only on small screens) */}
                        <div className="md:hidden mb-8 text-center">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
                                    <ShieldCheck size={22} className="text-white" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-text-dark">EduLe</span>
                            </Link>
                        </div>

                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-text-dark mb-2">Create Account</h1>
                            <p className="text-gray-500 font-medium">Join our educational community today.</p>
                        </div>

                        <form className="space-y-5" onSubmit={e => e.preventDefault()}>

                            {/* Role Selection */}
                            <div className="space-y-2 mb-6">
                                <label className="text-sm font-semibold text-gray-700 ml-1">I am a</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {roles.map(role => (
                                        <button
                                            key={role.id}
                                            type="button"
                                            onClick={() => setSelectedRole(role.id)}
                                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-medium transition-all ${selectedRole === role.id ? 'bg-primary/10 border-primary text-primary shadow-sm' : 'bg-bg-light border-border-light text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            <role.icon size={18} /> {role.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Full Name Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-11 pr-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full pl-11 pr-5 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800"
                                        placeholder="john@eduleschool.com"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-11 pr-12 py-3.5 bg-bg-light border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-800"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 ml-1 mt-1">Must be at least 8 characters long.</p>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start mt-4">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 mt-0.5 text-primary bg-bg-light border-border-light rounded focus:ring-primary/50 shrink-0"
                                />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-600 leading-tight">
                                    I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl shadow-md shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-6">
                                Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Log In Link */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-500 font-medium">
                                Already have an account?{' '}
                                <Link href="/login" className="text-primary hover:text-primary-dark font-bold hover:underline transition-all">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Illustration / Branding */}
                <div className="w-full md:w-5/12 bg-text-dark text-white p-10 md:p-12 hidden md:flex flex-col justify-between relative overflow-hidden group order-1 md:order-2">
                    <div className="absolute inset-0 bg-linear-to-tl from-primary-dark/80 to-transparent z-0 opacity-50 mix-blend-multiply"></div>
                    <img
                        src="https://images.unsplash.com/photo-1571260899304-425dea4cf369?auto=format&fit=crop&q=80&w=800"
                        alt="Library"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0"
                    />

                    <div className="relative z-10 text-right">
                        <Link href="/" className="inline-flex items-center justify-end gap-2 mb-12 hover:opacity-80 transition-opacity">
                            <span className="text-2xl font-bold tracking-tight">EduLe</span>
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                <ShieldCheck size={22} className="text-white" />
                            </div>
                        </Link>
                    </div>

                    <div className="relative z-10 text-right mt-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Begin your journey.</h2>
                        <p className="text-gray-300 leading-relaxed font-medium">
                            Join a community dedicated to academic excellence, innovation, and character building.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
