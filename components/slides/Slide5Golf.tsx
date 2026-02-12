import React from 'react';
import { motion } from 'framer-motion';
import PlayingCard from '../PlayingCard';
import { Crown, Sparkles } from 'lucide-react';

const Slide5Golf: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-visible">
      
      {/* Radiant Background Effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent z-0 pointer-events-none rounded-full"
        style={{ filter: 'blur(100px)' }}
      />

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-6 text-amber-300">
           <Crown className="w-10 h-10" />
           <span className="tracking-[0.3em] font-bold text-xl">UNBEATABLE</span>
           <Crown className="w-10 h-10" />
        </div>
        <h2 className="text-7xl md:text-[10rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-600 drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
          GOLF
        </h2>
        <p className="text-3xl text-white font-light mt-6">천하무적의 족보</p>
      </motion.div>

      {/* The Cards */}
      <div className="flex gap-6 md:gap-10 z-20 perspective-1000">
        {[
          { r: 'A', s: 'diamonds' },
          { r: '2', s: 'hearts' },
          { r: '3', s: 'spades' },
          { r: '4', s: 'clubs' }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              bounce: 0.5, 
              delay: idx * 0.15 + 0.5 
            }}
            whileHover={{ y: -20, scale: 1.1 }}
            className="relative"
          >
             <PlayingCard 
               rank={card.r} 
               suit={card.s as any} 
               size="xl" 
               highlight={true} 
               className="shadow-[0_0_30px_rgba(251,191,36,0.5)] scale-110"
             />
             <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                className="absolute -top-6 -right-6 text-amber-300"
             >
               <Sparkles className="w-10 h-10" />
             </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-20 bg-gradient-to-r from-black/0 via-black/60 to-black/0 p-8 text-center max-w-4xl z-10"
      >
        <p className="text-xl md:text-3xl text-gray-200 leading-relaxed">
          <span className="text-amber-400 font-bold">A - 2 - 3 - 4</span> 서로 다른 무늬. <br/>
          바둑이 게임에서 절대 패배하지 않는 최강의 족보입니다.
        </p>
        <div className="mt-8 flex flex-col gap-2 items-center">
          <p className="text-lg text-gray-400">
            * A는 숫자 '1'로 취급되어 가장 낮은 숫자를 만듭니다.
          </p>
          <p className="text-xl text-amber-500/90 font-bold animate-pulse mt-2">
            * 골프와 골프가 격돌할 경우, 무늬와 상관없이 무승부(Tie)로 처리 됩니다.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide5Golf;