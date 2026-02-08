
import { DaySchedule, PricingPlan } from './types';

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    day: 'Lunes',
    classes: [
      { name: 'Natación Adultos', time: '08:00', category: 'Agua' },
      { name: 'Zumba', time: '10:00', category: 'Sala' },
      { name: 'Pilates', time: '12:00', category: 'Zen' },
      { name: 'Cross-Training', time: '18:00', category: 'Intenso' },
      { name: 'Aquagym', time: '19:30', category: 'Agua' },
    ]
  },
  {
    day: 'Martes',
    classes: [
      { name: 'Spinning', time: '09:00', category: 'Sala' },
      { name: 'Yoga', time: '11:00', category: 'Zen' },
      { name: 'Body Pump', time: '14:00', category: 'Intenso' },
      { name: 'Natación Libre', time: '17:00', category: 'Agua' },
      { name: 'Baile Latino', time: '20:00', category: 'Sala' },
    ]
  },
  {
    day: 'Miércoles',
    classes: [
      { name: 'Mantenimiento', time: '08:30', category: 'Sala' },
      { name: 'Aquafit', time: '10:30', category: 'Agua' },
      { name: 'HIIT', time: '13:30', category: 'Intenso' },
      { name: 'Pilates Máquinas', time: '18:30', category: 'Zen' },
      { name: 'Zumba Night', time: '21:00', category: 'Sala' },
    ]
  },
  {
    day: 'Jueves',
    classes: [
      { name: 'Natación Técnica', time: '07:30', category: 'Agua' },
      { name: 'Estiramientos', time: '09:30', category: 'Zen' },
      { name: 'Combat', time: '17:30', category: 'Intenso' },
      { name: 'Spinning', time: '19:00', category: 'Sala' },
      { name: 'Aquagym', time: '20:15', category: 'Agua' },
    ]
  },
  {
    day: 'Viernes',
    classes: [
      { name: 'Yoga Vinyasa', time: '10:00', category: 'Zen' },
      { name: 'Circuito Agua', time: '12:00', category: 'Agua' },
      { name: 'GAP', time: '15:00', category: 'Sala' },
      { name: 'Boxeo Gym', time: '18:00', category: 'Intenso' },
      { name: 'Relax Estiramientos', time: '19:30', category: 'Zen' },
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Plan Mañanas',
    price: '29,90€',
    period: 'al mes',
    features: ['Acceso hasta las 14:00', 'Sala Fitness completa', 'Piscina libre', 'App móvil incluida'],
  },
  {
    name: 'Plan Total',
    price: '44,50€',
    period: 'al mes',
    features: ['Acceso ilimitado 24/7', 'Todas las clases dirigidas', 'Acceso a Spa y Sauna', 'Piscina ilimitada', 'Entrenador personal (1 sesión/mes)'],
    popular: true,
  },
  {
    name: 'Plan Familiar',
    price: '79,00€',
    period: 'al mes',
    features: ['Pareja + 2 hijos < 16 años', 'Ludoteca incluida', 'Piscina familiar', 'Descuento en cursos'],
  }
];
