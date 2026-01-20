
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import TrainCard from './components/TrainCard';
import Footer from './components/Footer';
// Icons from lucide-react library
import { Filter, SlidersHorizontal, ArrowUp, Info, ChevronDown, Activity, Globe, Shield, Check, Users, Smartphone, Coffee, Award, Briefcase, Zap, MapPin } from 'lucide-react';
import { mockTrains } from './data/trains';

const App: React.FC = () => {
  // ===== STATE VARIABLES =====

  // Show/hide scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // User's filter choices
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]); // Selected train classes
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]); // Selected departure times
  const [sortBy, setSortBy] = useState<'optimized' | 'credits' | 'timeline'>('optimized'); // How to sort results
  const [searchParams, setSearchParams] = useState({ from: '', to: '', date: '' }); // Search criteria
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // Show/hide filter panel

  // ===== SCROLL TO TOP EFFECT =====
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===== FILTER HELPER FUNCTIONS =====

  // Add or remove a train class from filter
  const toggleClass = (className: string) => {
    setSelectedClasses(prev =>
      prev.includes(className)
        ? prev.filter(c => c !== className)
        : [...prev, className]
    );
  };

  // Add or remove a time slot from filter
  const toggleTimeSlot = (timeSlot: string) => {
    setSelectedTimeSlots(prev =>
      prev.includes(timeSlot)
        ? prev.filter(t => t !== timeSlot)
        : [...prev, timeSlot]
    );
  };

  // Clear all filters
  const resetFilters = () => {
    setSelectedClasses([]);
    setSelectedTimeSlots([]);
    setSearchParams({ from: '', to: '', date: '' });
    setSortBy('optimized');
  };

  // ===== MAIN FILTER FUNCTION - Filters and sorts trains =====
  const getFilteredTrains = () => {
    let filtered = [...mockTrains]; // Start with all trains

    // STEP 1: Filter by route (from station -> to station)
    if (searchParams.from && searchParams.to) {
      filtered = filtered.filter(train =>
        train.fromCode === searchParams.from && train.toCode === searchParams.to
      );
    }

    // STEP 2: Filter by train class (AC, Sleeper, etc)
    if (selectedClasses.length > 0) {
      filtered = filtered.filter(train =>
        train.classes.some(cls => {
          const className = cls.class.toString();
          return selectedClasses.some(selected =>
            className.toLowerCase().includes(selected.toLowerCase()) ||
            selected.toLowerCase().includes(className.toLowerCase())
          );
        })
      );
    }

    // STEP 3: Filter by departure time (morning, afternoon, evening, night)
    if (selectedTimeSlots.length > 0) {
      filtered = filtered.filter(train => {
        const depHour = parseInt(train.departure.split(':')[0]);
        return selectedTimeSlots.some(slot => {
          switch (slot) {
            case '00-06h': return depHour >= 0 && depHour < 6; // Night
            case '06-12h': return depHour >= 6 && depHour < 12; // Morning
            case '12-18h': return depHour >= 12 && depHour < 18; // Afternoon
            case '18-24h': return depHour >= 18 && depHour < 24; // Evening
            default: return false;
          }
        });
      });
    }

    // STEP 4: Sort the filtered trains
    switch (sortBy) {
      case 'optimized':
        // Sort by journey duration (shortest first)
        filtered.sort((a, b) => {
          const aDur = parseInt(a.duration.split('h')[0]);
          const bDur = parseInt(b.duration.split('h')[0]);
          return aDur - bDur;
        });
        break;
      case 'credits':
        // Sort by price (cheapest first)
        filtered.sort((a, b) => {
          const aMin = Math.min(...a.classes.map(c => c.fare));
          const bMin = Math.min(...b.classes.map(c => c.fare));
          return aMin - bMin;
        });
        break;
      case 'timeline':
        // Sort by departure time (earliest first)
        filtered.sort((a, b) => {
          const aTime = parseInt(a.departure.replace(':', ''));
          const bTime = parseInt(b.departure.replace(':', ''));
          return aTime - bTime;
        });
        break;
    }

    return filtered;
  };

  const filteredTrains = getFilteredTrains();

  return (
    <div className="min-h-screen relative font-inter selection:bg-cyan-500 selection:text-black">
      <Header />


      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[650px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Hero Train Image Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617] z-10"></div>
          <img
            src="/vande-bharat-train.png"
            alt="Background"
            className="w-full h-full object-cover object-center blur-sm scale-110"
          />
        </div>

        {/* Static Translucent Train Image */}
        <div className="absolute inset-0 z-5 opacity-20 pointer-events-none select-none">
          <img
            src="/vande-bharat-train.png"
            alt="Vande Bharat Overlay"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-in fade-in zoom-in duration-1000 relative z-20 px-4">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/5 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/10 mb-6 sm:mb-8 backdrop-blur-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,242,255,1)]"></div>
            <span className="text-[8px] sm:text-[10px] font-black text-slate-300 tracking-[0.2em] sm:tracking-[0.4em] uppercase">System Online</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-6 lg:mb-8 font-outfit tracking-tighter leading-tight px-2">
            THE FUTURE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 neon-text-blue">
              INDIAN SPEED
            </span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed opacity-90 px-2">
            Ultra-responsive booking engine paired with the elegance of India's flagship Vande Bharat Express.
          </p>

          {/* Futuristic Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-3xl mx-auto">
            {[
              { label: 'Max Speed', value: '180', unit: 'KM/H', color: 'cyan' },
              { label: 'Routes', value: '50+', unit: 'ACTIVE', color: 'orange' },
              { label: 'Uptime', value: '99.9', unit: '%', color: 'blue' }
            ].map((stat) => (
              <div key={stat.label} className={`glass p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-${stat.color}-500/30 transition-all group`}>
                <div className={`text-2xl sm:text-3xl font-black text-${stat.color}-400 font-outfit`}>{stat.value}</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-widest mt-1">{stat.unit}</div>
                <div className="text-[7px] sm:text-[8px] text-slate-600 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10"></div>
      </section>

      {/* Search Component */}
      <SearchForm onSearch={setSearchParams} />

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 relative z-10">
        {/* Mobile Filter Toggle Button */}
        <div className="xl:hidden mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">
            Available Trains <span className="text-cyan-500">({String(filteredTrains.length).padStart(2, '0')})</span>
          </h2>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs font-black uppercase tracking-widest transition-all"
          >
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12">

          {/* Sidebar Filters */}
          <aside className={`xl:w-80 shrink-0 ${isFiltersOpen ? 'block' : 'hidden'} xl:block`}>
            <div className="glass sticky top-24 xl:top-36 rounded-[24px] sm:rounded-[36px] overflow-hidden p-1 shadow-2xl neon-border">
              <div className="bg-[#020617]/90 rounded-[35px] p-8">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] flex items-center">
                    <SlidersHorizontal className="w-4 h-4 mr-3 text-cyan-400" />
                    Filters
                  </h3>
                  <button
                    onClick={resetFilters}
                    className="text-[9px] font-black text-cyan-500 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Class Type</h4>
                    <div className="space-y-4">
                      {['AC First Class', 'AC 2 Tier', 'AC 3 Tier', 'Sleeper', 'Vande Bharat EC'].map((cls) => (
                        <label key={cls} className="flex items-center space-x-4 cursor-pointer group">
                          <div className="relative w-5 h-5 flex items-center justify-center">
                            <input
                              type="checkbox"
                              className="peer absolute inset-0 opacity-0 cursor-pointer z-10"
                              checked={selectedClasses.includes(cls)}
                              onChange={() => toggleClass(cls)}
                            />
                            <div className="w-full h-full border border-white/20 rounded-md bg-white/5 peer-checked:bg-cyan-500 peer-checked:border-cyan-400 transition-all"></div>
                            <Check className="w-3 h-3 text-black font-black hidden peer-checked:block absolute z-10 pointer-events-none" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{cls}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Departure Time</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['00-06h', '06-12h', '12-18h', '18-24h'].map((time) => (
                        <button
                          key={time}
                          onClick={() => toggleTimeSlot(time)}
                          className={`px-3 py-3 rounded-xl border text-[10px] font-bold transition-all uppercase tracking-widest
                              ${selectedTimeSlots.includes(time)
                              ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_15px_rgba(0,242,255,0.3)]'
                              : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10 hover:text-white hover:border-white/20'
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4">
                      <Activity className="w-6 h-6 text-cyan-500" />
                      <div>
                        <div className="text-[10px] font-black text-white">SYSTEM STATUS</div>
                        <div className="text-[9px] text-slate-500 uppercase">ONLINE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results List */}
          <div className="flex-1 min-w-0">
            {/* Sort & Info Bar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
              <div className="space-y-2 w-full lg:w-auto">
                <h2 className="text-2xl sm:text-3xl font-black text-white font-outfit tracking-tight">
                  Available Trains <span className="text-cyan-500">({String(filteredTrains.length).padStart(2, '0')})</span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                  <span className="flex items-center text-cyan-400"><Globe className="w-3 h-3 mr-1 sm:mr-2" /> NDLS</span>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span>Varanasi</span>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <span className="text-slate-300">15 Dec 2024</span>
                </div>
              </div>
              <div className="flex items-center bg-white/5 p-1 sm:p-2 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-md w-full lg:w-auto">
                <button
                  onClick={() => setSortBy('optimized')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all
                      ${sortBy === 'optimized'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  Recommended
                </button>
                <button
                  onClick={() => setSortBy('credits')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all
                      ${sortBy === 'credits'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  Price
                </button>
                <button
                  onClick={() => setSortBy('timeline')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all
                      ${sortBy === 'timeline'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  Departure
                </button>
              </div>
            </div>

            {/* Train Cards */}
            <div className="space-y-4">
              {filteredTrains.length > 0 ? (
                filteredTrains.map((train) => (
                  <TrainCard key={train.id} train={train} />
                ))
              ) : (
                <div className="p-8 sm:p-12 lg:p-16 glass rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] text-center border-2 border-dashed border-white/10">
                  <div className="max-w-md mx-auto">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Filter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 font-outfit tracking-tight">No Trains Found</h3>
                    <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6 font-medium leading-relaxed px-2">
                      No trains match your current filter criteria. Try adjusting your filters or reset to see all available options.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-cyan-500 text-black rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:shadow-[0_15px_35px_rgba(0,242,255,0.3)] transition-all"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* IRCTC Nexus Hub - Information Section */}
            <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
              <div className="glass rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border border-white/10 relative p-6 sm:p-8 lg:p-12">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] -mr-32 sm:-mr-48 -mt-32 sm:-mt-48 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-[100px] -ml-32 sm:-ml-48 -mb-32 sm:-mb-48 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
                    <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                      <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
                        <span className="text-[9px] sm:text-[10px] font-black text-slate-300 tracking-[0.2em] sm:tracking-[0.3em] uppercase">System Overview</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-outfit leading-tight tracking-tighter">
                        IRCTC <span className="text-cyan-400">NEXT</span> <br />
                        <span className="text-slate-500">GENERATION</span>
                      </h3>

                      <p className="text-slate-400 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
                        As the digital backbone of Indian Railways, IRCTC orchestrates one of the world's largest e-commerce platforms, processing millions of requests with millisecond precision.
                      </p>

                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-black rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_10px_20px_rgba(0,242,255,0.2)]">
                          Explore Official Portal
                        </button>
                        {/* <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                            Investor Relations
                          </button> */}
                      </div>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { label: 'Daily Bookings', value: '1.5M+', icon: <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />, sub: 'Real-time Processed' },
                        { label: 'Network Coverage', value: '68K+', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />, sub: 'Kilometers of Track' },
                        { label: 'Annual Users', value: '800M+', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />, sub: 'Active Travelers' },
                        { label: 'Stations Hub', value: '7,300+', icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />, sub: 'Direct Connections' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:border-white/20 transition-all group">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 bg-white/5 rounded-xl sm:rounded-2xl group-hover:bg-white/10 transition-colors">
                              {stat.icon}
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-white font-outfit">{stat.value}</div>
                          <div className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                          <div className="text-[7px] sm:text-[8px] text-slate-600 font-medium uppercase mt-2">{stat.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { title: 'E-Ticketing', desc: 'Fast and easy ticket booking system.', icon: <Smartphone className="text-cyan-400" /> },
                  { title: 'Catering', desc: 'Delicious meals served centrally.', icon: <Coffee className="text-orange-400" /> },
                  { title: 'Tourism', desc: 'Special tourist trains and packages.', icon: <Award className="text-purple-400" /> },
                  { title: 'Logistics', desc: 'Reliable transport services.', icon: <Briefcase className="text-emerald-400" /> }
                ].map((cap, i) => (
                  <div key={i} className="glass p-8 rounded-[32px] border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                      {React.cloneElement(cap.icon as React.ReactElement, { size: 64 })}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                        {cap.icon}
                      </div>
                      <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3">{cap.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Connection Bar */}
      <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 py-4 sm:py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="text-white text-xs sm:text-sm font-bold tracking-wide text-center">Get Connected with us on social networks</span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3b5998] hover:bg-[#2d4373] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] hover:bg-[#cc0000] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-80 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077b5] hover:bg-[#005885] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0088cc] hover:bg-[#006699] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E60023] hover:bg-[#ad081b] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href="https://tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#35465C] hover:bg-[#2a3749] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Tumblr"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z" />
                </svg>
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFC00] hover:bg-[#e6e300] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Snapchat"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.06-1.274.135-.209.043-.391.074-.554.074-.27 0-.449-.149-.524-.405-.06-.193-.12-.374-.149-.553-.029-.18-.088-.494-.148-.584-1.874-.27-2.391-.688-2.632-1.273-.029-.104-.044-.178-.044-.27.015-.224.18-.449.419-.494 3.28-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#0d8bd9] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Futuristic Floating UI */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 flex flex-col space-y-3 sm:space-y-4 lg:space-y-6 z-40">
        <button className="p-3 sm:p-4 lg:p-5 vande-bharat-orange text-white rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(255,153,51,0.4)] hover:scale-110 transition-all active:scale-95 group" title="Tactical View">
          <Navigation className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:rotate-45 transition-transform duration-500" />
        </button>
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 sm:p-4 lg:p-5 bg-white/5 text-white rounded-xl sm:rounded-2xl shadow-2xl hover:bg-white/10 transition-all active:scale-95 border border-white/10 backdrop-blur-lg"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Terminal Display Controls */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 hidden xl:block z-40">
        <div className="glass p-4 rounded-3xl flex items-center space-x-6 shadow-2xl border border-white/10 bg-[#020617]/50">
          <div className="flex space-x-3">
            <button className="w-9 h-9 rounded-xl bg-cyan-500 text-black flex items-center justify-center text-[11px] font-black">CRT</button>
            <button className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center text-[11px] font-black">HUD</button>
          </div>
          <div className="h-6 w-[1px] bg-white/10"></div>
          <div className="text-[10px] font-black text-slate-500 tracking-[0.2em] flex flex-col">
            <span>DISPLAY MODE</span>
            <span className="text-cyan-400">HIGH CONTRAST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shims
const Navigation = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default App;
