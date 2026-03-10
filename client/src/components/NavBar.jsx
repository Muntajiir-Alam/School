const NavBar = () => {
    const navLinks = [
        { name: "Home", href: "#" , },
        { name: "About Us", href: "#" ,onhover:[{}]},
        { name: "Academics", href: "#" },
        { name: "Curriculum", href: "#" },
        { name: "Mandatory Disclosures", href: "#" },
        { name: "facilities", href: "#" },
        { name: "Gallery", href: "#" },
        { name: "Contact Us", href: "#" },
    ];
    return (
        <nav className="w-full h-16 flex items-center justify-between px-6 sm:px-10 bg-black text-white">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-zinc-800">
                    <img
                        src="https://i.pinimg.com/736x/b2/d7/ff/b2d7ff826824674543015ba87410a893.jpg"
                        alt="logo"
                        className="h-full w-full object-cover"
                    />
                </div>
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                    Choching
                </span>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-zinc-300 transition"
                    >
                        {link.name}
                    </a>
                ))}
                <button className="px-3 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
