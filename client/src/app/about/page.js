import NavBar from "../../components/NavBar";

export default function AboutUs() {
    const sections = [
        {
            id: "about-school",
            title: "About School",
            content: "Welcome to EduLe, where learning meets excellence. Our institution has been at the forefront of education, fostering an environment where young minds can explore, learn, and grow. We believe in providing a holistic approach to education that prepares our students for the challenges of tomorrow while keeping them grounded in ethical and moral values today. With state-of-the-art facilities and a passionate faculty, we ensure every student reaches their full potential.",
            img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
            imgLeft: false
        },
        {
            id: "mission-vision",
            title: "Mission & Vision",
            content: "Our Mission is to empower students with knowledge, skills, and values to excel in a rapidly changing world. We aim to ignite a passion for lifelong learning. Our Vision is to be recognized globally as a premier educational institution that nurtures future leaders, innovators, and responsible global citizens who will make a meaningful impact on society.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            imgLeft: true
        },
        {
            id: "awards-recognition",
            title: "Awards & Recognition",
            content: "Over the years, EduLe has earned numerous accolades for academic excellence, sports achievements, and extracurricular performance. We have been awarded the 'Best Educational Institute' for three consecutive years by the National Education Board. Our students consistently secure top ranks in state and national level competitions, reflecting the dedication of our students and the hard work of our teaching staff.",
            img: "https://images.unsplash.com/photo-1531686264889-56fdcaba636c?auto=format&fit=crop&q=80&w=800",
            imgLeft: false
        },
        {
            id: "principals-desk",
            title: "Principal\'s Desk",
            content: "\"Education is the most powerful weapon which you can use to change the world.\" As the Principal of EduLe, I am proud to lead a community of dedicated educators and enthusiastic learners. Our goal is to not just impart academic knowledge, but to shape character and instill confidence. We invite you to join our family and experience the joy of learning in an environment that cares.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            imgLeft: true
        },
        {
            id: "school-management",
            title: "School Management",
            content: "Our School Management Committee comprises experienced educationists, visionaries, and professionals who guide the strategic direction of the school. They work tirelessly to ensure that our institution stays true to its core values while continuously adapting to modern educational methodologies. Their leadership provides a strong foundation for both teachers and students to thrive.",
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
            imgLeft: false
        },
        {
            id: "infrastructure",
            title: "Infrastructure",
            content: "Spread across 10 acres, our campus features modern, well-ventilated smart classrooms, advanced science and computer laboratories, a massive library stocked with thousands of books, and professional sports facilities including a standard-size football field and indoor basketball courts. We provide a safe, secure, and stimulating physical environment that enhances the overall educational experience.",
            img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
            imgLeft: true
        }
    ];

    return (
        <div className="min-h-screen bg-bg-light font-sans">
            <NavBar />

            {/* Page Header */}
            <div className="bg-bg-card py-16 border-b border-border-light">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">About <span className="text-primary">Us</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our legacy of excellence, our core values, and the vision that drives our educational community forward.
                    </p>
                </div>
            </div>

            <main className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-20 space-y-32">
                {sections.map((section, index) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-32 ${section.imgLeft ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block mb-3">
                                <span className="text-primary font-semibold tracking-wide text-sm bg-bg-card px-4 py-1.5 rounded-full border border-border-light">
                                    Section 0{index + 1}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">{section.title}</h2>
                            <div className="w-20 h-1.5 bg-primary mb-6 rounded-full"></div>
                            <p className="text-gray-600 text-[17px] leading-relaxed relative z-10">
                                {section.content}
                            </p>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className={`relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-10 border-white group`}>
                                <img
                                    src={section.img}
                                    alt={section.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.3)] to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div >
    );
}
