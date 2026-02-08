
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calendar from './components/Calendar';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Short Features/Intro Section */}
        <section id="clases" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-mq-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Zona Agua</h3>
                <p className="text-gray-500">Piscinas climatizadas de 25 metros, vasos de aprendizaje y zona de spa termal.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-mq-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Fitness Pro</h3>
                <p className="text-gray-500">Maquinaria de última generación de Technogym para cardio y entrenamiento de fuerza.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Clases Dirigidas</h3>
                <p className="text-gray-500">Zumba, Pilates, Yoga, HIIT y mucho más guiado por los mejores instructores.</p>
              </div>
            </div>
          </div>
        </section>

        <Calendar />
        <Pricing />
        
        {/* Banner call to action */}
        <section className="py-16 bg-mq-blue text-white overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">¿Listo para cambiar tu vida?</h2>
                <p className="text-blue-100 text-lg">Únete hoy y obtén un análisis de composición corporal de regalo.</p>
              </div>
              <button className="bg-white text-mq-blue px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl">
                ¡Empieza hoy mismo!
              </button>
           </div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
