
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=2000" 
          alt="Gimnasio Moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mq-blue/90 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Mucho más que <br /> <span className="text-mq-orange">entrenamiento.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-100 font-light">
          Disfruta de nuestras instalaciones de última generación, piscinas climatizadas y el mejor ambiente de Vigo para alcanzar tus metas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-mq-orange hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1">
            Prueba un día gratis
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-2 border-white/50 text-lg font-bold px-8 py-4 rounded-xl transition-all">
            Ver Instalaciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
