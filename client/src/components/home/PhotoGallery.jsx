import Button from '../ui/Button';

export default function PhotoGallery() {
    // Using placeholders. In a real app, these would be actual school activity photos.
    const photos = [
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1546410531-bea4f4b36141?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1526485025708-59cdd4ff1b31?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&q=80&w=400",
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

                <div className="mb-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">MEMORIES</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-800">Photo Gallery</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                    {photos.map((src, idx) => (
                        <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border-4 border-gray-50 group cursor-pointer hover:shadow-md transition-all">
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                <Button variant="primary" href="#gallery">View All</Button>

            </div>
        </section>
    );
}
