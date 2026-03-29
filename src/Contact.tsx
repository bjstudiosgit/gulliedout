import { motion } from "motion/react";

export default function Contact() {
  const scrollingText = "WEBSITES. AI SYSTEMS. CONTENT. BUILT FAST. BUILT PROPER.";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] -z-10" />

      <div className="p-6 md:p-12 pt-24 md:pt-32 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter uppercase">Contact Us</h2>
          <div className="h-[1px] flex-grow bg-brand-orange/30 hidden md:block" />
        </div>

        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 border border-slate/50 rounded-lg bg-black/40 backdrop-blur-sm hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,99,33,0.15)] transition-all duration-300 group cursor-default"
          >
            <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4 md:mb-6 group-hover:text-brand-orange transition-colors">Ekk, we have too much work at the moment.</h3>
            <div className="w-12 h-[2px] bg-brand-orange mb-4 md:mb-6" />
            
            <div className="space-y-6">
              <p className="text-gray-500 italic text-base md:text-lg border-l-2 border-brand-orange/30 pl-6 py-2">
                "Like a good builder, we put our clients first."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Text Section */}
        <div className="mt-32 relative py-12 border-y border-brand-orange/20 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter opacity-20 text-brand-orange">
                {scrollingText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
