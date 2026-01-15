import { useRef } from 'react';
import heroBg from '../assets/hero_background.png';
import { Link } from 'react-router-dom';

export const Pricing = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const services = [
        'Web Development',
        'Motion Design',
        'UI/UX Design',
        'Ads Management',
        'App Development',
        'Brand Identity',
        'Consulting'
    ];

    return (
        <div className="relative w-full text-black bg-white min-h-screen" ref={containerRef}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-white fixed">
                <div
                    className="absolute inset-0 w-full h-full opacity-60"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/80" />
            </div>

            <div className="w-full px-6 py-12 md:py-24">
                <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Content - Services */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="font-vt323 text-6xl md:text-8xl leading-[0.8] tracking-tight uppercase">
                            Everything <br />
                            <span className="opacity-40">You Need.</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-serif max-w-lg text-gray-800 leading-relaxed">
                            We are a full-service tech agency covering a wide spectrum of digital specialties. From concept to launch, we handle it all.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {services.map((service) => (
                                <span
                                    key={service}
                                    className="border border-black/80 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm md:text-base text-black font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all cursor-default"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Pricing Card */}
                    <div className="w-full">
                        <div className="bg-white/70 backdrop-blur-md border border-black/10 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8l-4 4-4-4" /><path d="M12 16V9" /></svg>
                            </div>

                            <h3 className="font-vt323 text-4xl uppercase mb-2">Complete Package</h3>
                            <p className="font-serif text-gray-600 mb-8 italic">Ideal for businesses & startups ready to scale.</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl md:text-6xl font-bold tracking-tighter">$2,500</span>
                                <span className="ml-2 text-gray-500 font-medium">/ starting</span>
                            </div>

                            <ul className="space-y-4 mb-10 border-t border-black/10 pt-8">
                                {[
                                    'Custom UI/UX Design',
                                    'Full-Stack Development',
                                    'Motion & Interactions',
                                    'Responsive & Mobile-Ready',
                                    'SEO Optimization',
                                    'Post-Launch Support'
                                ].map((item) => (
                                    <li key={item} className="flex items-center text-lg">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/book" className="block w-full">
                                <button className="w-full bg-black text-white py-4 text-lg font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors cursor-pointer">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-500 font-mono uppercase tracking-widest opacity-60">
                            Limited slots available for this month
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
