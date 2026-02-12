import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Diamond, Club, Spade } from 'lucide-react';

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

interface PlayingCardProps {
  rank: string;
  suit: Suit;
  className?: string;
  isFaceUp?: boolean;
  highlight?: boolean;
  dim?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const PlayingCard: React.FC<PlayingCardProps> = ({ 
  rank, 
  suit, 
  className = '', 
  isFaceUp = true, 
  highlight = false, 
  dim = false,
  size = 'md' 
}) => {
  const isRed = suit === 'hearts' || suit === 'diamonds';
  
  const SuitIcon = () => {
    switch (suit) {
      case 'hearts': return <Heart fill="currentColor" />;
      case 'diamonds': return <Diamond fill="currentColor" />;
      case 'clubs': return <Club fill="currentColor" />;
      case 'spades': return <Spade fill="currentColor" />;
    }
  };

  // Increased sizes for better visibility
  const sizeClasses = {
    sm: 'w-20 h-28 text-sm',     // Was w-16 h-24 text-xs
    md: 'w-28 h-40 text-base',   // Was w-24 h-36 text-sm
    lg: 'w-40 h-56 text-xl',     // Was w-32 h-48 text-base
    xl: 'w-56 h-80 text-3xl',    // Was w-48 h-72 text-xl
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };
  
  const centerIconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-28 h-28',
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} rounded-xl shadow-2xl transition-all duration-500 preserve-3d group ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
        {/* Glow Effect */}
      {highlight && (
        <div className="absolute -inset-2 bg-amber-400/30 blur-lg rounded-xl animate-pulse z-[-1]" />
      )}
      
      {/* Card Content */}
      <div 
        className={`absolute inset-0 rounded-xl border border-gray-300 backface-hidden overflow-hidden ${
          dim ? 'brightness-50' : 'brightness-100'
        } ${isFaceUp ? 'bg-gradient-to-br from-white to-gray-200' : 'bg-casino-red'}`}
      >
        {isFaceUp ? (
          <div className={`w-full h-full flex flex-col justify-between p-2 md:p-4 select-none ${isRed ? 'text-red-600' : 'text-slate-900'}`}>
            {/* Top Left */}
            <div className="flex flex-col items-center leading-none">
              <span className="font-bold font-serif text-[1.2em]">{rank}</span>
              <div className={`${iconSizes[size]}`}>
                <SuitIcon />
              </div>
            </div>

            {/* Center Art */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 ${centerIconSizes[size]}`}>
               <SuitIcon />
            </div>

             {/* Bottom Right (Rotated) */}
            <div className="flex flex-col items-center leading-none rotate-180">
              <span className="font-bold font-serif text-[1.2em]">{rank}</span>
              <div className={`${iconSizes[size]}`}>
                <SuitIcon />
              </div>
            </div>
            
            {/* Subtle Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ) : (
          /* Card Back Pattern */
          <div className="w-full h-full bg-red-900 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'radial-gradient(circle, #ffb700 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
             </div>
             <div className="absolute inset-0 border-4 border-white/20 rounded-lg m-1"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500 font-serif font-bold text-3xl opacity-50">B</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PlayingCard;