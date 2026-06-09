import React from 'react';

function ProjectCard({ title, description, tags, link, image }) {
  return (
    <div className="bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all flex flex-col group h-full">
      
      {/* Container Immagine del Sito */}
      {image && (
        <div className="w-full h-44 overflow-hidden bg-slate-950 border-b border-slate-900/50">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Contenuto della Card */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* Tags dei Linguaggi */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Link al Progetto */}
        <a 
          href={link}
          target={link !== "#" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 mt-auto flex items-center gap-1"
        >
          Vedi Sito &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;