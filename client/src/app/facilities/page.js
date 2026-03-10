import NavBar from "../../components/NavBar";
import { MonitorPlay, Book, Flame, Bus, Dribbble, HeartPulse } from "lucide-react";

export default function FacilitiesPage() {
    const facilities = [
        {
            title: "Smart Classrooms",
            icon: MonitorPlay,
            desc: "Spacious, air-conditioned classrooms equipped with interactive smart boards and fast Wi-Fi for multimedia learning.",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Advanced Laboratories",
            icon: Flame,
            desc: "State-of-the-art Physics, Chemistry, Biology, and Robotics labs enabling practical, hands-on scientific exploration.",
            img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Comprehensive Library",
            icon: Book,
            desc: "A vast collection of academic books, fiction, journals, and digital resources in a quiet, dedicated reading space.",
            img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Sports Complex",
            icon: Dribbble,
            desc: "Outdoor fields for football and cricket, synthetic courts for basketball and tennis, and indoor facilities for table tennis.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Transport Fleet",
            icon: Bus,
            desc: "A fleet of GPS-enabled, air-conditioned buses ensuring safe and comfortable transit for students across the city.",
            img: "https://images.unsplash.com/photo-1557223562-6c77ef161f5c?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Medical Room",
            icon: HeartPulse,
            desc: "A fully equipped on-campus infirmary with a qualified nurse and a visiting doctor for immediate first aid and care.",
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Campus Life</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">Our Facilities</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        World-class infrastructure designed to provide a safe, engaging, and comprehensive environment for learning and development.
                    </p>
                </div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <fac.icon size={20} />
                                </div>
                            </div>
                            <div className="p-6 grow flex flex-col">
                                <h3 className="text-xl font-bold text-text-dark mb-3">{fac.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{fac.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            <footer className="bg-text-dark text-white py-10 text-center text-sm">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
