import NavBar from "../../components/NavBar";
import { BookOpen, Users, Brain, Activity, Award } from "lucide-react";

export default function AcademicsPage() {
    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            {/* Page Header */}
            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Excellence in Education</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">Academics <span className="text-primary">&</span> Programs</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore our comprehensive academic programs designed to foster intellectual growth, creativity, and critical thinking.
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full space-y-24">

                {/* Educational Stages Section */}
                <section id="school-house">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-dark mb-4">Our Learning Stages</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Pre-Primary", grade: "Nursery - UKG", age: "3-5 Years", desc: "Focuses on playful learning, basic motor skills, and social interaction in a nurturing environment.", icon: Brain, color: "text-blue-500", bg: "bg-blue-50" },
                            { name: "Primary", grade: "Class I - V", age: "6-10 Years", desc: "Building strong foundational knowledge in core subjects while encouraging curiosity and creativity.", icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
                            { name: "Middle", grade: "Class VI - VIII", age: "11-13 Years", desc: "Transitioning to more structured academic subjects with an emphasis on independent thinking and projects.", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
                            { name: "Secondary", grade: "Class IX - XII", age: "14-18 Years", desc: "Rigorous academic preparation for board exams, career counseling, and specialized subject streams.", icon: Award, color: "text-purple-500", bg: "bg-purple-50" }
                        ].map((stage, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-xl ${stage.bg} ${stage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <stage.icon size={28} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-2">{stage.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{stage.grade} • Age {stage.age}</p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {stage.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="bg-bg-card rounded-3xl p-10 md:p-16 border border-border-light relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] z-0"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">Our Teaching Methodology</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We believe that true learning goes beyond textbooks. Our pedagogical approach is designed to be interactive, engaging, and relevant to the real world.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Experiential Learning & Practical Application",
                                    "Technology-Integrated Smart Classrooms",
                                    "Personalized Attention with Low Student-Teacher Ratio",
                                    "Continuous & Comprehensive Evaluation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary text-white p-1 rounded-full shrink-0">
                                            <Activity size={14} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-48 object-cover shadow-sm" alt="Students learning" />
                                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-48 object-cover shadow-sm mt-8" alt="Teacher explaining" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fees Structure */}
                <section id="fees-structure" className="bg-white rounded-3xl p-10 shadow-sm border border-border-light text-center">
                    <h2 className="text-3xl font-bold text-text-dark mb-4">Fee Structure</h2>
                    <p className="text-gray-600 mb-6">Detailed information on our tuition and fees will be updated here shortly.</p>
                </section>

                {/* Holiday List */}
                <section id="holiday-list" className="bg-white rounded-3xl p-10 shadow-sm border border-border-light text-center">
                    <h2 className="text-3xl font-bold text-text-dark mb-4">Holiday List</h2>
                    <p className="text-gray-600 mb-6">The academic calendar for holidays will be published here.</p>
                </section>

                {/* Events */}
                <section id="events" className="bg-white rounded-3xl p-10 shadow-sm border border-border-light text-center">
                    <h2 className="text-3xl font-bold text-text-dark mb-4">Upcoming Events</h2>
                    <p className="text-gray-600 mb-6">Stay tuned for workshops, sports meets, and annual functions.</p>
                </section>

            </main>

            <footer className="bg-text-dark text-white py-10 text-center text-sm mt-auto">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
