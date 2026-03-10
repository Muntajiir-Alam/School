export default function Awards() {
    const topStudents = [
        {
            name: "SARAH KHAN",
            achievement: "1st Rank Board Exams",
            score: "98.8%",
            img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
            bgClass: "from-blue-900 to-[#1a2b3c]"
        },
        {
            name: "RAHUL SHARMA",
            achievement: "National Science Olympiad",
            score: "Gold Medalist",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
            bgClass: "from-primary-dark to-primary"
        },
        {
            name: "PRIYA SINGH",
            achievement: "State Level Debate",
            score: "Best Speaker",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
            bgClass: "from-blue-900 to-[#1a2b3c]"
        }
    ];

    return (
        <section className="w-full bg-bg-light py-20 relative border-y border-gray-100 font-sans">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23309255\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                <div className="text-center mb-14">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">ACHIEVEMENTS</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#1a2b3c]">Awards & Recognition</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {topStudents.map((student, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white transition-transform hover:-translate-y-2 duration-300">

                            <div className="aspect-[4/5] overflow-hidden relative border-b-4 border-white">
                                <img
                                    src={student.img}
                                    alt={student.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            <div className={`p-6 text-center bg-gradient-to-br ${student.bgClass} text-white`}>
                                <h3 className="text-xl font-bold mb-1 tracking-wide">{student.name}</h3>
                                <p className="text-sm text-gray-200 mb-2 font-medium">{student.achievement}</p>
                                <div className="inline-block px-3 py-1 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm text-sm font-bold">
                                    {student.score}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
