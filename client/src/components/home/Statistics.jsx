"use client";
// We add "use client" because counters usually require state/effects, even if static initially

import { Users, BookOpen, MapPin, Award } from 'lucide-react';

export default function Statistics() {
    const stats = [
        { label: "Students", value: "1550+", icon: <Users size={32} /> },
        { label: "Teachers", value: "45+", icon: <BookOpen size={32} /> },
        { label: "Classrooms", value: "30+", icon: <MapPin size={32} /> },
        { label: "Awards", value: "9+", icon: <Award size={32} /> }
    ];

    return (
        <section className="relative py-20 bg-[#111928] text-white">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed opacity-20"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=2000")' }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-[#111928]/90"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="mb-4 text-white/70 group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                                {stat.icon}
                            </div>
                            <div className="relative mb-2">
                                <span className="text-4xl md:text-5xl font-bold tracking-tight">
                                    {stat.value}
                                </span>
                                {/* Small indicator line between numbers */}
                                {idx !== stats.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-12 lg:-right-16 w-1 h-12 bg-white/10 -translate-y-1/2"></div>
                                )}
                            </div>
                            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-white/80">{stat.label}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
