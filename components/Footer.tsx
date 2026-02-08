
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="bg-mq-blue h-8 w-8 rounded-full flex items-center justify-center">
                 <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Máis que Auga</span>
            </div>
            <p className="text-sm leading-relaxed">
              La red de centros deportivos más completa de Vigo. Piscina, fitness, pádel y bienestar en un solo lugar.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Nuestros Centros</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-mq-orange transition-colors">MQ Navia</a></li>
              <li><a href="#" className="hover:text-mq-orange transition-colors">MQ Barreiro</a></li>
              <li><a href="#" className="hover:text-mq-orange transition-colors">MQ Coia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Vigo, Pontevedra
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +34 986 00 00 00
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@maisqueauga.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">SÍGUENOS</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mq-blue transition-colors cursor-pointer">F</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mq-blue transition-colors cursor-pointer">I</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mq-blue transition-colors cursor-pointer">X</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Máis que Auga - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
