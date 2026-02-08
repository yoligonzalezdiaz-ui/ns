
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="cuotas" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Cuotas</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu ritmo de vida. Sin permanencia y con la mejor tecnología fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-2 flex flex-col h-full ${
                plan.popular ? 'border-4 border-mq-blue ring-4 ring-mq-blue/10' : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-mq-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-mq-blue">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-gray-600">
                    <svg className="h-5 w-5 text-mq-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
                plan.popular 
                  ? 'bg-mq-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-gray-100 text-mq-blue hover:bg-gray-200'
              }`}>
                Empezar Ahora
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-500 text-sm">
          * Matrícula promocional de 15€ aplicada a nuevas altas online. Sujeto a condiciones del centro.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
