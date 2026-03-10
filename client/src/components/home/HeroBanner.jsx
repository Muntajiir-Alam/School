import Button from '../ui/Button';

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1761839258657-457dda39b5cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-end pb-24 md:pb-32">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm tracking-wide mb-6">
                        Welcome to EduLe
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
                        Empowering the <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-primary">Leaders</span> of Tomorrow
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
                        Providing holistic education, state-of-the-art facilities, and a secure environment for your child's overall development since 1995.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button size="lg" href="/about">Discover More</Button>
                        <Button size="lg" variant="white" href="#courses">View Programs</Button>
                    </div>
                </div>
            </div>

            {/* Bottom curved slope decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.11,200.7,119.53,243.6,112.44,284.45,86.5,321.39,56.44Z" className="fill-bg-light"></path>
                </svg>
            </div>
        </section>
    );
}
