import React from 'react';
import { Triangle, Atom, Zap, Search, Server, Layers, ChevronRight, Braces, Rocket } from 'lucide-react';

export default function App() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white overflow-hidden relative">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />

            {/* Nội dung chính */}
            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">

                {/* Logo Next.js (Simulated with Triangle for SVG) */}
                <div className="mb-8 p-4 bg-zinc-100 rounded-2xl border border-zinc-200 shadow-2xl flex items-center justify-center animate-bounce duration-1000">
                    <Triangle className="w-16 h-16 fill-black text-black rotate-180" />
                </div>

                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-black to-zinc-400 bg-clip-text text-transparent">
                        Next.js
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl mb-12">
                    The React Framework cho Web.
                </p>

                {/* Cấu trúc Grid cho các thông tin chính */}
                { }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">

                    {/* Card 1: Next.js là gì? */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-black border border-zinc-200 group-hover:scale-110 transition-transform">
                                <Layers className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Là gì?</h2>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Một <b className="text-black">Framework toàn diện</b> để xây dựng ứng dụng web nhanh chóng, chuẩn production.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Dựa trên React */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-blue-600 border border-zinc-200 group-hover:rotate-180 transition-transform duration-700">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Nền tảng</h2>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Mở rộng từ <b className="text-black">React</b>. Bổ sung kiến trúc Server-Side (SSR) & Routing cực mạnh.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Mục đích */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-yellow-600 border border-zinc-200 group-hover:scale-110 transition-transform">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Mục đích</h2>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Tối đa hóa <b className="text-black">Tốc độ</b> & <b className="text-black">SEO</b>. Mang lại trải nghiệm hoàn hảo cho cả User lẫn Developer.
                            </p>
                        </div>
                    </div>

                </div>

                { }
                <div className="mt-20 w-full">
                    <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-8">Tính năng cốt lõi (Core Features)</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { icon: Server, text: "Server-Side Rendering" },
                            { icon: Zap, text: "Tốc độ siêu tốc" },
                            { icon: Search, text: "Tối ưu SEO" },
                            { icon: Braces, text: "Fullstack (API Routes)" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors cursor-default">
                                <item.icon className="w-4 h-4 text-zinc-600" />
                                <span className="text-sm font-medium text-zinc-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action ảo */}
                <div className="mt-20">
                    <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors group">
                        Bắt đầu với Next.js
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-200 mt-20 py-8 text-center text-zinc-500 text-sm">
                Được thiết kế siêu tối giản bằng React & TailwindCSS
            </footer>
        </div>
    );
}