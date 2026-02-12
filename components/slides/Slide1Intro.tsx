import React from 'react';
import { motion } from 'framer-motion';
import PlayingCard from '../PlayingCard';

const Slide1Intro: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative z-10 w-full h-full">
      {/* Title Section */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-20 mb-10 md:mb-16"
      >
        <h1 className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tight">
          BADUGI
        </h1>
        <p className="text-2xl md:text-4xl mt-6 font-light text-amber-100 tracking-[0.2em] uppercase border-y-2 border-amber-500/30 py-3">
          Different is Stronger
        </p>
      </motion.div>

      {/* Exploding Cards Animation - Container Sized Up */}
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] flex justify-center items-center perspective-1000">
        {[
          { suit: 'diamonds', rank: 'A', rotate: -25, x: -140, y: 25 },
          { suit: 'clubs', rank: '2', rotate: -10, x: -50, y: -25 },
          { suit: 'hearts', rank: '3', rotate: 10, x: 50, y: -25 },
          { suit: 'spades', rank: '4', rotate: 25, x: 140, y: 25 },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0, rotate: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              rotate: card.rotate, 
              x: card.x, 
              y: card.y 
            }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6 + (idx * 0.1) 
            }}
            className="absolute shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <PlayingCard 
              suit={card.suit as any} 
              rank={card.rank} 
              size="lg" 
              highlight={true}
            />
          </motion.div>
        ))}
        
        {/* Glow behind cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full z-[-1]" 
        />
      </div>

      {/* Subtext */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 text-center max-w-4xl bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">다를수록 강해지는 승부</h2>
        <p className="text-xl text-gray-200 mb-6">4장의 카드로 완성하는 카지노의 새로운 재미</p>
        
        <div className="flex gap-12 justify-center text-lg md:text-xl">
          <div className="flex flex-col items-center">
            <span className="text-amber-500 font-bold mb-2">DIFFERENT</span>
            <span className="text-gray-300">4장의 무늬와 숫자가 모두 달라야 함</span>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="text-amber-500 font-bold mb-2">LOW</span>
            <span className="text-gray-300">숫자가 낮을수록 강력한 족보</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide1Intro;