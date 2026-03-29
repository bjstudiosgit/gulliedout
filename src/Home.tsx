import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main>
      <section className="h-screen relative overflow-hidden flex items-center justify-center bg-black">
          <motion.div
            className="absolute inset-0 z-0 opacity-100 md:opacity-80 lg:opacity-70"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(255, 99, 33, 0.2) 0%, #000000 70%)",
                "radial-gradient(circle at 55% 45%, rgba(255, 99, 33, 0.3) 0%, #000000 70%)",
                "radial-gradient(circle at 50% 50%, rgba(255, 99, 33, 0.2) 0%, #000000 70%)",
              ],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {!videoFinished && (
            <div className="absolute inset-0 w-full h-full">
              <video 
                ref={videoRef}
                autoPlay 
                muted
                playsInline 
                onEnded={() => setVideoFinished(true)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/bjstudioheromobile.mp4" media="(max-width: 767px)" type="video/mp4" />
                <source src="/bjstudioherotablet.mp4" media="(min-width: 768px) and (max-width: 1023px)" type="video/mp4" />
                <source src="/bjstudiohero.mp4" media="(min-width: 1024px)" type="video/mp4" />
              </video>
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full hover:bg-brand-orange transition-all duration-300 group"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          )}
          {!videoFinished && <div className="absolute inset-0 bg-charcoal/60" />}
          <div className="absolute inset-0 z-10 grain opacity-[0.03] md:opacity-[0.05]" />
          <div className="absolute inset-0 z-20 vignette" />
          {videoFinished && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.01, 1] }}
              transition={{ 
                opacity: { duration: 1 }, 
                y: { duration: 1 }, 
                scale: { duration: 20, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="text-center relative z-30 flex flex-col items-center justify-center w-full px-4 md:scale-105 lg:scale-110"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-display font-bold relative"
              >
                <span className="text-brand-orange">BJS</span>
                <motion.span 
                  initial={{ color: "#ffffff" }}
                  animate={{ color: "#FF6321" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "linear" }}
                >
                  tudio
                </motion.span>
                <span className="absolute -bottom-4 right-0 text-[10px] md:text-xs text-gray-500 font-sans tracking-[0.2em] uppercase">Built in Manchester.</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-8 md:mt-12 max-w-3xl mx-auto px-4 md:px-6 text-center"
              >
                {/* Large decorative quote marks */}
                <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-7xl md:text-9xl font-serif opacity-10 text-brand-orange select-none">“</span>
                <span className="absolute -bottom-12 md:-bottom-16 -right-2 md:-right-4 text-7xl md:text-9xl font-serif opacity-10 text-brand-orange select-none">”</span>
                
                <p className="relative z-10 text-base md:text-xl text-gray-300 font-display font-medium tracking-tight leading-relaxed md:leading-relaxed">
                  "I’ve been here since green screens and 8-bit code, moving with every wave of technology as it evolved. Most people hesitate. We don’t. We adopt early. We build early. That’s where the advantage is. Technology doesn’t wait. It cuts costs. It improves user experience."
                  <span className="block md:inline-block text-brand-orange font-bold uppercase tracking-widest mt-4 md:mt-0 md:ml-4 whitespace-nowrap">- Bradley James Smith</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full max-w-md mx-auto mt-10 md:mt-12 flex flex-col items-center"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full">
                  <Link to="/contact" className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-brand-orange text-white font-bold uppercase tracking-widest hover:bg-brand-orange active:scale-95 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all duration-200 text-center">Start a Project</Link>
                  <Link to="/clients" className="w-full sm:w-auto px-8 py-4 sm:py-3 border border-white text-white font-bold uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange active:scale-95 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all duration-200 text-center">View Work</Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </section>
    </main>
  );
}
