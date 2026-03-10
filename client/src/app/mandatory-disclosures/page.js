import NavBar from "../../components/NavBar";
import { Download, FileCheck, ShieldCheck } from "lucide-react";

export default function MandatoryDisclosuresPage() {
    const documents = [
        { name: "Copies of Affiliation / Upgradation Letter", date: "Jan 12, 2024", size: "1.2 MB" },
        { name: "Copies of Societies / Trust / Company Registration / Renewal Certificate", date: "Feb 05, 2024", size: "2.4 MB" },
        { name: "Copy of No Objection Certificate (NOC) Issued by State Govt", date: "Mar 18, 2024", size: "850 KB" },
        { name: "Copies of Recognition Certificate under RTE Act, 2009", date: "Apr 22, 2024", size: "1.5 MB" },
        { name: "Copy of Valid Building Safety Certificate", date: "May 10, 2024", size: "3.1 MB" },
        { name: "Copy of Valid Fire Safety Certificate", date: "Jun 02, 2024", size: "1.8 MB" },
        { name: "Copy of The DEO Certificate Submitted by the School", date: "Jul 15, 2024", size: "900 KB" },
        { name: "Copies of Valid Water, Health & Sanitation Certificates", date: "Aug 08, 2024", size: "2.0 MB" },
        { name: "Fee Structure of the School", date: "Sep 01, 2024", size: "400 KB" },
        { name: "Annual Academic Calendar", date: "Oct 12, 2024", size: "600 KB" }
    ];

    return (
        <div className="min-h-screen bg-bg-light font-sans flex flex-col">
            <NavBar />

            <div className="bg-bg-card py-16 border-b border-border-light relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">Transparency</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">Mandatory Disclosures</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Official, compliant records and public disclosures related to our institution's operations, safety, and affiliations.
                    </p>
                </div>
            </div>

            <main className="grow max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                    {/* Header bar of the card */}
                    <div className="bg-text-dark px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white">
                            <ShieldCheck size={24} className="text-primary" />
                            <h2 className="text-xl font-semibold">Official Documents (2025 - 2026)</h2>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {documents.map((doc, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-8 hover:bg-bg-light/50 transition-colors group">
                                <div className="flex items-start gap-4 mb-4 sm:mb-0">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                        <FileCheck size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-text-dark mb-1 group-hover:text-primary transition-colors pr-4">{doc.name}</h3>
                                        <p className="text-xs font-medium text-gray-500">Updated: {doc.date} <span className="mx-2">•</span> PDF <span className="mx-2">•</span> {doc.size}</p>
                                    </div>
                                </div>
                                <button className="self-start sm:self-auto shrink-0 bg-white border border-border-light text-text-dark hover:border-primary hover:text-primary px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all shadow-sm">
                                    <Download size={16} /> <span className="sm:hidden lg:inline">Download</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex gap-4 text-yellow-800">
                    <div className="shrink-0 pt-0.5">ℹ️</div>
                    <p className="text-sm leading-relaxed">
                        These documents are provided in compliance with the guidelines laid out by the relevant educational boards and governmental authorities. If you face any issues viewing the files, please contact the school administration.
                    </p>
                </div>

            </main>

            <footer className="bg-text-dark text-white py-10 text-center text-sm mt-auto">
                <p>© 2026 EduLe Public School. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
