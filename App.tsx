import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Disc } from 'lucide-react';

import Slide1Intro from './components/slides/Slide1Intro';
import Slide2Flow from './components/slides/Slide2Flow';
import Slide3Rankings from './components/slides/Slide3Rankings';
import Slide4Comparison from './components/slides/Slide4Comparison';
import Slide5Golf from './components/slides/Slide5Golf';
import Slide6Edge from './components/slides/Slide6Edge';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    Slide1Intro,
    Slide2Flow,
    Slide3Rankings,
    Slide4Comparison,
    Slide5Golf,
    Slide6Edge
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-luxury-gradient overflow-hidden relative font-sans text-white select-none">
      
      {/* Background Texture/Noise Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-7xl h-full flex flex-col justify-center items-center"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8 md:px-12 z-50">
        
        {/* Slide Counter / Indicators */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,192,45,0.6)]' : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
           <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-gray-700 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400 hover:text-amber-400 transition-all backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 text-black font-bold tracking-wider hover:brightness-110 shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all active:scale-95"
          >
            {currentSlide === slides.length - 1 ? 'FINISH' : 'NEXT'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decor Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
    </div>
  );
};

export default App;