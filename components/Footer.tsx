
import React from 'react';
import { Phone, Mail, Smartphone } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020617] text-slate-400 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <img src="/logo-irctc.png" className="w-full h-full object-contain" alt="IRCTC" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-tighter text-base sm:text-lg leading-none">IRCTC</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-cyan-500 tracking-[0.15em] sm:tracking-[0.2em] uppercase">NexGen 4.0</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium max-w-xs">
              Pioneering the future of Indian high-speed rail travel with quantum-encrypted ticketing and AI-driven logistics.
            </p>
          </div>

          <div>
            <h4 className="flex items-center text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              <span className="w-4 sm:w-6 h-[2px] bg-cyan-500 mr-2 sm:mr-3"></span>
              Navigation Matrix
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
              {['Book Ticket', 'PNR Status', 'Cancel Ticket', 'Track Train', 'Food on Track'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full mr-2 sm:mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                    <span className="group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              <span className="w-4 sm:w-6 h-[2px] bg-orange-500 mr-2 sm:mr-3"></span>
              Legal Protocols
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
              {['Privacy Policy', 'Terms & Conditions', 'Refund Rules', 'Grievance Redressal'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full mr-2 sm:mr-3 group-hover:bg-orange-400 transition-colors"></span>
                    <span className="group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              <span className="w-4 sm:w-6 h-[2px] bg-blue-500 mr-2 sm:mr-3"></span>
              Comms Channels
            </h4>
            <ul className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
              <li className="flex items-start space-x-3 group cursor-pointer">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Helpline</span>
                  <span className="text-slate-300 group-hover:text-white transition-colors">14646 (24x7)</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Support</span>
                  <span className="text-slate-300 group-hover:text-white transition-colors">care@irctc.co.in</span>
                </div>
              </li>

              <li className="pt-4">
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex items-center justify-center space-x-2 transition-all group">
                    <Smartphone className="w-4 h-5 text-slate-400 group-hover:text-white" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Get it on</span>
                      <span className="text-[10px] text-slate-300 font-black group-hover:text-white">Google Play</span>
                    </div>
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex items-center justify-center space-x-2 transition-all group">
                    <Smartphone className="w-4 h-5 text-slate-400 group-hover:text-white" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Download on</span>
                      <span className="text-[10px] text-slate-300 font-black group-hover:text-white">App Store</span>
                    </div>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-600 text-center sm:text-left">
            © 2024 IRCTC NexGen eTicketing System.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></div> System Operational</span>
            <span className="hidden sm:inline">|</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Security Audit Passed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
