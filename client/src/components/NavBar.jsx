"use client";
import Link from 'next/link';
import { BookOpen, ChevronDown, CheckCircle, LayoutGrid, Award, Menu } from 'lucide-react';
import Button from './ui/Button';

const NavBar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "About Us",
            href: "/about",
            featured: {
                title: "About Our School",
                desc: "Learn about our rich history, our values, and what makes our school community unique. We strive for excellence in education.",
                img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400"
            },
            dropdown: [
                { name: "About School", href: "/about#about-school", desc: "Overview of our institution and core values." },
                { name: "Mission & Vision", href: "/about#mission-vision", desc: "Our guiding principles and future goals." },
                { name: "Awards & Recognition", href: "/about#awards-recognition", desc: "Excellence acknowledged throughout the years." },
                { name: "Principal's Desk", href: "/about#principals-desk", desc: "A thoughtful message from our leadership." },
                { name: "School Management", href: "/about#school-management", desc: "Meet our dedicated management committee." },
                { name: "Infrastructure", href: "/about#infrastructure", desc: "Take a tour of our campus and facilities." }
            ]
        },
        {
            name: "Academics",
            href: "/academics",
            featured: {
                title: "Academic Excellence",
                desc: "Discover our comprehensive academic programs, resources, and vibrant student life.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
            },
            dropdown: [
                { name: "Fee's Structure", href: "/academics#fees-structure", desc: "Detailed information on tuition and fees." },
                { name: "School Club", href: "/academics#school-club", desc: "Extracurricular activities and student groups." },
                { name: "School House", href: "/academics#school-house", desc: "Student houses, systems, and competitions." },
                { name: "Holiday List", href: "/academics#holiday-list", desc: "The official academic year calendar." },
                { name: "Events", href: "/academics#events", desc: "Upcoming school events and gatherings." }
            ]
        },
        {
            name: "Curriculum",
            href: "/curriculum",
            featured: {
                title: "Our Curriculum",
                desc: "We offer a modern, well-rounded curriculum designed to foster critical thinking and creativity.",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
            },
            dropdown: [
                { name: "School curriculum", href: "/curriculum#school-curriculum", desc: "Detailed syllabus and core subjects." },
                { name: "Download", href: "/curriculum#download", desc: "Accessible resources and study materials." },
                { name: "Books", href: "/curriculum#books", desc: "Required reading and recommended textbooks." },
                { name: "Self affidavit", href: "/curriculum#self-affidavit", desc: "Download and submit essential documents." },
                { name: "Transfer certificate", href: "/curriculum#transfer-certificate", desc: "Guidelines and forms for student transfers." },
                { name: "Academic Calendar", href: "/curriculum#academic-calendar", desc: "Important dates and academic terms." },
                { name: "Annual report", href: "/curriculum#annual-report", desc: "Yearly review of academic and global performance." }
            ]
        },
        { name: "Mandatory Disclosures", href: "/mandatory-disclosures" },
        { name: "facilities", href: "/facilities" },
        {
            name: "Gallery",
            href: "/gallery",
            featured: {
                title: "School Gallery",
                desc: "Take a visual journey through our beautiful campus, memorable events, and student achievements.",
                img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=400"
            },
            dropdown: [
                { name: "Photo Gallery", href: "/gallery#photos", desc: "Captured moments from various school events." },
                { name: "Video Gallery", href: "/gallery#videos", desc: "Event highlights, performances, and campus tours." }
            ]
        },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav className="w-full h-[90px] flex items-center justify-between px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100/50 text-gray-800 relative z-50 font-sans tracking-wide">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="text-primary">
                    <BookOpen size={30} strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-text-dark">
                    Edu<span className="text-primary">Le</span>
                </span>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-7 h-full">
                {navLinks.map((link) => (
                    <div key={link.name} className="group h-full flex items-center">
                        <Link
                            href={link.href}
                            className={`font-semibold text-[15.5px] transition flex items-center gap-1.5 h-full relative ${link.dropdown ? "text-gray-700 hover:text-primary" : "text-gray-700 hover:text-primary"
                                }`}
                        >
                            {link.name}
                            {link.dropdown && (
                                <ChevronDown size={16} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-200 mt-0.5" />
                            )}
                            {/* Active indicator line */}
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-md"></span>
                        </Link>

                        {/* Mega Menu Dropdown */}
                        {link.dropdown && (
                            <div className="absolute top-[90px] left-0 w-full hidden group-hover:block z-50 bg-white border-b border-gray-100 shadow-[0_15px_40px_-15px_rgba(var(--color-primary),0.1)] overflow-hidden py-6 transform origin-top transition-all duration-300">
                                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                                    {/* Featured Banner (Top) */}
                                    <div className="w-full bg-bg-card rounded-2xl p-5 md:p-6 flex items-center gap-6 mb-6 border border-border-light">
                                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-sm shrink-0 hidden md:block border-4 border-white">
                                            <img src={link.featured?.img} alt={link.featured?.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-dark mb-1.5">{link.featured?.title}</h3>
                                            <p className="text-[14px] text-gray-600 max-w-2xl leading-relaxed">{link.featured?.desc}</p>
                                        </div>
                                    </div>

                                    {/* Links Grid (Bottom) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                                        {link.dropdown.map((dropLink, idx) => {
                                            const isHashLink = dropLink.href.includes('#');

                                            return (
                                                <Link
                                                    key={dropLink.name}
                                                    href={dropLink.href}
                                                    onClick={(e) => {
                                                        // If it's a hash link and we are possibly on the same page, try soft scrolling
                                                        if (isHashLink) {
                                                            const targetId = dropLink.href.split('#')[1];
                                                            const targetElement = document.getElementById(targetId);
                                                            if (targetElement) {
                                                                e.preventDefault();
                                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }
                                                    }}
                                                    className="group/link flex items-start gap-4 p-4 rounded-2xl hover:bg-bg-light transition-all duration-300 border border-transparent hover:border-border-light"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-bg-card text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors duration-300 shadow-sm border border-border-light group-hover/link:shadow-md">
                                                        {idx % 3 === 0 ? (
                                                            <Award size={20} strokeWidth={2} />
                                                        ) : idx % 3 === 1 ? (
                                                            <LayoutGrid size={20} strokeWidth={2} />
                                                        ) : (
                                                            <CheckCircle size={20} strokeWidth={2} />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-1 mt-0.5">
                                                        <h4 className="text-[15px] font-bold text-text-dark group-hover/link:text-primary transition-colors">{dropLink.name}</h4>
                                                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{dropLink.desc}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" href="/login" className="hidden sm:inline-flex">
                    Sign In
                </Button>
                <Button variant="outline" href="/signup">
                    Sign Up
                </Button>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden ml-1 p-2 text-gray-800 hover:bg-gray-100 rounded-lg">
                    <Menu size={24} strokeWidth={2} />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
