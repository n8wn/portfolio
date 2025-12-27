import React, { useState, useRef } from "react";

// template data for projects 
const PROJECTS = [
  {
    name: "Java App 1",
    lang: "Java",
    img: "https://placehold.co/400x220/6e8efb/fff?text=Java+App+1",
    desc: "My first Java project.",
    github: "#",
    demo: "#"
  },
  {
    name: "C Utility",
    lang: "C",
    img: "https://placehold.co/400x220/a777e3/fff?text=C+Utility",
    desc: "A useful C command-line app.",
    github: "#",
    demo: "#"
  },
  {
    name: "Python Data Tool",
    lang: "Python",
    img: "https://placehold.co/400x220/ffc107/232243?text=Python+Data+Tool",
    desc: "Python project for data analysis.",
    github: "#",
    demo: "#"
  },
  {
    name: "JavaFX UI",
    lang: "Java",
    img: "https://placehold.co/400x220/6e8efb/fff?text=JavaFX+UI",
    desc: "A JavaFX desktop GUI.",
    github: "#",
    demo: "#"
  },
  {
    name: "C Networking",
    lang: "C",
    img: "https://placehold.co/400x220/a777e3/fff?text=C+Networking",
    desc: "Networking app in C.",
    github: "#",
    demo: "#"
  },
  {
    name: "Python Bot",
    lang: "Python",
    img: "https://placehold.co/400x220/ffc107/232243?text=Python+Bot",
    desc: "A Python automation bot.",
    github: "#",
    demo: "#"
  },
  {
    name: "Java Web API",
    lang: "Java",
    img: "https://placehold.co/400x220/6e8efb/fff?text=Java+Web+API",
    desc: "REST API in Java.",
    github: "#",
    demo: "#"
  },
  {
    name: "C Game",
    lang: "C",
    img: "https://placehold.co/400x220/a777e3/fff?text=C+Game",
    desc: "A terminal game in C.",
    github: "#",
    demo: "#"
  },
  {
    name: "Python Visualizer",
    lang: "Python",
    img: "https://placehold.co/400x220/ffc107/232243?text=Python+Visualizer",
    desc: "Data viz in Python.",
    github: "#",
    demo: "#"
  },
  {
    name: "Java Library",
    lang: "Java",
    img: "https://placehold.co/400x220/6e8efb/fff?text=Java+Library",
    desc: "Reusable Java library.",
    github: "#",
    demo: "#"
  },
  {
    name: "C Parser",
    lang: "C",
    img: "https://placehold.co/400x220/a777e3/fff?text=C+Parser",
    desc: "Parser in C.",
    github: "#",
    demo: "#"
  },
  {
    name: "Python API Client",
    lang: "Python",
    img: "https://placehold.co/400x220/ffc107/232243?text=Python+API+Client",
    desc: "Python client for APIs.",
    github: "#",
    demo: "#"
  },
  // i can add more as i need. 
];


const PROFILE_IMAGE = "https://postimg.cc/QF0ZF2ct"; 
const HERO_BG_IMAGE = "https://postimg.cc/bDYTs5Hs"; 
const CV_PDF_URL = "https://drive.google.com/file/d/1lIk7dATf_4D6IxwF-31-ELLLAiu6bV-m/view?usp=sharing"; // <-- your CV PDF

function App() {
  const [page, setPage] = useState("home");
  // Projects state
  const [showCount, setShowCount] = useState(12);
  const [sortLang, setSortLang] = useState("All");

  // Parallax effect on scroll for hero
  const heroRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        setOffsetY(y * 0.5); // Parallax factor
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtering
  const langs = ["All", "Java", "C", "Python"];
  let filteredProjects = sortLang === "All" ? PROJECTS : PROJECTS.filter(p => p.lang === sortLang);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 flex items-center justify-between px-4 md:px-8 h-16">
        <div className="font-bold tracking-wide text-lg text-[#6e8efb]">Nathaniel Warneck</div>
        <div className="space-x-3">
          <button 
            className={`btn-nav ${page==="home"?"text-[#6e8efb] font-semibold":"text-gray-700"} hover:text-[#a777e3] transition`}
            onClick={()=>setPage("home")}
          >Home</button>
          <button 
            className={`btn-nav ${page==="projects"?"text-[#6e8efb] font-semibold":"text-gray-700"} hover:text-[#a777e3] transition`}
            onClick={()=>setPage("projects")}
          >Projects</button>
        </div>
        <style>{`
          .btn-nav {
            background: none;
            border: none;
            padding: 0.7em 1em;
            font-size: 1rem;
            cursor: pointer;
          }
        `}</style>
      </nav>
      {/* --- PAGE ROUTES --- */}
      <div className="pt-16">
        {page === "home" ? (
          <>
            {/* Parallax Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden" ref={heroRef}>
              <img
                src={HERO_BG_IMAGE}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition"
                style={{
                  transform: `translateY(${offsetY}px) scale(1.06)`,
                  filter: "brightness(0.65) blur(2px)"
                }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6e8efbcc] via-[#a777e3bb] to-[#6e8efb66] pointer-events-none animate-gradient-xy" />
              <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl mb-3 object-cover bg-white/60"
                  style={{marginTop:"-3.5rem"}}
                />
                <h1 className="text-white font-extrabold text-3xl md:text-5xl drop-shadow-lg">Nathaniel Warneck</h1>
                <span className="mt-2 text-indigo-100 text-lg md:text-2xl font-medium tracking-wide drop-shadow">Junior Software Developer</span>
                <a href="https://github.com/n8wn" target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#6e8efb] to-[#a777e3] shadow-md text-white font-bold text-lg hover:scale-105 transition"
                >GitHub</a>
              </div>
              <style>
                {`
                  @keyframes gradient-xy {
                    0%,100% { background-position: 0% 0%; }
                    50% { background-position: 100% 100%; }
                  }
                  .animate-gradient-xy {
                    background-size: 200% 200%;
                    animation: gradient-xy 10s ease-in-out infinite;
                  }
                `}
              </style>
            </section>
            
            {/* About */}
            <section className="py-8 md:py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="mb-5 text-center text-3xl font-bold text-[#a777e3]">About Me</h2>
                <div className="bg-white/80 shadow-lg rounded-2xl p-7 md:p-10 backdrop-blur-lg border border-[#e2e6fa]">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a young software developer who is currently exploring projects in Java, Python, and C.
                    I'm studying Computer Science (BSc) at the University of Bristol.<br /><br />
                    <span className="font-semibold text-[#6e8efb]">I love solving problems and building things that matter.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="py-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="mb-5 text-center text-2xl font-bold text-[#6e8efb]">Skills</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-[#6e8efb] text-white font-semibold px-5 py-2 rounded-full shadow">Java</span>
                  <span className="bg-[#a777e3] text-white font-semibold px-5 py-2 rounded-full shadow">C</span>
                  <span className="bg-[#ffc107] text-[#232243] font-semibold px-5 py-2 rounded-full shadow">Python</span>
                  <span className="bg-[#232243] text-white font-semibold px-5 py-2 rounded-full shadow">Git</span>
                </div>
              </div>
            </section>

            {/* Projects Preview (first 3) */}
            <section className="py-10 bg-gradient-to-br from-[#f3f1fa] to-[#e7e9fd]">
              <div className="max-w-6xl mx-auto">
                <h2 className="mb-6 text-center text-3xl font-bold text-[#a777e3]">Projects</h2>
                <div className="grid md:grid-cols-3 gap-7">
                  {PROJECTS.slice(0,3).map((proj, idx) => (
                    <div key={idx} className="bg-white/90 rounded-xl shadow-lg border border-[#f0f3fa] flex flex-col transition hover:scale-[1.02]">
                      <img src={proj.img} alt={proj.name} className="rounded-t-xl h-48 object-cover border-b" />
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-bold text-lg mb-1 text-[#6e8efb]">{proj.name}</h3>
                        <span className="inline-block rounded-full text-xs bg-[#e7e9fd] px-3 py-1 text-[#232243] mb-2">{proj.lang}</span>
                        <p className="text-gray-700 text-sm flex-1">{proj.desc}</p>
                        <div className="flex gap-2 mt-4">
                          <a href={proj.github} target="_blank" rel="noopener noreferrer"
                            className="text-[#6e8efb] hover:underline text-sm font-semibold"
                          >GitHub</a>
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                            className="text-[#a777e3] hover:underline text-sm font-semibold"
                          >Demo</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button
                    className="inline-block mt-2 px-8 py-2 rounded-full bg-gradient-to-r from-[#6e8efb] to-[#a777e3] shadow-md text-white font-bold text-lg hover:scale-105 transition"
                    onClick={()=>setPage("projects")}
                  >See All Projects</button>
                </div>
              </div>
            </section>

            {/* CV Section */}
            <section className="py-10">
              <div className="max-w-3xl mx-auto">
                <h2 className="mb-5 text-center text-2xl font-bold text-[#6e8efb]">My CV</h2>
                <div className="bg-white/80 shadow-lg rounded-2xl p-7 md:p-10 flex flex-col items-center border border-[#e2e6fa]">
                  <div className="w-full flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col items-center">
                      <iframe
                        src={CV_PDF_URL}
                        title="My CV"
                        className="w-full h-72 md:h-96 rounded-lg border border-[#d7dcec] shadow"
                        style={{background:"white"}}
                      ></iframe>
                      <a
                        href={CV_PDF_URL}
                        download="NathanielWarneck_CV.pdf"
                        className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#6e8efb] to-[#a777e3] text-white font-bold shadow hover:scale-105 transition"
                      >Download CV</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 bg-gradient-to-br from-[#e7e9fd] to-[#f3f1fa]">
              <div className="max-w-2xl mx-auto">
                <h2 className="mb-5 text-center text-2xl font-bold text-[#a777e3]">Contact</h2>
                <div className="bg-white/80 rounded-2xl shadow-lg border border-[#e2e6fa] px-8 py-8 flex flex-col items-center gap-3 text-lg">
                  <div className="flex items-center gap-2">
                    <svg width="22" height="22" fill="none" stroke="#6e8efb" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
                    <a className="text-[#6e8efb] hover:underline" href="mailto:n8warneck@gmail.com">n8warneck@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="22" height="22" fill="none" stroke="#6e8efb" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 17.5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.5a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 17.5z"/><path d="M6 9v3m12-3v3M9 6v3m6-3v3"/></svg>
                    <a className="text-[#6e8efb] hover:underline" href="sms:+447340259078">UK +44 7340 259078</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="22" height="22" fill="none" stroke="#6e8efb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8v5a1 1 0 0 1-1 1H8"/></svg>
                    <a className="text-[#6e8efb] hover:underline" href="https://wa.me/85270736553" target="_blank" rel="noopener noreferrer">Whatsapp HK +852 70736553</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 text-[#232243] text-sm bg-white/80">
              © 2025 Nathaniel Warneck · <a href="https://github.com/n8wn" className="text-[#6e8efb] underline">GitHub</a>
            </footer>
          </>
        ) : (
          // --- PROJECTS PAGE ---
          <section className="pt-4 pb-14 min-h-screen bg-gradient-to-br from-[#f3f1fa] via-[#e7e9fd] to-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-7 text-[#6e8efb]">All Projects</h2>
              {/* Sorting */}
              <div className="flex flex-wrap gap-3 mb-7 justify-center">
                {langs.map(lang=>(
                  <button
                    key={lang}
                    onClick={()=>{setSortLang(lang); setShowCount(12);}}
                    className={`px-5 py-2 rounded-full border font-semibold text-base transition ${
                      sortLang===lang
                        ? "bg-gradient-to-r from-[#6e8efb] to-[#a777e3] text-white border-[#6e8efb] shadow"
                        : "bg-white border-[#e7e9fd] text-[#6e8efb] hover:bg-[#f3f1fa]"
                    }`}
                  >{lang}</button>
                ))}
              </div>
              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredProjects.slice(0,showCount).map((proj, idx)=>(
                  <div key={idx} className="bg-white/90 rounded-xl shadow-lg border border-[#f0f3fa] flex flex-col transition hover:scale-[1.02]">
                    <img src={proj.img} alt={proj.name} className="rounded-t-xl h-52 object-cover border-b" />
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-1 text-[#6e8efb]">{proj.name}</h3>
                      <span className="inline-block rounded-full text-xs bg-[#e7e9fd] px-3 py-1 text-[#232243] mb-2">{proj.lang}</span>
                      <p className="text-gray-700 text-sm flex-1">{proj.desc}</p>
                      <div className="flex gap-2 mt-4">
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          className="text-[#6e8efb] hover:underline text-sm font-semibold"
                        >GitHub</a>
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                          className="text-[#a777e3] hover:underline text-sm font-semibold"
                        >Demo</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Show More Button */}
              {showCount < filteredProjects.length && (
                <div className="text-center mt-8">
                  <button
                    className="px-8 py-2 rounded-full bg-gradient-to-r from-[#6e8efb] to-[#a777e3] text-white font-bold text-lg shadow hover:scale-105 transition"
                    onClick={()=>setShowCount(c=>c+6)}
                  >Show more</button>
                </div>
              )}
              {/* Back to Home */}
              <div className="text-center mt-10">
                <button
                  className="underline text-[#6e8efb] font-semibold hover:text-[#a777e3] text-lg"
                  onClick={()=>setPage("home")}
                >Back to Home</button>
              </div>
            </div>
          </section>
        )}
      </div>
      {/* Tailwind for fonts */}
      <style>{`body { font-family: Montserrat, Arial, sans-serif; }`}</style>
    </div>
  );
}

export default App;