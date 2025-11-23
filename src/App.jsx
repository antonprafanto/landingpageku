import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ArrowRight,
    ExternalLink,
    Code2,
    Layers,
    Zap,
    Terminal,
    Cpu,
    Globe,
    MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50 py-4" : "py-6 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="font-bold text-xl tracking-tight text-slate-100 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono text-sm">
                        &lt;/&gt;
                    </div>
                    <span>Dev<span className="text-indigo-500">.Portfolio</span></span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <a href="#work" className="hover:text-indigo-400 transition-colors">Work</a>
                    <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
                    <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                    <a
                        href="https://chat.whatsapp.com/IHxEchMccQB6q60xDtsXs0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all border border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Join WhatsApp
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-sm hover:border-emerald-500/50 transition-colors cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6 leading-tight"
                >
                    Building digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 animate-gradient-x">
                        experiences that matter.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I'm a Full Stack Developer specializing in building exceptional digital experiences.
                    Currently focused on accessible, human-centered products at <span className="text-slate-200 font-medium">TechCorp</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#work"
                        className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center gap-2 group"
                    >
                        View Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://chat.whatsapp.com/IHxEchMccQB6q60xDtsXs0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 rounded-full font-medium transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Join Community
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

const TechMarquee = () => {
    const techs = [
        { name: "React", icon: <Code2 /> },
        { name: "Next.js", icon: <Globe /> },
        { name: "TypeScript", icon: <Terminal /> },
        { name: "Node.js", icon: <Cpu /> },
        { name: "Tailwind", icon: <Zap /> },
        { name: "PostgreSQL", icon: <Layers /> },
        { name: "Docker", icon: <Box /> },
        { name: "AWS", icon: <Cloud /> },
    ];

    // Simple placeholder icons for those not imported
    function Box(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> }
    function Cloud(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"></path><path d="M19 19a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0-3-3"></path><path d="M12 19v-9"></path><path d="M16 9a4 4 0 0 0-4-4 4 4 0 0 0-4 4"></path></svg> }

    return (
        <div className="py-10 border-y border-slate-800/50 bg-slate-950/50 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...techs, ...techs, ...techs].map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-500 hover:text-indigo-400 transition-colors duration-300">
                            {React.cloneElement(tech.icon, { className: "w-6 h-6" })}
                            <span className="text-xl font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SpotlightCard = ({ title, desc, tags, size = "normal", image }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800",
                size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="p-6 h-full flex flex-col relative z-10">
                <div className="mb-6 overflow-hidden rounded-xl bg-slate-950/50 border border-slate-800/50 aspect-video relative group-hover:border-indigo-500/30 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-700 overflow-hidden">
                        {image ? (
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Code2 className="w-12 h-12 opacity-20" />
                        )}
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex gap-2 mb-3 flex-wrap">
                        {tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/50 group-hover:border-indigo-500/20 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                        {title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    return (
        <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-slate-100 mb-4"
                >
                    Selected Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 max-w-xl"
                >
                    A collection of projects that I've built, ranging from web applications to open source libraries.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                <SpotlightCard
                    size="large"
                    title="E-Commerce Dashboard"
                    desc="A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and order tracking."
                    tags={["Next.js", "TypeScript", "Tremor", "Supabase"]}
                    image="/images/project1.jpg"
                />
                <SpotlightCard
                    title="AI Chat Interface"
                    desc="Modern chat UI with streaming responses, markdown support, and history management."
                    tags={["React", "Tailwind", "OpenAI API"]}
                    image="/images/project2.jpg"
                />
                <SpotlightCard
                    title="Task Management App"
                    desc="Collaborative task manager with drag-and-drop kanban boards."
                    tags={["Vue", "Firebase", "Pinia"]}
                    image="/images/project3.jpg"
                />
                <SpotlightCard
                    title="Developer Portfolio"
                    desc="The website you are looking at right now. Built with performance and accessibility in mind."
                    tags={["React", "Framer Motion", "Vite"]}
                    image="/images/project4.jpg"
                />
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-slate-900/30 border-y border-slate-800/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-800/[0.05] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-100 mb-8"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-400 leading-relaxed mb-12"
                >
                    I'm a passionate developer who loves building things for the web.
                    I started coding 5 years ago and haven't stopped since.
                    I enjoy solving complex problems and creating intuitive user interfaces.
                    When I'm not coding, you can find me reading, hiking, or playing video games.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Years Exp.", value: "5+", color: "text-indigo-500" },
                        { label: "Projects", value: "50+", color: "text-emerald-500" },
                        { label: "Clients", value: "20+", color: "text-purple-500" },
                        { label: "Commitment", value: "100%", color: "text-amber-500" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all shadow-lg"
                        >
                            <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="py-12 px-6 border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-slate-500 text-sm">
                    © 2024 Dev Portfolio. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                        <a key={i} href="#" className="text-slate-400 hover:text-indigo-400 hover:scale-110 transition-all">
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

function App() {
    return (
        <div className="bg-slate-950 min-h-screen selection:bg-indigo-500/30">
            <Navbar />
            <main>
                <Hero />
                <TechMarquee />
                <BentoGrid />
                <About />
            </main>
            <Footer />
        </div>
    );
}

export default App;
