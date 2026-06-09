import React from 'react';
import ProjectCard from './components/ProjectCard.jsx';

// Import delle immagini (PNG)
import imgSicilimpianti from './assets/sicilimpianti.png';
import imgFisioRocca from './assets/fisioterapiarocca.png';
import imgIdria from './assets/idriabnb.png';

function App() {
  const projectsData = [
    {
      title: "Luminarie Sicil Impianti",
      description: "Sito web aziendale sviluppato in ottica local marketing per un'azienda leader nel settore delle installazioni e luminarie artistiche.",
      tags: ["WordPress", "Web Design", "SEO Local"],
      image: imgSicilimpianti,
      link: "https://www.sicilimpianti.com"
    },
    {
      title: "FisioRocca - Fisioterapia",
      description: "Piattaforma web professionale per uno studio di fisioterapia, incentrata sulla presentazione dei servizi specialistici e del team.",
      tags: ["WordPress", "UI/UX", "Responsive"],
      image: imgFisioRocca,
      link: "https://www.fisioterapiarocca.it"
    },
    {
      title: "Idria Bed and Breakfast",
      description: "Sito web per una struttura ricettiva turistica vicino Milazzo, ottimizzato per la conversione e la presentazione delle camere.",
      tags: ["WordPress", "Booking", "Turismo"],
      image: imgIdria,
      link: "https://www.idriabnb.it"
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-black text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-900/50">
        <div className="p-6 max-w-5xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors">
            MAURO.DEV
          </a>
          
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#progetti" className="hover:text-indigo-400 transition-colors">Portfolio</a>
            <a href="#contatti" className="hover:text-indigo-400 transition-colors">Contact</a>
            
            <a 
              href="#contatti"
              className="bg-white text-black hover:bg-slate-200 px-4 py-1.5 rounded-full transition-all text-xs font-bold tracking-wide"
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-4 pt-44 pb-24 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Ciao, sono <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Mauro</span>
        </h1>
        <p className="text-xl text-indigo-300 font-medium mb-4">Frontend / Web Developer</p>
        <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
          Sviluppo soluzioni web moderne ed efficaci. Dai sistemi di gestione contenuti con WordPress fino ad interfacce dinamiche in React.
        </p>

        <div className="flex flex-col space-y-4 items-center md:items-start">
          <a 
            href="https://linkedin.com/in/mauro-garofalo"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 text-white font-medium py-2.5 px-5 rounded-xl text-sm transition-all flex items-center gap-2 w-fit"
          >
            <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </header>

      {/* SEZIONE PROGETTI */}
      <main id="progetti" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-900 pb-4">Progetti Realizzati</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </main>

      {/* SEZIONE CONTATTI - STILE MUNEEB */}
      <section id="contatti" className="max-w-5xl mx-auto px-4 py-24 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Sinistra: Testo e Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              It's Time To Talk About Your <span className="text-indigo-400">Project</span>.
            </h2>
            <p className="text-slate-400 mb-12">
              Lets make Long term and Co operative Relation
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white font-medium">+39 3XX XXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium">mauro.garofalo89@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Destra: Form */}
          <div className="bg-slate-900/10 border border-slate-900 p-8 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
                  <input type="text" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                <input type="text" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Comment or Message</label>
                <textarea rows="4" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-slate-600 text-sm border-t border-slate-900 mt-20">
        <p>© 2026 Mauro Garofalo. Sviluppato con React & Tailwind CSS v4.</p>
      </footer>

    </div>
  );
}

export default App;