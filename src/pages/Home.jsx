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
