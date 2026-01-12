
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
    description: 'Páginas focadas em transformar visitantes em clientes.',
    icon: <Target className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Sites One Page',
    description: 'Experiências fluidas e modernas em uma única página para uma navegação ágil e direta.',
    icon: <Layout className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'Páginas para Anúncios',
    description: 'A página abriga o seu conteúdo, da sua maneira e preferência.Totalmente customizável.',
    icon: <Zap className="w-8 h-8 text-green-400" />
  },
  {
    title: 'Sites Institucionais',
    description: 'Presença digital sólida para empresas, negócios e criadores de conteúdo que buscam credibilidade e autoridade no mercado.',
    icon: <Building2 className="w-8 h-8 text-blue-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Flash LavaCar',
    description: 'Seu carro impecavel no menor tempo.',
    image: 'https://i.ibb.co/JjGRRnCf/lavacar.png',
    tag: '',
    link: 'https://i.ibb.co/JjGRRnCf/lavacar.png'
  },
  {
    id: '2',
    name: 'Fruits',
    description: 'Mercearia com produtos naturais e selecionados.',
    image: 'https://i.ibb.co/d0qJsRcN/fruta.png',
    tag: '',
    link: 'https://i.ibb.co/d0qJsRcN/fruta.png'
  },
  {
    id: '3',
    name: 'TTW Transportes',
    description: 'Soluções completas para a sua Logistica.',
    image: 'https://i.ibb.co/cRnG3qF/transporte-ok2.png',
    tag: '',
    link: 'https://i.ibb.co/cRnG3qF/transporte-ok2.png'
  },
  {
    id: '4',
    name: 'Cont100',
    description: 'Escritorio de Contabilidade.',
    image: 'https://i.ibb.co/FkfpNh0H/cont.png',
    tag: '',
    link: 'https://i.ibb.co/FkfpNh0H/cont.png'
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
    role: 'Sócio',
    content: 'Nossa Parceria com a PageNext teve rendimento logo no primeiro Mês, conseguimos varios novos clientes',
    avatar: 'https://i.ibb.co/Y7CFpsnt/Chat-GPT-Image-11-de-jan-de-2026-15-49-00.jpg'
  },
  {
    name: 'Mariana Costa',
    role: 'marketing',
    content: 'O design é simplesmente incrível. Recebemos elogios constantes dos nossos clientes sobre a fluidez do site.',
    avatar: 'https://i.ibb.co/zhMX36qB/Chat-GPT-Image-11-de-jan-de-2026-15-58-46.png'
  },
  {
    name: 'Andrea Lopes',
    role: 'design',
    content: 'Agilidade e qualidade impecáveis. O processo de criação foi rápido e o resultado superou as nossas expectativas. Aprovado!!1',
    avatar: 'https://i.pravatar.cc/150?u=andre'
  }
];
