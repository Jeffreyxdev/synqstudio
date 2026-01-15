import { useEffect, useRef } from 'react';
import heroBg from '../assets/hero_background.png';

const Book = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);

        return () => {
            // Clean up script if needed, though usually fine to leave for cache
        };
    }, []);

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

                    {/* Left Content */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="font-vt323 text-6xl md:text-7xl leading-[0.8] tracking-tight uppercase mb-8">
                            Ready to Start? <br />
                            <span className="font-serif italic capitalize tracking-normal bg-gradient-to-r from-gray-700 via-gray-500 to-[#D4AF37] bg-clip-text text-transparent">
                                Let's Talk Business.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl font-serif max-w-lg text-gray-800 leading-relaxed">
                            Schedule a call with our team to discuss your project and see how we can help you scale.
                        </p>
                    </div>

                    {/* Right Content - Calendly */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <div
                            className="calendly-inline-widget w-full max-w-[800px] h-[700px] border border-black/5 bg-white/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
                            data-url="https://calendly.com/synqstudio/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Book;