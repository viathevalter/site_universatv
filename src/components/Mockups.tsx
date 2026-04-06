"use client";

import { BarChart3, LineChart, PieChart, Users2, Tv, Play, Smartphone } from "lucide-react";

export function MockupDashboard() {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-video">
      {/* Top Bar */}
      <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="h-4 w-32 bg-white/5 rounded-full" />
      </div>
      
      {/* Sidebar & Content */}
      <div className="flex h-[calc(100%-3rem)]">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/5 p-4 flex flex-col gap-3">
          <div className="h-8 w-full bg-white/10 rounded-lg mb-4" />
          <div className="h-6 w-3/4 bg-white/5 rounded-md" />
          <div className="h-6 w-full bg-white/5 rounded-md" />
          <div className="h-6 w-5/6 bg-orange-brand/20 rounded-md" />
          <div className="h-6 w-full bg-white/5 rounded-md" />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white/80 font-medium">Dashboard Overview</h3>
            <div className="h-8 w-24 bg-orange-brand/20 border border-orange-brand/30 rounded-lg" />
          </div>
          
          {/* Mini Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[Users2, BarChart3, LineChart].map((Icon, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                <Icon size={20} className="text-orange-brand" />
                <div className="h-6 w-16 bg-white/20 rounded mt-2" />
                <div className="h-3 w-10 bg-green-500/50 rounded" />
              </div>
            ))}
          </div>
          
          {/* Chart Area */}
          <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex items-end gap-2">
            {[40, 25, 60, 45, 80, 50, 70, 90, 65].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-orange-brand/40 to-transparent rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockupTV() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg border-8 border-neutral-900 bg-black shadow-2xl overflow-hidden flex flex-col">
      <div className="flex-1 relative bg-gradient-to-br from-neutral-800 to-black overflow-hidden">
        {/* Fake UI */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-4">
          <div className="h-8 w-48 bg-white/20 rounded-lg blur-[2px]" />
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-brand flex items-center justify-center">
              <Play size={20} className="text-white fill-white ml-1" />
            </div>
            <div className="h-10 w-32 bg-white/10 rounded-full backdrop-blur-md" />
          </div>
        </div>
        <div className="absolute top-8 left-8 flex gap-3 z-20 opacity-50">
          <div className="h-4 w-16 bg-white rounded-full" />
          <div className="h-4 w-16 bg-white/30 rounded-full" />
          <div className="h-4 w-16 bg-white/30 rounded-full" />
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-800 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-b-md" />
      </div>
    </div>
  );
}
