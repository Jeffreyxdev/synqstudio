import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import dashboardMockup from '../assets/dashboard_mockup.png';
import websiteMockup from '../assets/website_mockup.png';
import mobileAppMockup from '../assets/saas.png';
import deepseek from   '../assets/deepseek.png'
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
        src: deepseek,
        color: "from-indigo-500/20 to-cyan-500/20"
    },
    {
        id: 3,
        src: mobileAppMockup,
        color: "from-gray-100 to-gray-200"
    },
    {
        id: 4,
        src: websiteMockup,
        color: "from-green-500/20 to-teal-500/20"
    }

];

const Card = ({ i, project, progress, range, targetScale }: { i: number, project: Project, progress: MotionValue<number>, range: number[], targetScale: number }) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="min-h-[70vh] md:h-screen
  flex items-start md:items-center
  sticky top-4
  px-2 md:px-0"
        >
            <motion.div
                style={{ scale, top: `calc(-2vh + ${i * 20}px)` }}
                className="
                    relative
                    w-full
                    max-w-full md:max-w-[1100px]
                    rounded-xl md:rounded-[3rem]
                    overflow-hidden
                    shadow-xl md:shadow-2xl
                    origin-top
                    bg-transparent md:bg-white/5
                    backdrop-blur-none md:backdrop-blur-2xl
                "
            >
                <img
                    src={project.src}
                    alt="Project Showcase"
                    className="
                        w-full
                        h-auto
                        object-contain
                        md:h-full
                    "
                    draggable="false"
                />
            </motion.div>
        </div>
    );
};

const ProjectShowcase = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="relative">
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card 
                        key={project.id} 
                        i={i} 
                        project={project} 
                        progress={scrollYProgress} 
                        range={[i * 0.25, 1]} 
                        targetScale={targetScale} 
                    />
                );
            })}
        </div>
    );
};

export default ProjectShowcase;
