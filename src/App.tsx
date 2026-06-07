import Hero from './components/Hero';

export default function App() {
  return (
    <div className="bg-[#f3f1eb] min-h-screen text-[#111] font-sans selection:bg-[#111] selection:text-[#f3f1eb]">
      <Hero />
      
      {/* Contact & Clients */}
      <section className="px-4 md:px-8 py-20 md:py-32 flex flex-col items-center">
        <a href="mailto:ahmedbenabdallahdev@gmail.com" className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">
          ahmedbenabdallahdev@gmail.com
        </a>
        
        <div className="mt-20 md:mt-32 text-center w-full max-w-4xl">
          <h3 className="uppercase font-sans font-semibold tracking-widest text-[0.7rem] md:text-[0.8rem] opacity-60 mb-8">Clients Include</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 font-sans font-black tracking-tighter text-xl md:text-3xl uppercase opacity-90">
            <span>Apple</span>
            <span>Amazon</span>
            <span>Adobe</span>
            <span>Google</span>
            <span>Nike</span>
            <span>The New York Times</span>
            <span>Lululemon</span>
            <span>NPR</span>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 md:px-8 py-20 min-h-screen border-t border-[#111]/10 flex flex-col items-center">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter">Featured Work</h2>
          <p className="uppercase font-sans font-medium tracking-widest text-[0.7rem] md:text-[0.8rem] opacity-60 mt-4">Select recent and notable projects</p>
        </div>
        
        <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-24">
          {['Nike', 'ShakeShack', 'Jaffa', 'Caulfield Cup', 'Frugo', 'Whop'].map((project, i) => (
            <div key={project} className="group cursor-pointer flex flex-col items-center">
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#e4e2db] rounded-3xl overflow-hidden relative transition-transform duration-500 group-hover:scale-[0.98]">
                <img src={`https://picsum.photos/seed/${project.replace(/\s+/g, '')}/1600/800`} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" alt={project} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="mt-6 md:mt-8 font-sans font-bold text-2xl md:text-3xl uppercase tracking-tight group-hover:translate-x-2 transition-transform">{project}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* More Work */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#111]/10 flex flex-col items-center">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter">More Work</h2>
          <p className="uppercase font-sans font-medium tracking-widest text-[0.7rem] md:text-[0.8rem] opacity-60 mt-4">Take a scroll, stay a while</p>
        </div>

        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="group aspect-square bg-[#e4e2db] rounded-2xl md:rounded-[2rem] hover:scale-[0.98] transition-transform duration-500 cursor-pointer overflow-hidden relative">
               <img src={`https://picsum.photos/seed/work-${i}/600/600`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" alt="Work item" />
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 md:py-20 border-t border-[#111]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="font-sans font-semibold text-sm uppercase tracking-widest opacity-60">
          All rights reserved 2026 inc Ahmed Ben Abdallah
        </div>
        <div className="flex items-center gap-8 font-sans font-bold text-sm uppercase tracking-widest">
          <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}
