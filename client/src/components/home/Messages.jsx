import Button from '../ui/Button';

export default function Messages() {
    return (
        <section className="w-full bg-white py-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">

                {/* Principal's Message */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">LEADERSHIP</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-800">Principal's Message</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full md:w-[40%]">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-border-light aspect-square md:aspect-[4/3] w-full max-w-sm mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                    alt="Principal"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-[60%]">
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium italic text-lg border-l-4 border-primary pl-6 bg-gray-50 py-4 pr-4 rounded-r-xl">
                                "Education is the most powerful weapon which you can use to change the world. At EduLe, our aim is to foster a learning environment where students are inspired to explore their potential and develop a passion for lifelong learning."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We are committed to providing an ecosystem that blends traditional values with modern methodology. Our rigorous academic curriculum is perfectly balanced with extracurricular activities to ensure the holistic development of our students into responsible global citizens.
                            </p>
                            <div className="flex flex-col mb-6">
                                <span className="text-xl font-bold text-[#1a2b3c]">Dr. Rajesh Kumar</span>
                                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Principal, EduLe School</span>
                            </div>
                            <Button variant="outline" size="sm" href="/about">Read Full Message</Button>
                        </div>
                    </div>
                </div>


                {/* SMC Chairman Message */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">VISIONARY</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-800">SMC Chairman</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                        <div className="w-full md:w-[35%]">
                            <div className="relative rounded-full overflow-hidden shadow-xl border-8 border-bg-card aspect-square w-full max-w-[280px] mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                                    alt="SMC Chairman"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-[65%] text-left">
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium text-lg">
                                "A successful educational institution requires a strong foundation of community support, dedicated teachers, and a clear vision. The School Management Committee is deeply invested in the continuous improvement of EduLe's infrastructure and academic standards."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We work closely with the administration to ensure the safety, well-being, and academic success of every child. Our collective goal is to create an institution that stands as a standard for excellence in education within the district.
                            </p>
                            <div className="flex flex-col mb-6">
                                <span className="text-xl font-bold text-[#1a2b3c]">Mr. Alok Verma</span>
                                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Chairman, SMC</span>
                            </div>
                            <Button variant="outline" size="sm" href="/about">Read More</Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
