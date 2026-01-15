import { useRef } from 'react';
import ProjectShowcase from './ProjectShowcase';
import heroBg from '../assets/hero_background.png';


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div className="relative w-full text-black bg-white p-6" ref={containerRef}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-white">
        <div
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Soft overlay to blend it if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left Content - Sticky */}
        <div className="lg:h-screen lg:sticky lg:top-0 flex flex-col pt-12 lg:pt-24">
          <div className="flex flex-col space-y-8">
            {/* Headline */}
            <div className="relative">
              <h1 className="font-vt323 text-6xl md:text-7xl lg:text-7xl leading-[0.9] tracking-tight bg-gradient-to-r from-black via-[#365768] to-[#BE8C58] bg-clip-text text-transparent uppercase relative z-10">
                Sync the product. <br />
                Own the experience.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl md:text-2xl font-serif max-w-xl text-gray-800 leading-relaxed">
              Synq Studio a digital studio shaping products, platforms, and SaaS that work together as one system.
            </p>

            {/* Tags Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
              {['UI/UX Design', 'Website dev', 'Backend infra', 'SAAS ', 'Mobile apps', 'Ads', 'APIs'].map((tag) => (
                <div key={tag} className="border border-black/20 bg-white backdrop-blur-sm px-4 py-2 text-sm  font-medium text-center uppercase tracking-wide hover:bg-black hover:text-white transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Scrollable Projects */}
        <div className="w-full px-0 lg:pr-12 py-0 lg:py-0">
          <ProjectShowcase />
          {/* Spacer at bottom to ensure last card scrolls out nicely if needed */}
          <div className="h-32 lg:h-0" />
        </div>

      </div>
    </div>
  )
}



export default Hero