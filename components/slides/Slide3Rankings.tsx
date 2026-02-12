import React from 'react';
import { motion } from 'framer-motion';
import PlayingCard from '../PlayingCard';
import { Trophy, Shield, AlertTriangle } from 'lucide-react';

const Slide3Rankings: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-12 h-full">
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
          족보의 등급
        </h2>
        <p className="text-gray-300 mt-4 text-xl">무늬와 숫자의 조합, 강함을 한눈에</p>
      </motion.div>

      <div className="flex flex-col w-full max-w-5xl gap-6">
        
        {/* Tier 1: Made */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-amber-900/40 to-black border border-amber-500/50 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-amber-500"></div>
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <Trophy className="w-40 h-40 text-amber-500" />
          </div>

          <div className="flex-1 z-10 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-4xl font-bold text-amber-400 flex items-center gap-3 justify-center md:justify-start mb-2">
              <Trophy className="w-8 h-8" /> 메이드 (Made)
            </h3>
            <p className="text-white text-xl font-semibold">최상위 등급</p>
            <p className="text-lg text-gray-300 mt-2">4장의 무늬와 숫자가 모두 다름</p>
          </div>

          <div className="flex gap-3 z-10 scale-90 md:scale-100 origin-center">
             <PlayingCard rank="A" suit="spades" size="sm" />
             <PlayingCard rank="3" suit="hearts" size="sm" />
             <PlayingCard rank="8" suit="clubs" size="sm" />
             <PlayingCard rank="K" suit="diamonds" size="sm" />
          </div>
        </motion.div>

        {/* Tier 2: Base */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-slate-800/40 to-black border border-gray-400/50 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gray-400"></div>
           <div className="absolute right-0 top-0 p-4 opacity-10">
            <Shield className="w-40 h-40 text-gray-400" />
          </div>

          <div className="flex-1 z-10 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-300 flex items-center gap-3 justify-center md:justify-start mb-2">
               <Shield className="w-8 h-8" /> 베이스 (Base)
            </h3>
            <p className="text-gray-400 text-xl font-semibold">하위 등급</p>
            <p className="text-lg text-gray-500 mt-2">3장의 무늬와 숫자가 다름 (1장 중복/무효)</p>
          </div>

          <div className="flex gap-3 z-10 scale-90 md:scale-100 origin-center">
             <PlayingCard rank="2" suit="diamonds" size="sm" />
             <PlayingCard rank="5" suit="clubs" size="sm" />
             <PlayingCard rank="9" suit="hearts" size="sm" />
             <PlayingCard rank="2" suit="spades" size="sm" dim={true} /> {/* Duplicate Number */}
          </div>
        </motion.div>

        {/* Tier 3: Two Base */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-amber-900/20 to-black border border-orange-700/30 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-orange-700"></div>

          <div className="flex-1 z-10 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-orange-600 flex items-center gap-3 justify-center md:justify-start mb-2">
               <AlertTriangle className="w-7 h-7" /> 투베이스 (Two Base)
            </h3>
            <p className="text-orange-800/80 text-xl font-semibold">최하위 등급</p>
            <p className="text-lg text-gray-500 mt-2">2장의 무늬와 숫자가 다름 (2장 중복)</p>
          </div>

          <div className="flex gap-3 z-10 scale-90 md:scale-100 origin-center">
             <PlayingCard rank="4" suit="clubs" size="sm" />
             <PlayingCard rank="J" suit="hearts" size="sm" />
             <PlayingCard rank="4" suit="diamonds" size="sm" dim={true} />
             <PlayingCard rank="J" suit="spades" size="sm" dim={true} />
          </div>
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-center bg-black/50 px-8 py-3 rounded-full border border-white/10"
      >
        <span className="text-amber-500 font-bold mr-3 text-xl">TIP:</span>
        <span className="text-lg text-gray-300">같은 등급 내에서는 가장 높은 숫자가 <strong className="text-white">더 낮은 패</strong>가 승리합니다.</span>
      </motion.div>
    </div>
  );
};

export default Slide3Rankings;