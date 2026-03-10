import Button from '../ui/Button';
import { Play } from 'lucide-react';

export default function AboutIntro() {
    return (
        <section className="w-full bg-bg-light py-20 relative overflow-hidden">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col items-center">

                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">DISCOVER</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-800">About Us</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left side Image with Play button */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white aspect-video w-full">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
                                alt="School Campus"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Play Button */}
                            <button className="absolute inset-0 m-auto w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300 z-10">
                                <Play size={24} className="ml-1" fill="currentColor" />
                            </button>
                        </div>
                        {/* Decorative square behind image */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                    </div>

                    {/* Right side Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-text-dark mb-4">Welcome to Our esteemed Institution</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                            Since our inception, we have been dedicated to providing quality education that fosters academic excellence, character development, and holistic growth. Our state-of-the-art facilities and experienced faculty ensure a nurturing environment for every child.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We believe in equipping our students with the skills and knowledge necessary to thrive in an ever-changing world, making them responsible and impactful global citizens.
                        </p>
                        <Button href="/about">Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
