import React from 'react';
import { motion } from 'framer-motion';
import PlayingCard from '../PlayingCard';
import { CheckCircle2, XCircle } from 'lucide-react';

const Slide4Comparison: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3">Made vs Made</h2>
        <p className="text-gray-300 text-xl">족보 비교: 같은 '메이드'라면?</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full max-w-7xl justify-center items-center">
        
        {/* Hand 1: Winner */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-b from-green-900/30 to-black p-8 rounded-2xl border-2 border-green-500/50 flex flex-col items-center shadow-[0_0_30px_rgba(34,197,94,0.1)]"
        >
          <div className="absolute -top-5 bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-xl">
            <CheckCircle2 className="w-6 h-6" /> WINNER
          </div>
          
          <h3 className="text-3xl font-bold text-green-400 mb-8 mt-2">7-TOP MADE</h3>
          
          <div className="flex -space-x-10 md:-space-x-6 mb-8">
            <PlayingCard rank="A" suit="diamonds" size="md" />
            <PlayingCard rank="2" suit="hearts" size="md" />
            <PlayingCard rank="3" suit="spades" size="md" />
            <div className="relative">
              <PlayingCard rank="7" suit="clubs" size="md" highlight={true} className="ring-4 ring-green-400 rounded-xl" />
              <motion.div 
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-green-500 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center z-50 border-2 border-white text-xl"
              >
                7
              </motion.div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-200">
            가장 높은 숫자가 <span className="text-green-400 font-bold text-2xl">7</span>
          </p>
        </motion.div>

        {/* VS Badge */}
        <div className="text-6xl font-black italic text-gray-700">VS</div>

        {/* Hand 2: Loser */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-b from-red-900/30 to-black p-8 rounded-2xl border-2 border-red-500/30 flex flex-col items-center opacity-80 grayscale-[0.3]"
        >
           <div className="absolute -top-5 bg-red-800 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-xl">
            <XCircle className="w-6 h-6" /> LOSER
          </div>

          <h3 className="text-3xl font-bold text-red-400 mb-8 mt-2">9-TOP MADE</h3>
          
          <div className="flex -space-x-10 md:-space-x-6 mb-8">
            <PlayingCard rank="A" suit="diamonds" size="md" />
            <PlayingCard rank="2" suit="hearts" size="md" />
            <PlayingCard rank="4" suit="spades" size="md" />
            <div className="relative">
              <PlayingCard rank="9" suit="clubs" size="md" />
              <motion.div 
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="absolute -top-4 -right-4 bg-red-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center z-50 border-2 border-white text-xl"
              >
                9
              </motion.div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-200">
             가장 높은 숫자가 <span className="text-red-400 font-bold text-2xl">9</span>
          </p>
        </motion.div>

      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 bg-white/10 backdrop-blur px-10 py-5 rounded-2xl border border-white/20"
      >
        <p className="text-2xl md:text-3xl font-bold text-center text-white">
          핵심: 숫자는 <span className="text-amber-400 underline decoration-4 underline-offset-4">낮을수록</span> 좋다!
        </p>
      </motion.div>
    </div>
  );
};

export default Slide4Comparison;