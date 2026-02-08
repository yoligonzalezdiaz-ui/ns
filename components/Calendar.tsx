
import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { ClassItem } from '../types';

const Calendar: React.FC = () => {
  const [activeDay, setActiveDay] = useState(SCHEDULE_DATA[0].day);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Agua': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Sala': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Zen': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intenso': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const selectedDayData = SCHEDULE_DATA.find(d => d.day === activeDay);

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Horario de Actividades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Planifica tu semana con nuestras clases dirigidas. Disponemos de más de 100 horas semanales de actividades para todos los niveles.
          </p>
        </div>

        {/* Mobile Day Selector */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:justify-center scrollbar-hide">
          {SCHEDULE_DATA.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeDay === day.day
                  ? 'bg-mq-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {/* Desktop and Tablet Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedDayData?.classes.map((cls, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
            >
              <div>
                <span className="text-gray-400 text-sm font-semibold mb-1 block">{cls.time}</span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-mq-blue transition-colors">{cls.name}</h3>
              </div>
              <span className={`px-4 py-1 rounded-full text-xs font-bold border ${getCategoryColor(cls.category)}`}>
                {cls.category}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-3xl flex flex-wrap justify-center gap-6 border border-gray-100">
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400"></div> <span className="text-sm font-medium text-gray-600">Actividades Agua</span></div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-400"></div> <span className="text-sm font-medium text-gray-600">Sala / Coreografiadas</span></div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400"></div> <span className="text-sm font-medium text-gray-600">Cuerpo / Mente</span></div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div> <span className="text-sm font-medium text-gray-600">Alta Intensidad</span></div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
