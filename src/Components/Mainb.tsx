import { useState, useEffect } from 'react';
import BlurText from './Blurtext';
import { Link } from 'react-router-dom';

const Mainb = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10K+", label: "Products Shipped", sublabel: "From concept to market" },
    { number: "94%", label: "Client Retention", sublabel: "They come back for more" },
    { number: "$1.2M", label: "Revenue Generated", sublabel: "For our client portfolio" },
    { number: "3.2x", label: "Average ROI", sublabel: "Within first 6 months" }
  ];

  const insights = [
    {
      title: "Design That Converts",
      description: "Beautiful interfaces don't just look good—they drive action. Every pixel is engineered to turn visitors into customers."
    },
    {
      title: "Speed to Market",
      description: "While others are still planning, we're launching. Ship your MVP in weeks, not months, and start validating yesterday's idea today."
    },
    {
      title: "Growth-Ready Foundation",
      description: "Built to scale from day one. When your product goes viral, your infrastructure won't be the bottleneck."
    }
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="relative w-full bg-white text-black py-20 px-6 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="grain2">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain2)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16 mt-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#365768] to-[#BE8C58] rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-medium text-gray-600">
              Real Results, Real Growth
            </span>
          </div>

         <BlurText
  text="Ship faster. Scale smarter. Win bigger."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  /* Remove text-transparent from here */
  className="font-sans text-5xl md:text-7xl lg:text-8xl leading-none mb-6 [*_span]:bg-gradient-to-r [*_span]:from-black [*_span]:via-[#365768] [*_span]:to-[#BE8C58] [*_span]:bg-clip-text [*_span]:text-transparent"
/>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-serif leading-relaxed">
            We turn founder visions into market-ready products that users actually want to pay for.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-black/10 bg-white/80 backdrop-blur-sm p-8 hover:border-black transition-all duration-500 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 150}ms`
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="font-vt323 text-5xl lg:text-6xl mb-3 bg-gradient-to-r from-[#365768] to-[#BE8C58] bg-clip-text text-transparent group-hover:text-white transition-all duration-500">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider font-bold mb-1 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  {stat.sublabel}
                </div>
              </div>


              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#365768] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s ease-out ${800 + index * 200}ms`
              }}
            >
              <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-[#365768] to-[#BE8C58] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="pl-6">
                <h3 className="font-vt323 text-2xl md:text-3xl mb-3 uppercase">
                  {insight.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-serif">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative border-t border-black/10 pt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-vt323 text-3xl md:text-4xl mb-2 uppercase">
                Ready to Launch?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Join 200+ founders who chose speed and quality over endless planning.
              </p>
            </div>
                <Link to={'/book'}>
            <button className="group relative px-8 py-4 bg-black text-white font-medium uppercase tracking-wide text-xs overflow-hidden transition-all hover:shadow-2xl">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#BE8C58] to-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Start Your Project
              </span>
            </button></Link>
          </div>
        </div>

        {/* Floating metric indicator */}
        <div className="fixed bottom-6 right-6 bg-white border border-black/20 px-4 py-2 shadow-lg backdrop-blur-sm z-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-medium">
              3 Spots Available This Month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainb;