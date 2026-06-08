import React from 'react';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-medium bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
      >
        Vedi Progetto &rarr;
      </a>
    </div>
  );
}