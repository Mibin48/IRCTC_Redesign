
import React, { useState } from 'react';
import { Clock, Navigation, Calendar, Info, ShieldCheck, Wifi, Coffee, Star, ChevronDown, ChevronUp, MapPin, Zap, Loader2, Check } from 'lucide-react';
import { Train } from '../types';

interface TrainCardProps {
  train: Train;
}

const TrainCard: React.FC<TrainCardProps> = ({ train }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCheckingFare, setIsCheckingFare] = useState(false);
  const [isBooking, setIsBooking] = useState(false); // Used for loading state of final confirm
  const [fareChecked, setFareChecked] = useState(false);
  const [booked, setBooked] = useState(false);

  // Seat Selection State
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  // Mock Seat Data (generated once)
  const [seats] = useState(() => Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    status: Math.random() > 0.7 ? 'booked' : 'available' as 'available' | 'booked'
  })));

  const getStatusStyle = (type: string) => {
    switch (type) {
      case 'green': return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]';
      case 'yellow': return 'text-amber-400 border-amber-500/30 bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]';
      case 'red': return 'text-rose-400 border-rose-500/30 bg-rose-500/5 shadow-[0_0_15px_rgba(244,63,94,0.1)]';
      default: return 'text-slate-400 border-white/10 bg-white/5';
    }
  };

  const isVandeBharat = train.name.includes('VANDE BHARAT');

  const handleCheckFare = () => {
    setIsCheckingFare(true);
    setTimeout(() => {
      console.log('💰 Checking fare for:', train.name, train.number);
      setIsCheckingFare(false);
      setFareChecked(true);
      setTimeout(() => setFareChecked(false), 2000);
    }, 1000);
  };

  // Open Seat Modal
  const openSeatSelection = () => {
    setIsSeatModalOpen(true);
  };

  const toggleSeat = (seatId: number) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(prev => prev.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length < 6) {
        setSelectedSeats(prev => [...prev, seatId]);
      }
    }
  };

  const confirmBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      console.log('🎫 Booking confirmed for seats:', selectedSeats);
      setIsBooking(false);
      setIsSeatModalOpen(false);
      setBooked(true);
      setTimeout(() => setBooked(false), 3000);
    }, 1500);
  };

  return (
    <>
      <div className={`mb-8 rounded-[32px] overflow-hidden transition-all duration-500 group relative
        ${isVandeBharat ? 'ring-2 ring-orange-500/30 shadow-[0_20px_60px_rgba(255,153,51,0.1)]' : 'hover:ring-1 hover:ring-white/20'}`}>

        {/* High-tech glow background for Vande Bharat */}
        {isVandeBharat && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[60px] rounded-full pointer-events-none"></div>
        )}

        <div className={`glass border-none p-4 sm:p-6 lg:p-8 relative ${isVandeBharat ? 'bg-black/40' : 'bg-white/5'}`}>
          {/* Header: Train Number & Name */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6 sm:mb-8 lg:mb-10 gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 w-full xl:w-auto">
              <div className="flex items-center space-x-3 sm:space-x-5 w-full sm:w-auto">
                <div className={`px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] border shadow-lg
                  ${isVandeBharat ? 'bg-orange-500 border-orange-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}>
                  {train.number}
                </div>
                <div className="space-y-1 flex-1 sm:flex-initial">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-black font-outfit tracking-tight ${isVandeBharat ? 'text-orange-400 neon-text-orange' : 'text-white'}`}>
                    {train.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                    <span className="flex items-center"><Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 text-cyan-400" /> High Priority</span>
                    <span className="w-1 h-1 bg-slate-700 rounded-full hidden sm:inline"></span>
                    <span className="flex items-center text-emerald-400">On Time</span>
                  </div>
                </div>
              </div>
              {isVandeBharat && (
                <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/10 text-[8px] sm:text-[9px] font-black text-orange-400 uppercase tracking-widest flex items-center">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 fill-orange-400" /> 5-STAR SERVICE
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 justify-center sm:justify-start">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                const isActive = train.runsOn.includes(day);
                return (
                  <div
                    key={i}
                    className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] font-bold border transition-all duration-300
                      ${isActive ? 'bg-cyan-500 text-black border-cyan-400 font-black shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'bg-white/5 text-slate-600 border-white/5'}`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schedule Visualization */}
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-6 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-10 lg:mb-12">
            <div className="xl:col-span-2 space-y-2 text-center xl:text-left">
              <div className="text-3xl sm:text-4xl font-black text-white font-space tracking-tight">{train.departure}</div>
              <div className="flex items-center justify-center xl:justify-start text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2 text-cyan-400" /> {train.from} ({train.fromCode})
              </div>
            </div>

            <div className="xl:col-span-3 px-4 sm:px-6 lg:px-10 relative order-3 xl:order-2">
              <div className="hidden xl:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scanline h-full w-[200px]" style={{ animation: 'scan 2s linear infinite' }}></div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="bg-[#020617] px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-black text-white rounded-full border border-white/10 shadow-xl z-10 flex items-center">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2 text-cyan-400" />
                  {train.duration}
                </div>
                <div className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] p-2 rounded-full border border-white/5">
                  <Navigation className="w-5 h-5 text-cyan-400 rotate-90 drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                </div>
              </div>
            </div>

            <div className="xl:col-span-2 text-center xl:text-right space-y-2 order-2 xl:order-3">
              <div className="text-3xl sm:text-4xl font-black text-white font-space tracking-tight">{train.arrival}</div>
              <div className="flex items-center justify-center xl:justify-end text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                {train.to} ({train.toCode}) <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 sm:ml-2 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Dynamic Class Grid with Interactive Holographic Effect */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 lg:mb-10">
            {train.classes.map((cls, idx) => (
              <button
                key={idx}
                className={`p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl border text-left transition-all hover:scale-[1.03] active:scale-95 group relative overflow-hidden
                  ${getStatusStyle(cls.type)}`}
              >
                <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-60 mb-2 sm:mb-3">{cls.class}</div>
                <div className="text-xs sm:text-sm font-black mb-1 sm:mb-1.5 tracking-tight text-white">{cls.status}</div>
                <div className="text-base sm:text-lg font-black font-space">₹{cls.fare.toLocaleString()}</div>

                {/* Micro-interaction lines */}
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <div className="w-2 h-2 border-t border-r border-white"></div>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-full transition-all duration-300 opacity-30
                  ${cls.type === 'green' ? 'bg-emerald-400' : cls.type === 'yellow' ? 'bg-amber-400' : 'bg-rose-400'}`}></div>
              </button>
            ))}
          </div>

          {/* Card Footer Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 sm:pt-8 border-t border-white/10 gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 w-full sm:w-auto">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center text-[9px] sm:text-[10px] font-black text-cyan-400 hover:text-white transition-all uppercase tracking-[0.2em] sm:tracking-[0.25em] group"
              >
                {isExpanded ? <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> : <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />}
                <span className="border-b border-cyan-400/30 group-hover:border-white">Details & Intel</span>
              </button>
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                {train.amenities.map(amenity => (
                  <div key={amenity} className="p-2 sm:p-2.5 bg-white/5 rounded-lg sm:rounded-xl text-slate-500 hover:text-cyan-400 hover:bg-white/10 transition-all cursor-help border border-white/5" title={amenity}>
                    {amenity === 'Wi-Fi' && <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {amenity === 'Catering' && <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {amenity === 'Bio Toilet' && <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {amenity === 'CCTV' && <Info className="w-3 h-3 sm:w-4 sm:h-4" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 w-full sm:w-auto">
              <button
                onClick={handleCheckFare}
                disabled={isCheckingFare}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-slate-300 text-[9px] sm:text-[10px] font-black rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-all uppercase tracking-[0.15em] sm:tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isCheckingFare ? (
                  <><Loader2 className="w-3 h-3 animate-spin" /> <span>LOADING...</span></>
                ) : fareChecked ? (
                  <><Check className="w-3 h-3" /> <span>CHECKED</span></>
                ) : (
                  <span>CHECK FARE</span>
                )}
              </button>
              <button
                onClick={openSeatSelection}
                disabled={booked}
                className="relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 vande-bharat-orange text-white text-[9px] sm:text-[10px] font-black rounded-xl sm:rounded-2xl hover:shadow-[0_15px_35px_rgba(255,153,51,0.3)] hover:scale-[1.02] transition-all uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center space-x-2"
              >
                {booked && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse"></div>
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  {booked ? (
                    <><Check className="w-3 h-3" /> <span>BOOKED!</span></>
                  ) : (
                    <span>SELECT SEATS</span>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Expanded HUD Info */}
          {isExpanded && (
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-dashed border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                <div className="lg:col-span-2">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Orbital Route Matrix
                  </h4>
                  <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                    {[
                      { station: `${train.from} (${train.fromCode})`, arrival: '--:--', departure: train.departure, status: 'Source' },
                      { station: 'Technical Halt', arrival: '10:10', departure: '10:12', status: 'Hub' },
                      { station: `${train.to} (${train.toCode})`, arrival: train.arrival, departure: '--:--', status: 'Terminal' }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center justify-between pl-6 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#020617] border-2 border-cyan-500 rounded-full z-10"></div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-white tracking-wider">{step.station}</span>
                          <span className="text-[9px] font-bold text-slate-500 uppercase">{step.status}</span>
                        </div>
                        <div className="text-[10px] font-black text-slate-400 font-space">
                          ARR: <span className="text-white">{step.arrival}</span> | DEP: <span className="text-white">{step.departure}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
                  <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4">Refund Policy V2.5</h4>
                  <div className="space-y-4 text-[11px] text-slate-400 leading-relaxed font-medium">
                    <p className="flex items-start"><span className="text-orange-500 mr-2">01</span> Instant credits for T-48h cancellations. Standard deduction of ₹240 applies.</p>
                    <p className="flex items-start"><span className="text-orange-500 mr-2">02</span> Dynamic pricing protection: 50% refund for T-12h to T-4h window.</p>
                    <p className="flex items-start"><span className="text-orange-500 mr-2">03</span> Automated PNR liquidation after chart preparation if not confirmed.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Decorative side element */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      {/* Seat Selection Modal */}
      {isSeatModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => !isBooking && setIsSeatModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-4xl bg-[#0a1020] border border-white/10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-[0_0_100px_rgba(0,242,255,0.1)] animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
              <div>
                <h2 className="text-2xl font-black text-white font-outfit uppercase tracking-wider mb-2">Select Seats</h2>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
                  <span className="text-cyan-400">{train.name}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{train.number}</span>
                </div>
              </div>
              <button
                onClick={() => setIsSeatModalOpen(false)}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              >
                <div className="w-5 h-5 flex items-center justify-center font-bold">✕</div>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 overflow-hidden h-full">
              {/* Coach View */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/5 relative">
                  {/* Driver/Engine Direction Indicator */}
                  <div className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] sm:text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    Coach C7
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {seats.map((seat) => (
                      <button
                        key={seat.id}
                        disabled={seat.status === 'booked'}
                        onClick={() => toggleSeat(seat.id)}
                        className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all relative group
                          ${seat.status === 'booked'
                            ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-white/5'
                            : selectedSeats.includes(seat.id)
                              ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,242,255,0.5)] scale-105 z-10'
                              : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                          }`}
                      >
                        {seat.id}
                        {/* Selection glow */}
                        {selectedSeats.includes(seat.id) && (
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400">
                      <div className="w-3 h-3 rounded bg-white/5 border border-white/10"></div> Available
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400">
                      <div className="w-3 h-3 rounded bg-slate-800/50 border border-white/5"></div> Booked
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-cyan-400">
                      <div className="w-3 h-3 rounded bg-cyan-500 shadow-[0_0_10px_rgba(0,242,255,0.4)]"></div> Selected
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Summary Sidebar */}
              <div className="w-full lg:w-80 flex flex-col bg-black/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/5">
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">Booking Summary</h3>

                <div className="space-y-4 flex-1">
                  {selectedSeats.length > 0 ? (
                    selectedSeats.map(seat => (
                      <div key={seat} className="flex justify-between items-center pb-3 border-b border-white/5 animate-in slide-in-from-left-2">
                        <span className="text-xs font-bold text-slate-400">Seat {seat}</span>
                        <span className="text-xs font-black text-white font-space">₹1,750</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10 text-slate-600 text-xs font-bold uppercase tracking-wider">
                      No Seats Selected
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400">Base Fare</span>
                    <span className="text-sm font-bold text-white font-space">₹{(selectedSeats.length * 1750).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-400">
                    <span className="text-xs font-bold">Tax & Fees</span>
                    <span className="text-sm font-bold font-space">+₹{(selectedSeats.length * 150).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-sm font-black text-white uppercase tracking-widest">Total</span>
                    <span className="text-xl font-black text-cyan-400 font-space text-shadow-glow">₹{(selectedSeats.length * 1900).toLocaleString()}</span>
                  </div>

                  <button
                    onClick={confirmBooking}
                    disabled={selectedSeats.length === 0 || isBooking}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 rounded-xl text-white font-black tracking-widest text-xs uppercase shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isBooking ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>CONFIRM & PAY</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default TrainCard;
