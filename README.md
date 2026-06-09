# 🚀 Mauro Garofalo | Frontend Web Developer Portfolio

Questo è il mio portfolio professionale sviluppato da zero per unire la mia solida esperienza nella gestione di progetti reali (Content Management con WordPress) all'adozione delle moderne tecnologie del Frontend Ecosystem. 

L'applicazione è progettata seguendo una logica orientata ai componenti, garantendo alte prestazioni, caricamenti istantanei e una completa responsività.

🔗 **Link Live del Progetto:** [https://mauro-portfolio-pi.vercel.app/](https://mauro-portfolio-pi.vercel.app/)

---

## 🛠️ Stack Tecnologico & Architettura

Il frontend dell'applicazione sfrutta gli strumenti standard del settore per massimizzare la velocità di sviluppo e l'efficienza del codice in produzione:

* **⚛️ React:** Utilizzato per strutturare l'applicazione secondo un'architettura a componenti. La logica di rendering si basa sul riutilizzo delle interfacce tramite il passaggio dinamico dei dati.
* **⚡ Vite:** Scelto come build tool di nuova generazione rispetto a Create React App per l'utilizzo dei moduli ESM nativi, riducendo a zero i tempi di avvio in sviluppo e ottimizzando il pacchetto finale.
* **🎨 Tailwind CSS v4:** Framework Utility-First implementato per creare un'interfaccia scura (Dark Mode) moderna e minimale. La gestione del layout fluido permette un'esperienza Mobile-First impeccabile.
* **🚀 Vercel & GitHub:** Configurazione di una pipeline automatizzata di **CI/CD (Continuous Integration/Continuous Deployment)**. Ogni update tracciato tramite Git esegue una build automatica direttamente in cloud.

---

## 📁 Struttura e Logica dei Componenti

L'applicazione è organizzata per garantire la massima pulizia del codice:

* `src/App.jsx`: Componente centrale che ospita la struttura portante (Navbar, Hero, Contatti e Footer). Gestisce lo stato e l'array centralizzato dei dati dei progetti.
* `src/components/ProjectCard.jsx`: Componente funzionale riutilizzabile. Sfrutta le **Props** per ricevere dinamicamente i dati di ciascun lavoro (titolo, descrizione, tag tecnici, link esterni e immagini), isolando la logica visuale.
* `src/assets/`: Contiene gli asset statici ottimizzati in formato `.png`.

---

## 💼 Progetti in Evidenza (Logica di Business)

Il portfolio non mostra semplici esercizi di codice, ma espone casi di studio reali focalizzati sul local marketing e sulla conversione:

1.  **Luminarie Sicil Impianti** (`https://www.sicilimpianti.com`)
    * *Obiettivo:* Creazione di una presenza digitale per un'azienda leader nel settore delle installazioni artistiche.
    * *Focus:* Ottimizzazione local marketing e SEO per l'acquisizione di clienti sul territorio.
2.  **FisioRocca - Fisioterapia** (`https://www.fisioterapiarocca.it`)
    * *Obiettivo:* Piattaforma professionale per uno studio medico specialistico.
    * *Focus:* Ottimizzazione della User Interface (UI) incentrata sulla trasparenza del team e sulla facilità di contatto.
3.  **Idria Bed and Breakfast** (`https://www.idriabnb.it`)
    * *Obiettivo:* Piattaforma vetrina per una struttura ricettiva turistica vicino Milazzo.
    * *Focus:* Copywriting orientato alla conversione e valorizzazione visiva dei servizi e delle camere.

---

## 📈 Qualità del Codice & Strumenti di Linting

Per garantire la massima manutenibilità e aderenza agli standard del codice moderno:
* Il progetto integra **ESLint** come linter statico per intercettare pattern errati o variabili inutilizzate (es. rimozione automatica di import orfani secondo le specifiche della nuova JSX Transform di React).

---

## 📦 Installazione ed Avvio Locale

Per clonare ed avviare il progetto sul proprio computer:

1. Clonare il repository:
   ```bash
   git clone [https://github.com/MauroZz8/mauro-portfolio.git](https://github.com/MauroZz8/mauro-portfolio.git)