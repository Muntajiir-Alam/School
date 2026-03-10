export default function ImportantLinks() {
    const links = [
        { title: "CBSE", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/1200px-CBSE_new_logo.svg.png" },
        { title: "Digital India", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" },
        { title: "Swachh Bharat", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Swachh-Bharat-Abhiyan-Logo.png" },
        { title: "Skill India", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Skill_India.png/300px-Skill_India.png" },
        { title: "NCERT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/NCERT_logo.svg/1200px-NCERT_logo.svg.png" },
        { title: "Govt of India", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" }
    ];

    return (
        <section className="w-full bg-white py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold font-sans text-gray-800">Important Links</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
                            title={link.title}
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-gray-200 shadow-sm p-3 flex items-center justify-center group-hover:shadow-md group-hover:border-primary transition-all">
                                <img
                                    src={link.img}
                                    alt={link.title}
                                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
