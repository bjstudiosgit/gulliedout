import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Clients() {
  const clients = [
    {
      name: "G-Zone Rap Battle",
      url: "https://www.gzonerapbattle.co.uk",
      description: "The rawest UK battle rap league featuring uncensored MC clashes and underground events.",
      tech: ["React", "Vite", "Tailwind CSS", "Google Analytics", "SEO"],
      thumbnail: "https://picsum.photos/seed/rap-battle/800/600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] -z-10" />

      <div className="p-6 md:p-12 pt-24 md:pt-32 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter uppercase">Clients</h2>
          <div className="h-[1px] flex-grow bg-brand-orange/30 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative border border-slate/50 rounded-xl bg-black/40 backdrop-blur-sm overflow-hidden hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,99,33,0.15)] transition-all duration-300 cursor-pointer"
              onClick={() => window.open(client.url, '_blank')}
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={client.thumbnail} 
                  alt={client.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight group-hover:text-brand-orange transition-colors">
                    {client.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-brand-orange/30 flex items-center justify-center group-hover:bg-brand-orange transition-all">
                    <svg className="w-4 h-4 text-brand-orange group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {client.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {client.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
