import React, { useState } from 'react';
import { MapPin, Calendar, Users, ChevronRight, ArrowLeftRight, Check, Info, Search, Loader2, ChevronDown } from 'lucide-react';
import { TrainClass, Quota } from '../types';
import { stations } from '../data/trains';

interface SearchFormProps {
  onSearch?: (searchParams: { from: string; to: string; date: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [from, setFrom] = useState('NDLS');
  const [to, setTo] = useState('BSB');
  const [date, setDate] = useState('2024-12-15');
  const [selectedClass, setSelectedClass] = useState(TrainClass.ALL);
  const [selectedQuota, setSelectedQuota] = useState(Quota.GENERAL);
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);

  // Checkbox states
  const [flexibleDate, setFlexibleDate] = useState(true);
  const [physicallyChallenged, setPhysicallyChallenged] = useState(false);
  const [confirmedBerth, setConfirmedBerth] = useState(false);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchSuccess(false);

    // Simulate search
    setTimeout(() => {
      console.log('🔍 Search Parameters:', {
        from,
        to,
        date,
        class: selectedClass,
        quota: selectedQuota,
        options: {
          flexibleDate,
          physicallyChallenged,
          confirmedBerth
        }
      });

      if (onSearch) {
        onSearch({ from, to, date });
      }

      setIsSearching(false);
      setSearchSuccess(true);

      // Reset success state after animation
      setTimeout(() => setSearchSuccess(false), 2000);
    }, 1500);
  };

  return (
    <div className="relative -mt-12 sm:-mt-16 lg:-mt-24 mx-auto max-w-6xl px-3 sm:px-4 pb-12 sm:pb-16 z-20">
      <div className="glass rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden p-1 neon-border">
        <div className="bg-[#020617]/80 rounded-[23px] sm:rounded-[31px] lg:rounded-[39px] p-4 sm:p-6 lg:p-8 xl:p-12 relative overflow-hidden">
          {/* Subtle Background Circuit Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M10,10 L90,10 L90,90 L10,90 Z M20,20 L80,20 M20,40 L80,40 M20,60 L80,60 M20,80 L80,80" fill="none" stroke="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-end">

            {/* From Station */}
            <div className="lg:col-span-3 space-y-2 sm:space-y-3 group">
              <label className="text-[9px] sm:text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-2 neon-text-blue">Departure Hub</label>
              <div className="relative">
                <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-cyan-400 z-10 pointer-events-none">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-slate-500 z-10 pointer-events-none group-hover:text-cyan-400 transition-colors">
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full appearance-none pl-10 sm:pl-14 pr-8 sm:pr-10 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 rounded-xl sm:rounded-2xl text-white font-bold text-xs sm:text-sm outline-none transition-all cursor-pointer hover:bg-white/10 font-space"
                >
                  {stations.map((station) => (
                    <option key={`from-${station.code}`} value={station.code} className="bg-[#020617] text-white py-2">
                      {station.name} ({station.code})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pb-3">
              <button
                onClick={handleSwap}
                className="p-4 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all hover:rotate-180 duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)] active:scale-95"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Swap Button */}
            <div className="lg:hidden flex justify-center -mt-2 mb-2">
              <button
                onClick={handleSwap}
                className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all hover:rotate-180 duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)] active:scale-95"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* To Station */}
            <div className="lg:col-span-3 space-y-2 sm:space-y-3 group">
              <label className="text-[9px] sm:text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-2 neon-text-orange">Destination</label>
              <div className="relative">
                <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-orange-500 z-10 pointer-events-none">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-slate-500 z-10 pointer-events-none group-hover:text-orange-400 transition-colors">
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full appearance-none pl-10 sm:pl-14 pr-8 sm:pr-10 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/10 focus:border-orange-500/50 focus:bg-white/10 rounded-xl sm:rounded-2xl text-white font-bold text-xs sm:text-sm outline-none transition-all cursor-pointer hover:bg-white/10 font-space"
                >
                  {stations.map((station) => (
                    <option key={`to-${station.code}`} value={station.code} className="bg-[#020617] text-white py-2">
                      {station.name} ({station.code})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Selection */}
            <div className="lg:col-span-3 space-y-2 sm:space-y-3 group">
              <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-2">Travel Date</label>
              <div className="relative">
                <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-slate-500 z-10 pointer-events-none group-hover:text-white transition-colors">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 rounded-xl sm:rounded-2xl text-white font-bold text-xs sm:text-sm outline-none transition-all cursor-pointer font-space [color-scheme:dark] h-[48px] sm:h-[56px] lg:h-[62px]"
                />
              </div>
            </div>

            {/* Enhanced Search Button */}
            <div className="lg:col-span-2">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="relative w-full h-[48px] sm:h-[56px] lg:h-[62px] vande-bharat-orange hover:scale-[1.02] active:scale-95 text-white font-black rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 transition-all group shadow-[0_15px_40px_rgba(255,153,51,0.3)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Animated Background Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                {/* Search Button Content */}
                <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  {isSearching ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span className="tracking-widest text-[10px] sm:text-xs">SCANNING...</span>
                    </>
                  ) : searchSuccess ? (
                    <>
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="tracking-widest text-[10px] sm:text-xs">FOUND!</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                      <span className="tracking-widest text-[10px] sm:text-xs">SEARCH</span>
                    </>
                  )}
                </div>

                {/* Success Particle Effect */}
                {searchSuccess && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-20px)`,
                          animationDelay: `${i * 50}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 lg:pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2 sm:space-y-3 group">
              <label className="text-[8px] sm:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1">Class Configuration</label>
              <div className="relative">
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-hover:text-white transition-colors">
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <select
                  className="w-full appearance-none pl-4 sm:pl-6 pr-8 sm:pr-10 py-3 sm:py-4 bg-white/5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-white outline-none border border-white/10 cursor-pointer focus:border-cyan-500/30 transition-all hover:bg-white/10"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value as TrainClass)}
                >
                  {Object.values(TrainClass).map(c => <option key={c} value={c} className="bg-[#020617] text-white">{c}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 group">
              <label className="text-[8px] sm:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1">Reservation Quota</label>
              <div className="relative">
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-hover:text-white transition-colors">
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <select
                  className="w-full appearance-none pl-4 sm:pl-6 pr-8 sm:pr-10 py-3 sm:py-4 bg-white/5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-white outline-none border border-white/10 cursor-pointer focus:border-cyan-500/30 transition-all hover:bg-white/10"
                  value={selectedQuota}
                  onChange={(e) => setSelectedQuota(e.target.value as Quota)}
                >
                  {Object.values(Quota).map(q => <option key={q} value={q} className="bg-[#020617] text-white">{q}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:col-span-2 pt-4 sm:pt-6">
              {[
                { label: 'Flexible with Date', active: flexibleDate, setter: setFlexibleDate },
                { label: 'Physically Challenged', active: physicallyChallenged, setter: setPhysicallyChallenged },
                { label: 'Confirmed Berth', active: confirmedBerth, setter: setConfirmedBerth }
              ].map(item => (
                <label key={item.label} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={item.active}
                    onChange={(e) => item.setter(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-300 pointer-events-none
                      ${item.active ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(0,242,255,0.4)]' : 'border-white/20 group-hover:border-white/40 bg-white/5'}`}
                  >
                    {item.active && <Check className="w-3 h-3 text-black font-bold" />}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${item.active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Status Display */}
      <div className="mt-4 sm:mt-6 flex items-center justify-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] space-x-2 sm:space-x-3 text-slate-500 px-4 text-center">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></div>
        <span>Vande Bharat Express (22436) Active on Selected Vector</span>
      </div>
    </div>
  );
};

export default SearchForm;
