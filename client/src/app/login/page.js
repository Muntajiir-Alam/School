"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-light font-sans p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100 z-10">

                {/* Left Side: Illustration / Branding */}
                <div className="w-full md:w-5/12 bg-text-dark text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary-dark/80 to-transparent z-0 opacity-50 mix-blend-multiply"></div>
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                        alt="Campus"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0"
                    />

                    <div className="relative z-10">
                        <Link href="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                <ShieldCheck size={22} className="text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">EduLe</span>
                        </Link>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Welcome back to your portal.</h2>
                        <p className="text-gray-300 leading-relaxed font-medium">
                            Access your academic records, assignments, and campus notifications securely.
                        </p>
                    </div>

                    <div className="relative z-10 hidden md:block mt-20">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                            <ShieldCheck className="text-primary shrink-0" size={32} />
                            <div className="text-sm text-gray-200">
                                <p className="font-semibold text-white">Secure Access</p>
                                <p>Your data is encrypted and protected.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-text-dark mb-2">Sign In</h1>
                            <p className="text-gray-500 font-medium">Please enter your credentials to continue.</p>
                        </div>

                        <form className="space-y-6" onSubmit={e => e.preventDefault()}>

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
                                        placeholder="student@eduleschool.com"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1 mb-2">
                                    <label className="text-sm font-semibold text-gray-700">Password</label>
                                    <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                        Forgot Password?
                                    </Link>
                                </div>
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
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="w-4 h-4 text-primary bg-bg-light border-border-light rounded focus:ring-primary/50"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-sm font-medium text-gray-600 cursor-pointer">
                                    Remember me for 30 days
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl shadow-md shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-8">
                                Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Sign Up Link */}
                        <div className="mt-10 text-center">
                            <p className="text-gray-500 font-medium">
                                Don't have an account?{' '}
                                <Link href="/signup" className="text-primary hover:text-primary-dark font-bold hover:underline transition-all">
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
