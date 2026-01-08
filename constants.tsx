
import React from 'react';
import { 
  Zap, 
  Layout, 
  Target, 
  Building2, 
  Rocket, 
  Palette, 
  TrendingUp, 
  ShieldCheck,
  Code2,
  Globe,
  Cpu,
  FastForward
} from 'lucide-react';
import { ServiceCard, Project, Testimonial, TechItem } from './types';

export const SERVICES: ServiceCard[] = [
  {
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas focadas em transformar visitantes em leads e clientes com copywriting persuasivo.',
    icon: <Target className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Sites One Page',
    description: 'Experiências fluidas e modernas em uma única página para uma navegação ágil e direta.',
    icon: <Layout className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'Páginas para Anúncios',
    description: 'Otimização máxima para tráfego pago (Meta Ads, Google Ads) garantindo o melhor ROI.',
    icon: <Zap className="w-8 h-8 text-green-400" />
  },
  {
    title: 'Sites Institucionais',
    description: 'Presença digital sólida para empresas que buscam credibilidade e autoridade no mercado.',
    icon: <Building2 className="w-8 h-8 text-blue-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Flash LavaCar',
    description: 'Plataforma de IA com interface futurista e conversão de 14%.',
    image: 'https://i.ibb.co/JjGRRnCf/lavacar.png',
    tag: '',
    link: '/projeto/quantum'
  },
  {
    id: '2',
    name: 'Fruits',
    description: 'Landing page para painéis solares focada em leads qualificados.',
    image: 'https://i.ibb.co/d0qJsRcN/fruta.png',
    tag: '',
    link: '/projeto/ecoenergy'
  },
  {
    id: '3',
    name: 'TTW Transportes',
    description: 'Site One Page para estúdio de Yoga com agendamento direto.',
    image: 'https://i.ibb.co/cRnG3qF/transporte-ok2.png',
    tag: '',
    link: '/projeto/fitflow'
  },
  {
    id: '4',
    name: 'Nova Bank',
    description: 'Fintech moderna com foco em experiência de usuário mobile-first.',
    image: 'https://picsum.photos/seed/bank/800/600',
    tag: '',
    link: '/projeto/novabank'
  }
];

export const DIFFERENTIATORS = [
  {
    title: 'Performance',
    description: 'Sites que carregam instantaneamente em qualquer dispositivo.',
    icon: <FastForward className="w-6 h-6" />
  },
  {
    title: 'Design Moderno',
    description: 'Estética futurista que destaca sua marca da concorrência.',
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: 'Foco em Vendas',
    description: 'Cada pixel é planejado para induzir a ação do usuário.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: 'SEO & Responsivo',
    description: 'Sua página pronta para os motores de busca e todos os tamanhos de tela.',
    icon: <Globe className="w-6 h-6" />
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React 18', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Framer Motion', icon: <Zap className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <ShieldCheck className="w-5 h-5" /> }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ricardo Silva',
    role: 'CEO na TechFuture',
    content: 'A PageNext transformou nossa presença digital. Nossa taxa de conversão subiu 40% em apenas um mês.',
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    name: 'Mariana Costa',
    role: 'Marketing Manager na Soluções Criativas',
    content: 'O design é simplesmente incrível. Recebemos elogios constantes dos nossos clientes sobre a fluidez do site.',
    avatar: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    name: 'André Lopes',
    role: 'Fundador da Alpha Fitness',
    content: 'Agilidade e qualidade impecáveis. O processo de criação foi rápido e o resultado superou as expectativas.',
    avatar: 'https://i.pravatar.cc/150?u=andre'
  }
];
