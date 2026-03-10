import NavBar from "../../components/NavBar";
import { BookOpen, Monitor, FlaskConical, PenTool, Calculator, Globe2 } from "lucide-react";

export default function CurriculumPage() {
    const subjects = [
        { name: "Mathematics & Logic", icon: Calculator, desc: "Building strong analytical and problem-solving skills." },
        { name: "Sciences", icon: FlaskConical, desc: "Physics, Chemistry, and Biology with practical lab sessions." },
        { name: "Languages & Literature", icon: Globe2, desc: "English, Hindi, and regional languages focusing on communication." },
        { name: "Social Sciences", icon: BookOpen, desc: "History, Geography, and Civics to understand our world." },
        { name: "Computer Science", icon: Monitor, desc: "Coding, digital literacy, and modern technologies." },
        { name: "Arts & Humanities", icon: PenTool, desc: "Fostering creativity through fine arts, music, and dance." }
    ];

    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Structured Learning</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">Our Curriculum</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        A dynamic, holistic syllabus that aligns with national education standards while nurturing individual talents.
                    </p>
                </div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full space-y-24">

                {/* Board Affiliation */}
                <section id="school-curriculum" className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-border-light flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-text-dark">Board Affiliation & Standard</h2>
                        <div className="w-16 h-1 bg-primary rounded-full"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We follow the <strong>Central Board of Secondary Education (CBSE)</strong> curriculum. Our academic structure is meticulously crafted to prepare students for national level competitive exams while ensuring a stress-free learning environment.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Continuous alignment with the National Education Policy (NEP 2020) ensures our students receive a modern, skill-based education rather than rote memorization.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                            alt="Student writing"
                            className="rounded-2xl shadow-lg border-4 border-white w-full aspect-video object-cover"
                        />
                    </div>
                </section>

                {/* Core Subjects Grid */}
                <section id="books">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-dark mb-4">Core Subject Areas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive coverage across diverse disciplines to build well-rounded individuals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-bg-card text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <subject.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-3">{subject.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{subject.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Downloads */}
                    <section id="download" className="bg-bg-card rounded-3xl p-8 border border-border-light text-center">
                        <h2 className="text-2xl font-bold text-text-dark mb-4">Study Material Downloads</h2>
                        <p className="text-gray-600 mb-6">Access assignments, previous year question papers, and official resources.</p>
                        <button className="px-6 py-2.5 bg-white border border-border-light rounded-xl font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors">View Downloads</button>
                    </section>

                    {/* Self Affidavit */}
                    <section id="self-affidavit" className="bg-bg-card rounded-3xl p-8 border border-border-light text-center">
                        <h2 className="text-2xl font-bold text-text-dark mb-4">Self Affidavit Forms</h2>
                        <p className="text-gray-600 mb-6">Download necessary declarations and affidavit forms for admissions and general use.</p>
                        <button className="px-6 py-2.5 bg-white border border-border-light rounded-xl font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors">Get Form</button>
                    </section>

                    {/* Transfer Certificate */}
                    <section id="transfer-certificate" className="bg-bg-card rounded-3xl p-8 border border-border-light text-center">
                        <h2 className="text-2xl font-bold text-text-dark mb-4">Transfer Certificate (TC)</h2>
                        <p className="text-gray-600 mb-6">View policies regarding school leaving and apply for a Transfer Certificate online.</p>
                        <button className="px-6 py-2.5 bg-white border border-border-light rounded-xl font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors">Apply for TC</button>
                    </section>

                    {/* Academic Calendar */}
                    <section id="academic-calendar" className="bg-bg-card rounded-3xl p-8 border border-border-light text-center">
                        <h2 className="text-2xl font-bold text-text-dark mb-4">Academic Calendar</h2>
                        <p className="text-gray-600 mb-6">Check important dates, exams, and extracurricular events for the current year.</p>
                        <button className="px-6 py-2.5 bg-white border border-border-light rounded-xl font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors">View Calendar</button>
                    </section>
                </div>

                {/* Annual Report */}
                <section id="annual-report" className="bg-text-dark text-white rounded-3xl p-10 shadow-lg text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Annual General Report</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">Review our yearly progress, achievements, and financial summaries published by the institution.</p>
                        <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-md transition-colors">Download Latest Report</button>
                    </div>
                </section>

            </main>

            <footer className="bg-text-dark text-white py-10 text-center text-sm">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
