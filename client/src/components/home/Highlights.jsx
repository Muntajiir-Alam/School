import Button from '../ui/Button';

export default function Highlights() {
    const highlights = [
        {
            title: "Smart Classrooms",
            desc: "Interactive learning with digital boards and modern amenities.",
            img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Science Labs",
            desc: "Fully equipped Physics, Chemistry, and Biology laboratories.",
            img: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Sports Facilities",
            desc: "Expansive playgrounds for cricket, football, and athletics.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="relative py-24 bg-primary-dark text-white overflow-hidden font-sans">
            {/* Texture Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, var(--color-primary-dark) 25%, var(--color-primary-dark) 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">School Highlights</h2>
                    <div className="w-16 h-1 bg-white/50 mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-2xl group border-2 border-white/20 transform transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
                            <div className="aspect-video w-full overflow-hidden relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white z-10">{item.title}</h3>
                            </div>
                            <div className="p-5 flex-1 bg-white text-gray-700 font-medium">
                                <p className="text-[15px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="white" size="lg">Explore All Facilities</Button>
                </div>

            </div>
        </section>
    );
}
