"use client";

import { BarChart3, LineChart, PieChart, Users2, Tv, Play, Smartphone, Check, TrendingUp, Sparkles, MonitorPlay, Activity, DollarSign, Wallet, CreditCard, LayoutDashboard, Settings, MessageSquare } from "lucide-react";

{/* 1. MOCKUP HOME - TV OVERLAPPED WITH CRM SAAS */}
export function MockupHome() {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center p-4 md:p-10 perspective-[2000px]">
      
      {/* Background Smart TV (Streaming Side) */}
      <div className="w-full md:w-[85%] ml-auto aspect-video rounded-xl md:rounded-[2rem] border-[4px] md:border-[12px] border-[#111] bg-black shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:scale-[1.01] transform rotate-[-2deg] translate-x-4 md:translate-x-10">
        <div className="absolute top-0 right-[-20%] bottom-0 left-[20%] bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none transform -skew-x-12 z-50 mix-blend-screen" />
        <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/30 to-black mix-blend-screen" />
             <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-orange-600/20 blur-[100px] rounded-full" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
             <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col p-4 md:p-8">
            <div className="flex items-center gap-6 mb-auto opacity-70">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                 <MonitorPlay size={14} className="text-white" />
              </span>
              <div className="gap-6 hidden md:flex items-center text-xs font-bold tracking-widest text-white/60">
                <span className="text-white">MOVIES</span>
                <span>SERIES</span>
                <span>LIVE</span>
              </div>
            </div>
            <div className="max-w-[70%] mb-10">
              <div className="h-8 md:h-12 w-[80%] bg-white rounded-lg shadow-lg mb-4" />
              <div className="h-3 md:h-4 w-[60%] bg-white/40 rounded-full mb-6" />
              <div className="px-6 py-2 md:py-3 w-max bg-white text-black font-black text-xs md:text-sm rounded-full flex items-center gap-2">
                <Play size={14} className="fill-black" /> Assista Agora
              </div>
            </div>
            <div className="flex gap-4 overflow-hidden mt-auto">
               {[ "from-blue-900 to-black", "from-red-900 to-black", "from-emerald-900 to-black", "from-amber-900 to-black"].map((gradient, i) => (
                 <div key={i} className={`aspect-[2/3] w-24 md:w-36 rounded-lg bg-gradient-to-br ${gradient} border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent flex items-end p-2 md:p-3">
                      <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                         <div className="h-full bg-orange-brand" style={{ width: `${[45, 78, 32, 60][i]}%` }} />
                      </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Foreground SaaS Dashboard (CRM Side) */}
      <div className="absolute left-0 lg:left-10 bottom-[-5%] w-[85%] md:w-[60%] rounded-2xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_40px_rgba(249,115,22,0.15)] overflow-hidden aspect-[4/3] md:aspect-video flex flex-col z-30 transform rotate-[2deg] hover:rotate-0 transition-transform duration-700">
        <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
           <div className="flex gap-4 items-center">
             <div className="h-4 w-4 rounded-md bg-orange-brand/80" />
             <div className="h-3 w-16 bg-white/30 rounded-full" />
             <div className="h-3 w-16 bg-white/10 rounded-full hidden sm:block" />
             <div className="h-3 w-16 bg-white/10 rounded-full hidden sm:block" />
           </div>
           <div className="h-5 w-5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
           <div className="flex gap-4">
             <div className="flex-1 p-3 md:p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3"><Users2 size={16} className="text-orange-400" /></div>
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider mb-2">Clientes Ativos</div>
                <div className="text-xl md:text-3xl font-black text-white">1,204</div>
             </div>
             <div className="flex-1 p-3 md:p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3"><Wallet size={16} className="text-green-400" /></div>
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider mb-2">MRR</div>
                <div className="text-xl md:text-3xl font-black text-white">€ 34k</div>
             </div>
           </div>
           <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="h-3 w-24 bg-white/30 rounded-full" />
                <div className="h-3 w-12 bg-orange-brand/50 rounded-full" />
              </div>
              <div className="flex-1 flex items-end gap-2">
                 {[30, 45, 25, 60, 50, 80, 65, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-orange-brand/50 to-orange-brand/10 rounded-sm" style={{ height: `${h}%` }} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

{/* 2. MOCKUP TV (B2C) - SMART TV + SMARTPHONE */}
export function MockupTV() {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center p-4 md:p-10 perspective-[2000px]">
      <div className="relative w-full aspect-video rounded-xl md:rounded-[2rem] border-[4px] md:border-[12px] border-[#111] bg-black shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:scale-[1.01]">
        <div className="absolute top-0 right-[-20%] bottom-0 left-[20%] bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none transform -skew-x-12 z-50 mix-blend-screen" />
        
        <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/30 to-black mix-blend-screen" />
             <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-orange-600/20 blur-[100px] rounded-full" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
             <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
             <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col p-4 md:p-8 lg:p-12">
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

            <div className="max-w-[70%] lg:max-w-[50%] mb-4 md:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/5 backdrop-blur-md mb-4 md:mb-6">
                <Sparkles size={12} className="text-orange-400" />
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest leading-none mt-0.5">Premium Original</span>
              </div>
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

            <div className="flex flex-col gap-3 md:gap-4 flex-1 justify-end">
               <div className="flex items-center gap-2 mb-1">
                 <TrendingUp size={16} className="text-orange-brand" />
                 <span className="text-xs md:text-sm font-bold text-white tracking-wide">Continue Assistindo</span>
               </div>
               <div className="flex gap-3 md:gap-4 overflow-hidden">
                 {[ "from-blue-900 to-black", "from-red-900 to-black", "from-emerald-900 to-black", "from-amber-900 to-black", "from-fuchsia-900 to-black", "from-cyan-900 to-black" ].map((gradient, i) => (
                   <div key={i} className={`aspect-[2/3] w-24 md:w-40 xl:w-48 flex-shrink-0 rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/30 transition-colors`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[8px] font-bold text-white border border-white/10">EP 0{i+1}</div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent flex items-end p-2 md:p-3">
                        <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-brand" style={{ width: `${[35, 82, 45, 68, 24, 75][i]}%` }} />
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
        <div className="absolute top-0 inset-x-0 h-5 md:h-7 bg-[#161616] rounded-b-2xl z-50 flex justify-center w-[45%] mx-auto" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-40 transform rotate-45" />

        <div className="flex flex-col h-full bg-[#050505] p-3 md:p-4">
          <div className="h-24 md:h-40 w-full rounded-2xl bg-gradient-to-br from-indigo-900 to-black overflow-hidden relative mb-4 md:mb-6 border border-white/10 shadow-lg mt-6 text-center flex flex-col justify-end p-3 md:p-4">
             <div className="absolute top-0 right-[-20%] w-[150%] h-[150%] bg-pink-600/20 blur-[40px] rounded-full pointer-events-none mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
             <div className="h-6 md:h-10 w-6 md:w-10 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10 mx-auto mb-2 md:mb-3">
                <Play size={12} className="fill-black ml-0.5 md:hidden" />
                <Play size={16} className="fill-black ml-0.5 hidden md:block" />
             </div>
             <div className="h-2 md:h-3 w-3/4 bg-white/90 rounded-full mx-auto relative z-10" />
          </div>
          <div className="flex items-center gap-2 mb-2 md:mb-3">
             <div className="h-2.5 md:h-3 w-20 md:w-24 bg-white/70 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-gradient-to-br from-emerald-900 to-black border border-white/10 shadow-inner" />
            <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-gradient-to-br from-red-900 to-black border border-white/10 shadow-inner" />
          </div>
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

{/* 3. MOCKUP CRM (B2B) - FULL SAAS PLATFORM */}
export function MockupDashboard() {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-[#080808]/90 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(249,115,22,0.1)] overflow-hidden aspect-[4/3] md:aspect-video flex flex-col group">
      
      {/* Abstract Glows */}
      <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[100%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* Top Navbar */}
      <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between bg-white/[0.02] relative z-20">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
          </div>
          <div className="h-5 w-24 bg-white/10 rounded-md hidden sm:block" />
        </div>
        <div className="flex gap-4 items-center">
           <div className="h-8 w-48 bg-white/5 border border-white/10 rounded-full hidden md:block" />
           <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
             <span className="text-[10px] font-bold text-white">AD</span>
           </div>
        </div>
      </div>
      
      <div className="flex flex-1 relative z-10 overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 md:w-64 border-r border-white/10 bg-[#050505]/50 flex flex-col justify-between py-6">
          <div className="flex flex-col gap-2 px-4">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-brand/10 border border-orange-brand/20 text-orange-brand">
               <LayoutDashboard size={20} />
               <div className="h-3 w-20 bg-orange-brand/50 rounded-full hidden md:block" />
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/50">
               <Users2 size={20} />
               <div className="h-3 w-24 bg-white/20 rounded-full hidden md:block" />
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/50">
               <CreditCard size={20} />
               <div className="h-3 w-16 bg-white/20 rounded-full hidden md:block" />
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/50">
               <MessageSquare size={20} />
               <div className="h-3 w-20 bg-white/20 rounded-full hidden md:block" />
             </div>
          </div>
          <div className="px-4">
             <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/50">
               <Settings size={20} />
               <div className="h-3 w-20 bg-white/20 rounded-full hidden md:block" />
             </div>
          </div>
        </div>

        {/* Work Area */}
        <div className="flex-1 p-6 md:p-8 flex flex-col gap-8 overflow-y-auto w-full">
           
           <div className="flex justify-between items-end">
             <div>
               <h2 className="text-xl md:text-3xl font-black text-white mb-2 tracking-tight">Financial Overview</h2>
               <div className="h-3 w-40 bg-white/30 rounded-full" />
             </div>
             <div className="px-4 py-2 rounded-lg bg-orange-brand text-white text-xs md:text-sm font-bold flex items-center gap-2">
               + Novo Atendimento
             </div>
           </div>

           {/* Metrics Row */}
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { icon: Users2, color: "text-blue-400", title: "CLIENTES ATIVOS", value: "3,492", trend: "+12%" },
               { icon: Activity, color: "text-emerald-400", title: "ASSINATURAS", value: "4,102", trend: "+5%" },
               { icon: DollarSign, color: "text-orange-bd", title: "RECEITA MENSAL", value: "€ 42,000", trend: "+18%", main: true },
               { icon: MessageSquare, color: "text-purple-400", title: "TICKETS ABERTOS", value: "14", trend: "-2%" }
             ].map((stat, i) => (
               <div key={i} className={`p-4 md:p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between h-28 md:h-36 ${stat.main ? 'bg-orange-brand/10 border-orange-brand/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]' : 'bg-white/5 border-white/5'}`}>
                  {stat.main && <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/20 blur-2xl" />}
                  <div className="flex justify-between items-start relative z-10">
                    <div className={`text-[10px] md:text-xs font-bold tracking-wider ${stat.main ? 'text-orange-400' : 'text-white/50'}`}>{stat.title}</div>
                    <stat.icon size={16} className={stat.main ? 'text-orange-brand' : stat.color} />
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                    <div className="text-xs font-bold text-green-400">{stat.trend}</div>
                  </div>
               </div>
             ))}
           </div>

           {/* Bottom Row */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-[300px]">
             
             {/* Chart */}
             <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/5 p-6 flex flex-col">
               <div className="mb-6 flex justify-between items-center">
                 <div className="text-sm font-bold text-white/80">Receita Anual</div>
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-orange-brand" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                 </div>
               </div>
               <div className="flex-1 flex items-end gap-2 md:gap-4 border-b border-l border-white/10 pb-4 pl-4">
                  {[20, 35, 30, 50, 45, 60, 55, 80, 75, 90, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 relative group w-full">
                       <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-orange-brand/60 to-transparent rounded-t-sm transition-all duration-300 group-hover:from-orange-brand group-hover:scale-y-105 origin-bottom" style={{ height: `${h}%` }}>
                          <div className="absolute top-0 inset-x-0 h-1 bg-orange-brand" />
                       </div>
                    </div>
                  ))}
               </div>
             </div>

             {/* Table/List */}
             <div className="rounded-2xl bg-white/5 border border-white/5 p-6 flex flex-col">
                <div className="text-sm font-bold text-white/80 mb-6">Status de Faturas</div>
                <div className="flex flex-col gap-4">
                   {[
                     { name: "Carlos Silva", num: "#FT-492", status: "Pago", c: "bg-green-500/20 text-green-400 border-green-500/20" },
                     { name: "Maria Garcia", num: "#FT-491", status: "Pendente", c: "bg-yellow-500/20 text-yellow-400 border-yellow-500/20" },
                     { name: "João Santos", num: "#FT-490", status: "Pago", c: "bg-green-500/20 text-green-400 border-green-500/20" },
                     { name: "Ana Martinez", num: "#FT-489", status: "Atrasado", c: "bg-red-500/20 text-red-400 border-red-500/20" },
                     { name: "João Santos", num: "#FT-490", status: "Pago", c: "bg-green-500/20 text-green-400 border-green-500/20" }
                   ].map((t, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-white/10" />
                         <div>
                           <div className="text-sm font-bold text-white/90">{t.name}</div>
                           <div className="text-[10px] text-white/40">{t.num}</div>
                         </div>
                       </div>
                       <div className={`px-3 py-1 rounded-full text-[10px] font-bold border ${t.c}`}>
                          {t.status}
                       </div>
                     </div>
                   ))}
                </div>
             </div>
           </div>

        </div>
      </div>

    </div>
  );
}
