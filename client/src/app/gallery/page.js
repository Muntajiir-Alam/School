"use client";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Maximize2, X } from "lucide-react";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800", alt: "Students collaborating", filter: "Campus" },
        { src: "https://images.unsplash.com/photo-1526685860268-b8bc41434eb0?auto=format&fit=crop&q=80&w=800", alt: "Sports Day", filter: "Events" },
        { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", alt: "Classroom teaching", filter: "Academics" },
        { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800", alt: "School building", filter: "Campus" },
        { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", alt: "Yoga activities", filter: "Events" },
        { src: "https://images.unsplash.com/photo-1588514125867-b50e386aaddf?auto=format&fit=crop&q=80&w=800", alt: "Science lab", filter: "Academics" },
        { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", alt: "Library reading", filter: "Academics" },
        { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800", alt: "Art exhibition", filter: "Events" },
        { src: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?auto=format&fit=crop&q=80&w=800", alt: "Playground", filter: "Campus" }
    ];

    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Campus", "Academics", "Events"];

    const filteredImages = activeFilter === "All" ? images : images.filter(img => img.filter === activeFilter);

    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Visual Journey</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">School Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        A glimpse into the vibrant life at our campus, filled with learning, events, and joy.
                    </p>
                </div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 w-full">

                {/* Filter Tabs */}
                <div id="photos" className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-bg-card border border-border-light'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div id="videos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <div className="bg-white/90 text-text-dark p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                                    <Maximize2 size={20} />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-text-dark shadow-sm inline-block truncate max-w-full">
                                    {img.alt}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 rounded-full p-2" onClick={() => setSelectedImage(null)}>
                        <X size={28} />
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain border-4 border-white/10"
                        onClick={e => e.stopPropagation()}
                    />
                    <div className="absolute bottom-10 inset-x-0 text-center pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-lg font-medium shadow-lg">
                            {selectedImage.alt}
                        </span>
                    </div>
                </div>
            )}

            <footer className="bg-text-dark text-white py-10 text-center text-sm mt-auto">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
