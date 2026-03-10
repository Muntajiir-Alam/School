import { Megaphone, Calendar, Bell } from 'lucide-react';
import Button from '../ui/Button';

export default function NoticeBoards() {
    const notices = [
        { title: "Admission Open for Session 2026-2027", date: "15 Mar", type: "new" },
        { title: "Annual Sports Meet Scheduled for Next Month", date: "10 Mar", type: "update" },
        { title: "Parent-Teacher Meeting on Saturday", date: "08 Mar", type: "reminder" },
        { title: "School timings changed for Winter schedule", date: "01 Mar", type: "notice" },
        { title: "Science Exhibition Registration closing soon", date: "28 Feb", type: "event" },
    ];

    const news = [
        { title: "Our school wins State Level Debate Competition", date: "12 Mar" },
        { title: "New advanced computer lab inaugurated by District Magistrate", date: "05 Mar" },
        { title: "Students participate in National Science Olympiad", date: "20 Feb" },
        { title: "Cleanliness Drive organized by Eco Club students", date: "15 Feb" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 relative z-30 -mt-16 md:-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Notice Board Left */}
                <div className="bg-white rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col h-[400px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-orange-100 px-6 py-4 flex items-center gap-3">
                        <div className="p-2 bg-yellow-400 text-white rounded-lg shadow-sm">
                            <Megaphone size={20} />
                        </div>
                        <h2 className="text-xl font-bold font-sans tracking-tight text-[#1a2b3c]">Notice Board</h2>
                        <div className="ml-auto flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                        </div>
                    </div>

                    {/* Content (Scrolling) */}
                    <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                        <div className="space-y-4">
                            {notices.map((notice, idx) => (
                                <div key={idx} className="group relative pl-6 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary opacity-60 group-hover:scale-150 group-hover:opacity-100 transition-all"></div>
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <span className="text-sm font-bold text-primary bg-bg-card px-2.5 py-0.5 rounded border border-border-light">{notice.date}</span>
                                        {notice.type === 'new' && <span className="text-[10px] font-bold tracking-wider uppercase bg-red-500 text-white px-2 py-0.5 rounded-sm animate-pulse">New</span>}
                                    </div>
                                    <h3 className="text-[15px] font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug cursor-pointer">
                                        {notice.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                        <Button variant="ghost" size="sm" className="w-full text-sm">View All Notices</Button>
                    </div>
                </div>

                {/* Latest News Right */}
                <div className="bg-white rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col h-[400px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
                        <div className="p-2 bg-blue-500 text-white rounded-lg shadow-sm">
                            <Bell size={20} />
                        </div>
                        <h2 className="text-xl font-bold font-sans tracking-tight text-[#1a2b3c]">Latest News</h2>
                    </div>

                    {/* Content (Scrolling) */}
                    <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                        <div className="space-y-5">
                            {news.map((item, idx) => (
                                <div key={idx} className="group flex gap-4 items-start cursor-pointer pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex flex-col items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <span className="text-sm font-bold leading-none mb-0.5">{item.date.split(' ')[0]}</span>
                                        <span className="text-[10px] uppercase font-bold tracking-widest leading-none">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">Read more details about this news...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                        <Button variant="ghost" size="sm" className="w-full text-sm">Read All News</Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
