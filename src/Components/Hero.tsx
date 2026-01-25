import ProjectShowcase from './ProjectShowcase';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -top / 500));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-black bg-white pt-10" ref={containerRef}>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg className="w-full h-full opacity-30">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
  
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white pointer-events-none z-0" />
  
      {/* Faint Shadow Transition */}
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent transition-opacity duration-500"
        style={{ opacity: scrollProgress }}
      />

<div className="relative z-10 w-full px-6 sm:px-6 lg:px-6">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
     <div className="lg:col-span-5 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-20 flex flex-col justify-start pt-6 sm:pt-4  pb-8">


            <div className="flex flex-col space-y-6 ">
              {/* Latin Phrase */}
              <div className="inline-flex flex-col gap-0.5 self-start">
                <span className="font-vt323 text-xl uppercase tracking-wider bg-gradient-to-r from-[#365768] to-[#BE8C58] bg-clip-text text-transparent">
                  Innovatio Perita
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-gray-500 ml-1">
                  Innovation Through Expertise
                </span>
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#365768] to-[#BE8C58] rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-medium text-gray-600">
                  9 Founders Booked a Call This Week
                </span>
              </div>

              {/* Headline */}
              <div className="relative">
                <h1 className="font-vt323 text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.9] tracking-tight uppercase relative">
                  <span className="bg-gradient-to-r from-black  to-[#BE8C58] bg-clip-text text-transparent">
                    Sync ideas into
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#BE8C58]  to-black bg-clip-text text-transparent">
                    Products
                  </span>
                </h1>
                
                {/* Decorative Element */}
                <div className="absolute -left-3 top-1/2 w-0.5 h-20 bg-gradient-to-b from-[#365768] to-[#BE8C58] opacity-50" />
              </div>

              {/* Subtext */}
              <p className="text-base md:text-lg font-serif max-w-md text-gray-700 leading-relaxed">
                Synq Studio is a digital studio shaping products, platforms, and SaaS that work together as one unified system.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3"> 
                <button className="group relative px-6 py-3 bg-black text-white font-medium uppercase tracking-wide text-xs overflow-hidden transition-all hover:shadow-2xl">
                  <span className="relative z-10">Book an Intro Call</span>
               
                  <div className="absolute inset-0 bg-gradient-to-r from-[#242424] to-[#BE8C58] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                     <Link to={'/book'}><span className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Book an Intro Call
                  </span></Link>
                </button>
                
                <button className="px-6 py-3 border-2 border-black text-black font-medium uppercase tracking-wide text-xs hover:bg-black hover:text-white transition-all">
                  Check Our Works
                </button>
              </div>

              {/* Tags Grid */}
              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg">
                  {['UI/UX Design', 'Website Dev', 'Backend Infra', 'SaaS Products', 'Mobile Apps', 'Creative Ads', 'API Development'].map((tag, index) => (
                    <div 
                      key={tag} 
                      className="group relative border border-black/15 bg-white/80 backdrop-blur-sm px-3 py-2 text-[10px] font-medium text-center uppercase tracking-wider hover:border-black transition-all cursor-default overflow-hidden"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="relative z-10 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Logos */}
              <div className="pt-6 border-t border-black/10">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Trusted By</p>
                <div className="flex flex-wrap items-center gap-4 opacity-40">
                  <span className="text-xs font-semibold">GREATFRONTEND</span>
                  <span className="text-xs font-semibold">DEEPSEEK</span>
                  <span className="text-xs font-semibold">CABRAL</span>
                  <span className="text-xs font-semibold">BUILDERS.IO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable Projects */}
           <div className="lg:col-span-7 mt-6 sm:mt-8 lg:mt-25">
            <ProjectShowcase />
            
            {/* Bottom fade overlay */}
            <div className="sticky bottom-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none -mt-32 z-20" />
          </div>
        </div>
      </div>

      {/* Pricing Badge */}
      <div className="fixed bottom-6 left-6 z-50 bg-white border border-black/20 px-4 py-2 shadow-lg backdrop-blur-sm">
        <span className="text-xs uppercase tracking-wider font-medium">
          From <span className="font-bold">$2,500</span>
        </span>
      </div>
    </div>
  );
};

export default Hero;