import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { PROJECTS } from '../data';
import SectionTitle from './ui/SectionTitle';

const Credits: React.FC = () => {
  return (
    <section id="credits" className="py-24 bg-cinema-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Acting Credits" subtitle="Selected Filmography & Web Series" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer block"
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden rounded-sm relative shadow-lg shadow-black/50 border border-white/5 transition-transform duration-500 group-hover:scale-105 group-hover:z-10 bg-slate-800">
                 <img 
                  src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                   <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/50 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 mb-2">
                      <Play size={20} fill="white" className="text-white ml-1" />
                   </div>
                   <span className="text-white text-xs font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Watch on YouTube</span>
                </div>

                {/* Info Overlay (Netflix Style bottom gradient) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold font-display text-lg leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
                    <span className="text-green-400 font-semibold">{project.year}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="uppercase">{project.type}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 italic">Role: {project.role}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;