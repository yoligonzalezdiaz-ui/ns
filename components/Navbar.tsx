
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-mq-blue h-10 w-10 rounded-full flex items-center justify-center">
                 <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-mq-blue tracking-tight">Máis que Auga</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#horarios" className="text-gray-600 hover:text-mq-blue font-medium transition-colors">Horarios</a>
            <a href="#clases" className="text-gray-600 hover:text-mq-blue font-medium transition-colors">Clases</a>
            <a href="#cuotas" className="text-gray-600 hover:text-mq-blue font-medium transition-colors">Cuotas</a>
            <a href="#contacto" className="bg-mq-orange text-white px-5 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg">Apúntate</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
