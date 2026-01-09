import { useEffect, useRef } from 'react';


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 60; // Adjust for density
    const connectionDistance = 150;
    const mouseDistance = 200;
    const color = '#F4E69E';

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          // Gently push away or pull towards - let's pull towards for "following" effect
          // but keep original motion
          p.x += forceDirectionX * force * 0.8;
          p.y += forceDirectionY * force * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.globalAlpha = 1 - (dist / connectionDistance);
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw connections to mouse
      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistance) {
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.globalAlpha = 1 - (dist / mouseDistance);
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full text-black overflow-hidden flex items-center justify-center pt-8" ref={containerRef}>
      {/* Interactive Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full w-full">
        {/* Left Content */}
        <div className="flex flex-col space-y-8">
          {/* Headline */}
          <div className="relative">

            <h1 className="font-vt323 text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase relative z-10">
              Sync the product. <br />
              Own the experience.
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl font-serif max-w-xl text-gray-800 leading-relaxed">
            Synq Studio builds websites, apps, and systems that work as one. A studio shaping modern digital systems.
          </p>

          {/* Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
            {['UI/UX Design', 'Website dev', 'Backend infra', 'Booking systems', 'Mobile apps', 'Ads'].map((tag) => (
              <div key={tag} className="border border-black/20 bg-black backdrop-blur-sm px-4 py-2 text-sm text-white font-medium text-center uppercase tracking-wide hover:bg-white hover:text-black transition-colors cursor-default">
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Placeholder Area */}
        {/* <div className="w-full h-[500px] lg:h-[700px] bg-gray-50 rounded-[2rem] shadow-inner border border-gray-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
          Optional: Add some inner content or visual cue it's a placeholder
        </div> */}

      </div>
    </div>
  )
}

export default Hero