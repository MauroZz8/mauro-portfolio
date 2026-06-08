import React from 'react';
import ProjectCard from './components/ProjectCard.jsx';

function App() {
const projectsData = [
    {
      title: "Progetto JavaScript Avanzato",
      description: "Applicazione web sviluppata focalizzandosi sulla manipolazione del DOM e performance.",
      tags: ["JavaScript", "HTML5", "CSS3"], // Separati da virgola e virgolette
      link: "https://github.com/MauroZz8"
    },
    {
      title: "React Web App",
      description: "Interfaccia dinamica e performante con architettura a componenti e gestione dei dati.",
      tags: ["React", "Vite", "JavaScript"],
      link: "https://github.com/MauroZz8"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* NAVBAR */}
      <nav className="p-6 max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-indigo-400">MAURO.DEV</div>
        <div className="space-x-6 text-sm font-medium text-slate-400">
          <a href="#progetti" className="hover:text-indigo-400 transition-colors">Progetti</a>
          <a href="#contatti" className="hover:text-indigo-400 transition-colors">Contatti</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-4 py-28 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Ciao, sono <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Mauro</span>
        </h1>
        <p className="text-xl text-indigo-300 font-medium mb-4">Frontend / React Developer</p>
        <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
          Costruisco interfacce web moderne, reattive e pulite. Dai uno sguardo ai miei progetti open-source qui sotto.
        </p>
        <a href="#progetti" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-all">
          Scopri i miei lavori
        </a>
      </header>

      {/* SEZIONE PROGETTI */}
      <main id="progetti" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-900 pb-4">Progetti in evidenza</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer id="contatti" className="py-12 text-center text-slate-600 text-sm border-t border-slate-900 mt-20">
        <p>© 2026 Mauro. Sviluppato con React & Tailwind CSS v4.</p>
      </footer>

    </div>
  );
}

export default App;