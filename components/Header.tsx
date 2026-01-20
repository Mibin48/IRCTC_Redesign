
import React, { useState } from 'react';
import { User, Menu, ChevronDown, Bell, Search, LogIn, Calendar, MapPin, Bus, Plane, Hotel, HelpCircle, X, Shield, Lock, Mail, Fingerprint, Loader2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Register State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regAadhaar, setRegAadhaar] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate login
    setTimeout(() => {
      setIsProcessing(false);
      setIsLoginOpen(false);
      setUsername('');
      setPassword('');
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate complex registration with biometric verification
    setTimeout(() => {
      setIsProcessing(false);
      setIsRegisterOpen(false);
      // Reset form
      setRegName('');
      setRegEmail('');
      setRegPassword('');
      setRegAadhaar('');
    }, 2500);
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  {/* Holographic Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-2xl rounded-full scale-100 group-hover:scale-150 transition-all duration-700 animate-pulse-glow"></div>

                  {/* Particle Effects */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                  </div>

                  {/* IRCTC Logo with 3D Transform */}
                  <img
                    src="/logo-irctc.png"
                    alt="IRCTC Logo"
                    className="h-12 sm:h-16 lg:h-20 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))' }}
                  />

                  {/* Futuristic Ring Effect */}
                  <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-full scale-110 group-hover:scale-125 transition-all duration-700"></div>
                </div>
                <div className="ml-2 sm:ml-3 lg:ml-5 border-l border-white/10 pl-2 sm:pl-3 lg:pl-5">
                  <h1 className="text-white font-black text-lg sm:text-xl lg:text-2xl leading-none font-outfit uppercase tracking-[0.1em] sm:tracking-[0.15em] neon-text-blue">
                    NexGen
                  </h1>
                  <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-0.5 sm:mt-1 opacity-80">Indian Railways</p>
                </div>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden xl:flex space-x-10 items-center">
              {[
                { label: 'TRAINS', icon: MapPin, active: true },
                { label: 'BUSES', icon: Bus },
                { label: 'FLIGHTS', icon: Plane },
                { label: 'HOTELS', icon: Hotel },
                { label: 'HOLIDAYS', icon: Calendar }
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center space-x-2 text-[11px] font-black tracking-widest transition-all hover:scale-105
                    ${item.active ? 'text-cyan-400 neon-text-blue border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white'}`}
                >
                  <item.icon className={`w-4 h-4 ${item.active ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden sm:flex items-center space-x-2 lg:space-x-3 bg-white/5 hover:bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl text-white text-[10px] sm:text-xs font-black tracking-widest transition-all border border-white/10 group active:scale-95"
              >
                <LogIn className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="hidden lg:inline">LOGIN</span>
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="hidden sm:block vande-bharat-orange text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black tracking-widest hover:shadow-[0_0_25px_rgba(255,153,51,0.4)] transition-all active:scale-95 shadow-lg"
              >
                <span className="hidden lg:inline">REGISTER</span>
                <span className="lg:hidden">REG</span>
              </button>
              <button className="p-2 sm:p-3 text-slate-400 hover:text-white transition-colors xl:hidden">
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* HUD Sub-Bar */}
        <div className="bg-black/40 border-t border-white/5 py-2 sm:py-3 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-8 items-center">
              <div className="flex items-center text-cyan-400/80 animate-pulse">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-1.5 sm:mr-2 shadow-[0_0_8px_rgba(0,242,255,1)]"></div>
                <span className="hidden sm:inline">SYSTEM ONLINE</span>
                <span className="sm:hidden">ONLINE</span>
              </div>
              <a href="#" className="hover:text-cyan-400 transition-colors hidden md:inline">PNR Status</a>
              <a href="#" className="hover:text-cyan-400 transition-colors hidden lg:inline">Train Schedule</a>
              <a href="#" className="hover:text-orange-400 transition-colors flex items-center">
                <span className="mr-1 hidden sm:inline">Vande Bharat</span>
                <span className="sm:hidden">VB</span>
                <div className="w-1 h-1 bg-orange-500 rounded-full animate-ping ml-1"></div>
              </a>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <span className="flex items-center hover:text-white cursor-pointer transition-colors text-[9px] sm:text-[10px]"><Bell className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2" /> <span className="hidden sm:inline">2 New Alerts</span><span className="sm:hidden">2</span></span>
              <div className="h-3 w-[1px] bg-white/10 hidden sm:block"></div>
              <span className="flex items-center hover:text-white cursor-pointer transition-colors text-[9px] sm:text-[10px]">EN <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" /></span>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setIsLoginOpen(false)}
          ></div>

          <div className="relative w-full max-w-md bg-[#0a1020] border border-white/10 rounded-[20px] sm:rounded-[30px] p-6 sm:p-8 shadow-[0_0_100px_rgba(0,242,255,0.1)] animate-in zoom-in-95 duration-300 overflow-hidden mx-4">
            {/* Modal Decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 mb-4 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] mb-2 font-outfit">Secure Login</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">IRCTC User Access</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.3em] ml-2">User ID</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-600"
                    placeholder="ENTER USER ID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.3em] ml-2">Password</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-600"
                    placeholder="PASSWORD"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-400 pt-2">
                <label className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors">
                  <input type="checkbox" className="rounded bg-white/10 border-white/20 text-cyan-500 focus:ring-0 cursor-pointer" />
                  <span>REMEMBER ME</span>
                </label>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">FORGOT PASSWORD?</a>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-black tracking-widest text-xs uppercase shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>VERIFYING...</span>
                  </>
                ) : (
                  <span>ACCESS ACCOUNT</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal Overlay */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setIsRegisterOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg bg-[#0a1020] border border-white/10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-[0_0_100px_rgba(255,153,51,0.1)] animate-in zoom-in-95 duration-300 overflow-hidden mx-4">
            {/* Modal Decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4 border border-orange-500/20 shadow-[0_0_20px_rgba(255,153,51,0.15)]">
                <User className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] mb-2 font-outfit">New Registration</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Join the Railway Network</p>
            </div>

            <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em] ml-2">Full Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-orange-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-700"
                    placeholder="FULL NAME"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em] ml-2">Email Address</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-orange-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-700"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em] ml-2">Biometric ID (Aadhaar)</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-orange-400 transition-colors">
                    <Fingerprint className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={regAadhaar}
                    onChange={(e) => setRegAadhaar(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-700"
                    placeholder="12-DIGIT UID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em] ml-2">Password</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-orange-400 transition-colors">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm font-bold outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all font-space placeholder:text-slate-700"
                    placeholder="PASSWORD"
                  />
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-2xl text-white font-black tracking-[0.3em] text-xs uppercase shadow-[0_10px_30px_rgba(255,153,51,0.3)] hover:shadow-[0_15px_40px_rgba(255,153,51,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>REGISTERING...</span>
                    </>
                  ) : (
                    <span>CREATE ACCOUNT</span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                By registering, you agree to the IRCTC Rules <br />
                & Data Privacy Terms.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
