import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Zap, PieChart, ArrowRight } from 'lucide-react';

const Home = () => {

    return (
        <div className="min-h-screen bg-[#050511] text-white selection:bg-primary/30 selection:text-white">
            {/* Super Stable Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[130px] rounded-full opacity-40" />
                <div className="absolute inset-0 bg-[#050511]/40 backdrop-blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-[100] bg-[#050511]/90 backdrop-blur-2xl border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <Zap size={20} className="text-white fill-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-tighter">BizTrack</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-10">
                        <div className="hidden lg:flex items-center gap-10">
                            <a href="#about" className="text-sm font-bold text-text-muted hover:text-primary transition-all duration-300">About</a>
                            <a href="#features" className="text-sm font-bold text-text-muted hover:text-primary transition-all duration-300">Features</a>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <Link to="/login" className="text-xs md:text-sm font-bold text-white hover:text-primary transition-all duration-300 bg-white/5 py-2 px-4 md:py-2.5 md:px-6 rounded-xl border border-white/10">Login</Link>
                            <Link to="/signup" className="btn-primary py-2 px-6 md:py-2.5 md:px-8 text-xs md:text-sm">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-20 z-10 flex flex-col items-center justify-center min-h-[90vh]">
                <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex flex-col items-center"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-wider text-primary mb-8 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            AI-Powered Financial Intelligence
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-center">
                            Control Your Financial <br />
                            <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                                Future with AI
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4 text-center">
                            Track business, stock, and investment transactions with real-time AI insights. Get personalized risk analysis, cognitive patterns, and milestone predictions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
                            <Link to="/signup" className="btn-primary w-full sm:w-auto py-4 px-10 text-base flex items-center gap-2 group justify-center rounded-xl shadow-xl">
                                Get Started
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/login" className="btn-primary w-full sm:w-auto py-4 px-10 text-base flex items-center gap-2 group justify-center rounded-xl shadow-xl">
                                Login
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative z-10">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-20 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Benefits</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
                        <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl text-center mx-auto">Smart AI-powered finance management for small businesses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 justify-items-center mt-20 max-w-5xl mx-auto px-6 md:px-12">
                        {[
                            {
                                icon: <TrendingUp size={28} className="text-primary" />,
                                title: "AI Financial Insights",
                                desc: "Automatically analyze income and expenses to give clear profit trends, spending patterns, and future predictions—without manual calculations."
                            },
                            {
                                icon: <Shield size={28} className="text-secondary" />,
                                title: "Secure Business Data",
                                desc: "Your financial records are protected with role-based access, authentication, and encrypted storage, ensuring complete data privacy and trust."
                            },
                            {
                                icon: <PieChart size={28} className="text-purple-400" />,
                                title: "Visual Business Intelligence",
                                desc: "Convert raw transactions into interactive charts, summaries, and reports that help business owners make faster, better decisions."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 md:p-10 bg-[#10101a]/60 border border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col items-center text-center rounded-3xl group shadow-xl w-full max-w-xs mx-auto"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 mb-6 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors text-center">{feature.title}</h3>
                                <p className="text-text-muted leading-relaxed text-sm md:text-base font-medium opacity-80 text-center">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-40 md:py-56 px-6 md:px-12 lg:px-20 relative z-10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center w-full max-w-4xl"
                    >
                        <span className="text-primary font-bold tracking-wider text-xs uppercase mb-8 border-b-2 border-primary/30 pb-2 inline-block">The Future of Finance</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tight leading-[1.05] text-center w-full">
                            Redefining <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clarity</span>
                        </h2>
                        <p className="text-text-muted text-base md:text-xl leading-relaxed mb-10 font-medium opacity-90 text-center max-w-3xl mx-auto">
                            BizTrack AI is designed for small business owners and startups who want clarity without complexity.
                            We eliminate manual bookkeeping and spreadsheets by replacing them with AI-driven automation, real-time analytics, and intelligent insights—all in one platform.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-20 md:py-24 border-t border-white/5 px-6 md:px-12 lg:px-20 bg-[#050511] relative z-[100]">
                <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 text-center">
                    <div className="flex items-center gap-4">
                        <Zap size={32} className="text-primary fill-primary drop-shadow-[0_0_15px_#00f0ff]" />
                        <span className="text-2xl md:text-3xl font-black tracking-tighter">BizTrack</span>
                    </div>
                
                   
                </div>
            </footer>
        </div>
    );
};

export default Home;
