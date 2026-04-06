"use client";

import { BarChart3, LineChart, PieChart, Users2, Tv, Play, Smartphone, Check, TrendingUp, Sparkles, MonitorPlay } from "lucide-react";

export function MockupDashboard() {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-video group">
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />
      
      {/* Top Bar */}
      <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02] relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="h-4 w-32 bg-white/5 rounded-full" />
      </div>
      
      {/* Sidebar & Content */}
      <div className="flex h-[calc(100%-3rem)] relative z-10">
        {/* Sidebar */}
        <div className="w-32 md:w-48 border-r border-white/5 p-4 flex flex-col gap-3">
          <div className="h-8 w-full bg-white/10 rounded-lg mb-4" />
          <div className="h-6 w-3/4 bg-white/5 rounded-md" />
          <div className="h-6 w-full bg-white/5 rounded-md" />
          <div className="h-6 w-5/6 bg-orange-brand/20 rounded-md border border-orange-brand/30" />
          <div className="h-6 w-full bg-white/5 rounded-md" />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white/80 font-medium">Visão Operacional</h3>
            <div className="h-8 w-24 bg-orange-brand/20 border border-orange-brand/30 rounded-lg flex items-center justify-center">
              <div className="h-2 w-16 bg-orange-brand/50 rounded-full" />
            </div>
          </div>
          
          {/* Mini Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[Users2, BarChart3, LineChart].map((Icon, i) => (
              <div key={i} className={`bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 ${i === 2 ? 'hidden md:flex' : ''}`}>
                <Icon size={20} className="text-orange-brand" />
                <div className="h-6 w-16 bg-white/20 rounded mt-2" />
                <div className="h-3 w-10 bg-green-500/50 rounded" />
              </div>
            ))}
          </div>
          
          {/* Chart Area */}
          <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex items-end gap-2 overflow-hidden">
            {[40, 25, 60, 45, 80, 50, 70, 90, 65, 40, 85, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-orange-brand/40 to-transparent rounded-t-sm relative group-hover:from-orange-brand/60 transition-colors duration-500" style={{ height: `${h}%` }}>
                <div className="absolute top-0 inset-x-0 h-1 bg-orange-brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockupTV() {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center p-4 md:p-10 perspective-[2000px]">
      
      {/* Smart TV Mockup */}
      <div className="relative w-full aspect-video rounded-xl md:rounded-[2rem] border-[4px] md:border-[12px] border-[#111] bg-black shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:scale-[1.01]">
        {/* Screen Glare */}
        <div className="absolute top-0 right-[-20%] bottom-0 left-[20%] bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none transform -skew-x-12 z-50 mix-blend-screen" />
        
        <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
          {/* Abstract Movie Poster Background */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/30 to-black mix-blend-screen" />
             <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-orange-600/20 blur-[100px] rounded-full" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
             <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
             <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          </div>

          {/* Premium UI Layer */}
          <div className="absolute inset-0 z-20 flex flex-col p-4 md:p-8 lg:p-12">
            
            {/* Top Navigation */}
            <div className="flex justify-between items-center opacity-80 mb-6 md:mb-auto">
              <div className="flex gap-6 items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                   <MonitorPlay size={14} className="text-white" />
                </span>
                <div className="gap-6 hidden md:flex items-center text-xs font-bold tracking-widest text-white/60">
                  <span className="text-white">MOVIES</span>
                  <span>SERIES</span>
                  <span>LIVE</span>
                  <span>SPORTS</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-20 bg-white/10 rounded-full border border-white/10" />
                <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md" />
              </div>
            </div>

            {/* Featured Hero Content */}
            <div className="max-w-[70%] lg:max-w-[50%] mb-4 md:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/5 backdrop-blur-md mb-4 md:mb-6">
                <Sparkles size={12} className="text-orange-400" />
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest leading-none mt-0.5">Premium Original</span>
              </div>
              {/* Title Abstract */}
              <div className="space-y-3 mb-6 md:mb-8">
                 <div className="h-8 md:h-14 w-[90%] bg-white rounded-lg shadow-lg" />
                 <div className="h-8 md:h-14 w-[60%] bg-white rounded-lg shadow-lg" />
              </div>
              <div className="h-3 md:h-4 w-[100%] bg-white/40 rounded-full mb-3" />
              <div className="h-3 md:h-4 w-[85%] bg-white/40 rounded-full mb-8 hidden sm:block" />
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-black text-xs md:text-sm rounded-full flex items-center gap-2 hover:scale-105 transition-transform cursor-default shadow-xl">
                  <Play size={14} className="fill-black" /> Assista Agora
                </div>
                <div className="px-6 py-3 md:px-8 md:py-4 bg-white/10 border border-white/20 text-white font-bold text-xs md:text-sm rounded-full backdrop-blur-md hover:bg-white/20 transition-colors cursor-default hidden sm:flex">
                  Mais Informações
                </div>
              </div>
            </div>

            {/* Content Carousels Row */}
            <div className="flex flex-col gap-3 md:gap-4 flex-1 justify-end">
               <div className="flex items-center gap-2 mb-1">
                 <TrendingUp size={16} className="text-orange-brand" />
                 <span className="text-xs md:text-sm font-bold text-white tracking-wide">Continue Assistindo</span>
               </div>
               <div className="flex gap-3 md:gap-4 overflow-hidden">
                 {/* Movie Poster Cards */}
                 {[
                   "from-blue-900 to-black",
                   "from-red-900 to-black",
                   "from-emerald-900 to-black",
                   "from-amber-900 to-black",
                   "from-fuchsia-900 to-black",
                   "from-cyan-900 to-black"
                 ].map((gradient, i) => (
                   <div key={i} className={`aspect-[2/3] w-24 md:w-40 xl:w-48 flex-shrink-0 rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/30 transition-colors`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[8px] font-bold text-white border border-white/10">EP 0{i+1}</div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent flex items-end p-2 md:p-3">
                        <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-brand" style={{ width: `${Math.random() * 60 + 20}%` }} />
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile App Sync Mockup */}
      <div className="absolute -right-2 md:-right-8 -bottom-6 md:-bottom-12 w-28 md:w-56 aspect-[9/19] rounded-[2rem] md:rounded-[3rem] border-[6px] md:border-[10px] border-[#161616] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(249,115,22,0.1)] z-30 overflow-hidden transform rotate-12 hover:rotate-6 transition-all duration-700 translate-y-4 md:translate-y-0">
        {/* iPhone Island/Notch */}
        <div className="absolute top-0 inset-x-0 h-5 md:h-7 bg-[#161616] rounded-b-2xl z-50 flex justify-center w-[45%] mx-auto" />
        
        {/* Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-40 transform rotate-45" />

        <div className="flex flex-col h-full bg-[#050505] p-3 md:p-4">
          {/* Mobile Hero */}
          <div className="h-24 md:h-40 w-full rounded-2xl bg-gradient-to-br from-indigo-900 to-black overflow-hidden relative mb-4 md:mb-6 border border-white/10 shadow-lg mt-6 text-center flex flex-col justify-end p-3 md:p-4">
             <div className="absolute top-0 right-[-20%] w-[150%] h-[150%] bg-pink-600/20 blur-[40px] rounded-full pointer-events-none mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
             
             <div className="h-6 md:h-10 w-6 md:w-10 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10 mx-auto mb-2 md:mb-3">
                <Play size={12} className="fill-black ml-0.5 md:hidden" />
                <Play size={16} className="fill-black ml-0.5 hidden md:block" />
             </div>
             
             <div className="h-2 md:h-3 w-3/4 bg-white/90 rounded-full mx-auto relative z-10" />
             <div className="h-1.5 md:h-2 w-1/2 bg-white/50 rounded-full mx-auto relative z-10 mt-1 md:mt-2" />
          </div>
          
          {/* Mobile List Row 1 */}
          <div className="flex items-center gap-2 mb-2 md:mb-3">
             <div className="h-2.5 md:h-3 w-20 md:w-24 bg-white/70 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-gradient-to-br from-emerald-900 to-black border border-white/10 shadow-inner" />
            <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-gradient-to-br from-red-900 to-black border border-white/10 shadow-inner" />
          </div>

          {/* Mobile List Row 2 */}
          <div className="h-2.5 md:h-3 w-24 md:w-32 bg-white/40 rounded-full mb-3 md:mb-4" />
          <div className="h-12 md:h-20 w-full rounded-lg md:rounded-xl bg-white/5 border border-white/5 flex items-center p-3 gap-3">
             <div className="h-8 w-8 md:h-12 md:w-12 bg-white/10 rounded-lg shrink-0" />
             <div className="flex-1 space-y-2">
                <div className="h-2 w-full bg-white/40 rounded-full" />
                <div className="h-2 w-2/3 bg-white/20 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
