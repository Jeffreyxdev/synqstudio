import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import dashboardMockup from '../assets/dashboard_mockup.png';
import websiteMockup from '../assets/website_mockup.png';
import mobileAppMockup from '../assets/image.png'

// --- Main Component ---

interface Project {
    id: number;
    src: string;
    color: string;
}

const projects: Project[] = [
    {
        id: 1,
        src: dashboardMockup,
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: 2,
        src: websiteMockup,
        color: "from-indigo-500/20 to-cyan-500/20"
    },
    {
        id: 3,
        src: mobileAppMockup,
        color: "from-gray-100 to-gray-200"
    },
];

const Card = ({ i, project, progress, range, targetScale }: { i: number, project: Project, progress: MotionValue<number>, range: number[], targetScale: number }) => {
    const container = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ['start end', 'start start']
    // });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="flex flex-col relative -top-[10%] md:-top-[15%] h-[450px] md:h-[650px] w-full max-w-[1100px] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl origin-top bg-white/5 backdrop-blur-2xl"
            >
                <div className="w-full  relative">
                    <img 
                      src={project.src} 
                      alt="Project Showcase" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </div>
    )
}

const ProjectShowcase = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="">
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <Card key={project.id} i={i} project={project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
            })}
        </div>
    )
}

export default ProjectShowcase;
