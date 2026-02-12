import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Scale } from 'lucide-react';

const edges = [
  {
    icon: Brain,
    title: "고도의 심리전",
    eng: "Draw & Bluffing",
    desc: "단순히 주어진 패로 승부하는 것이 아니라, 세 번의 카드 교환(Draw) 과정을 통해 상대의 패를 읽고 내 패를 숨기는 고도의 전략적 재미를 제공합니다."
  },
  {
    icon: Zap,
    title: "독보적인 회전율",
    eng: "Speed & Pace",
    desc: "한 판이 완성되는 호흡이 매우 짧아 카지노 내의 그 어떤 테이블 게임보다 빠른 회전율을 자랑하며, 지루함 없는 박진감을 선사합니다."
  },
  {
    icon: TrendingUp,
    title: "낮은 진입장벽과 대중성",
    eng: "Accessibility",
    desc: "'모두 달라야 한다'는 직관적인 룰 덕분에 초보자도 1분이면 규칙을 마스터할 수 있으며, 특히 한국을 포함한 아시아권 고객들에게 압도적인 친숙함을 가집니다."
  },
  {
    icon: Scale,
    title: "균형 잡힌 몰입감",
    eng: "Balance & Atmosphere",
    desc: "플레이어뿐만 아니라 관전자들도 패의 흐름을 쉽게 파악할 수 있어, 테이블 주변에 자연스럽게 구경꾼이 모여드는 '축제 같은 분위기'를 형성합니다."
  }
];

const Slide6Edge: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-12">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
          The <span className="text-gold-gradient">Badugi Edge</span>
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-lg border-b border-gray-700 pb-4 inline-block">
          바둑이만의 독특한 경쟁 우위
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {edges.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/5 hover:border-amber-500/30 hover:bg-gray-900/80 transition-all duration-300 shadow-lg group"
          >
            {/* Icon Column */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-amber-500 group-hover:text-amber-300 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <item.icon className="w-8 h-8" />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-100 transition-colors">
                {item.title}
              </h3>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                {item.eng}
              </span>
              <p className="text-lg text-gray-300 leading-relaxed break-keep">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Decor */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "25%" }}
        transition={{ delay: 1, duration: 1 }}
        className="h-1.5 bg-amber-600/30 mt-16 rounded-full"
      />

    </div>
  );
};

export default Slide6Edge;