import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Coffee, Moon, ArrowRight, Layers } from 'lucide-react';

const steps = [
  {
    icon: Sun,
    title: "아침 (Morning)",
    desc: "1st Draw",
    detail: "카드 배분 후 첫 베팅 및 교환",
    color: "text-amber-300"
  },
  {
    icon: Coffee,
    title: "점심 (Lunch)",
    desc: "2nd Draw",
    detail: "두 번째 베팅 후 전략적 카드 교환",
    color: "text-orange-400"
  },
  {
    icon: Moon,
    title: "저녁 (Dinner)",
    desc: "3rd Draw",
    detail: "마지막 교환과 최종 베팅으로 족보 완성",
    color: "text-indigo-400"
  }
];

const Slide2Flow: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          승부를 결정짓는 <span className="text-gold-gradient">세 번의 기회</span>
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-lg">Three Chances, One Strategy</p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative flex flex-col md:flex-row items-center md:items-stretch justify-center w-full max-w-7xl gap-6 md:gap-10">
        
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 -z-10 transform -translate-y-1/2" />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="relative flex flex-col items-center bg-black/60 border border-white/10 backdrop-blur-md p-8 rounded-2xl w-full flex-1 hover:border-amber-500/50 transition-colors group"
          >
            {/* Icon Wrapper */}
            <div className={`p-5 rounded-full bg-gray-900 border border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <step.icon className={`w-10 h-10 ${step.color}`} />
            </div>
            
            <h3 className={`text-3xl font-bold ${step.color} mb-3`}>{step.title}</h3>
            <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded text-white mb-5">{step.desc}</span>
            <p className="text-center text-gray-200 text-lg leading-relaxed break-keep w-full px-2 font-medium">
              {step.detail}
            </p>
            
            {/* Draw Number Indicator */}
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gray-800 border-2 border-amber-500/30 flex items-center justify-center text-amber-500 font-bold text-xl">
              {idx + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stay Strategy Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-14 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl border-l-8 border-red-500 max-w-3xl w-full shadow-lg flex items-start gap-6"
      >
        <div className="p-4 bg-red-900/20 rounded-lg shrink-0">
          <Layers className="text-red-500 w-8 h-8" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-red-400 mb-2">스테이 (Stay)</h4>
          <p className="text-gray-200 text-lg break-keep leading-relaxed">
            교환 없이 현재 패를 유지하는 전략. 상대방에게 강력한 패를 가지고 있다는 <span className="text-white font-semibold">블러핑(Bluffing)</span> 효과를 주거나, 이미 완성된 메이드(Made) 상태임을 암시하는 고도의 심리전입니다.
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default Slide2Flow;