import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Instagram,
  Linkedin,
  Github,
  Mail,
  FastForward,
  MessageCircle,
  Loader2,
  CheckCircle2,
  User,
  Phone,
  Briefcase,
  Send
} from 'lucide-react';
import { SERVICES, PROJECTS, DIFFERENTIATORS, TESTIMONIALS, TECH_STACK } from './constants';

// --- CONFIGURAÇÃO EMAILJS ---
const EMAILJS_CONFIG = {
  SERVICE_ID: 'pagenext_smtp',
  TEMPLATE_ID: 'template_wkt14a4',
  PUBLIC_KEY: 'qRAhBX0YxV50Ob6Go'
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // @ts-ignore
    window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    try {
      if (formRef.current) {
        // @ts-ignore
        await window.emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          formRef.current
        );
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative glass w-full max-w-2xl rounded-[3rem] border border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>

        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-white transition-all hover:rotate-90 z-20 bg-white/5 p-2 rounded-full">
          <X size={20} />
        </button>

        <div className="relative z-10 p-8 md:p-14">
          {status === 'success' ? (
            <div className="text-center space-y-8 py-16 animate-in zoom-in-95 duration-500">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-green-500/20">
                  <CheckCircle2 size={48} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black italic tracking-tighter">Proposta Enviada!</h3>
                <p className="text-slate-400 text-lg max-w-sm mx-auto leading-relaxed">
                  Excelente escolha. Nossa equipe de especialistas analisará seus dados e entrará em contato em menos de 24h.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-12 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  Let's Build Something Great
                </div>
                <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none">
                  Inicie sua <span className="text-blue-500">Jornada</span>
                </h3>
                <p className="text-slate-400 font-medium">Conte-nos brevemente sobre seu projeto ideal.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-blue-500">Seu Nome</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required name="user_name" type="text" placeholder="João Silva" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-white placeholder:text-slate-600 font-medium" />
                    </div>
                  </div>
                  <div className="group space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-blue-500">E-mail Profissional</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required name="user_email" type="email" placeholder="nome@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-white placeholder:text-slate-600 font-medium" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-blue-500">WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required name="user_phone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-white placeholder:text-slate-600 font-medium" />
                    </div>
                  </div>
                  <div className="group space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-blue-500">Tipo de Projeto</label>
                    <div className="relative">
                      <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <select name="project_type" className="w-full bg-[#030712] border border-white/10 rounded-2xl pl-12 pr-10 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-white appearance-none font-medium">
                        <option>Landing Page de Alta Conversão</option>
                        <option>Site One Page Corporativo</option>
                        <option>E-commerce / Catálogo Moderno</option>
                        <option>Redesign Estratégico</option>
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 rotate-90 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <button
                  disabled={status === 'loading'}
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-slate-800 disabled:to-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 mt-6"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={24} /> Processando...</>
                  ) : (
                    <>
                      Solicitar Orçamento Exclusivo
                      <Send className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm font-bold bg-red-400/10 p-4 rounded-xl border border-red-400/20 animate-in slide-in-from-top-2">
                    <X size={16} /> Ocorreu uma falha na conexão. Tente novamente em instantes.
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
            <span className="text-white font-black text-xl italic">N</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            PAGE<span className="text-blue-500">NEXT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" onClick={scrollToTop} className="hover:text-blue-400 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
          <a href="#diferenciais" className="hover:text-blue-400 transition-colors">Diferenciais</a>
          <button
            onClick={onOpenContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20 font-bold"
          >
            Começar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass p-6 border-b border-white/10 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#" onClick={scrollToTop} className="text-lg font-bold border-b border-white/5 pb-2">Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-white/5 pb-2">Serviços</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-white/5 pb-2">Portfolio</a>
          <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-white/5 pb-2">Diferenciais</a>
          <button onClick={() => { setIsOpen(false); onOpenContact(); }} className="bg-blue-600 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-blue-600/20">Solicitar Orçamento</button>
        </div>
      )}
    </nav>
  );
};

const WhatsAppFloating = () => (
  <a
    href="https://wa.me/5514998680931?text=Olá!%20Gostaria%20de%20informações%20sobre%20criação%20de%20páginas%20web%20e%20valores."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] group"
  >
    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:animate-none"></div>
    <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all hover:scale-110 active:scale-95">
      <MessageCircle size={32} fill="white" />
    </div>
    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
      Fale Conosco
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
    </div>
  </a>
);

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="text-left space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Futuro da Criação de Paginas WEB
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
          Leve sua presença digital para o <br />
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 italic pr-6 pb-2">próximo nível</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
          Criamos páginas web para empresas, negócios e projetos criativos, focadas em transformar visitantes em clientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl shadow-blue-500/30"
          >
            Criar minha Landing Page <ArrowRight size={20} />
          </button>
          <button

          >

          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium pt-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <img key={i} className="w-10 h-10 rounded-full border-2 border-[#030712]" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
            ))}
          </div>
          <p>+100 negócios impulsionados pela PageNext</p>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          <img
            src="https://i.ibb.co/S4jk6967/image.png"
            alt="Futuristic Interface"
            className="rounded-3xl border border-white/10 shadow-2xl relative z-10 transform skew-x-1"
          />
          <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl border border-white/10 z-20 animate-pulse">
            <div className="text-blue-400 font-bold text-2xl">+245%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Conversão Média</div>
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-white/10 z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <FastForward />
              </div>
              <div>
                <div className="text-white font-bold text-lg">0.8s</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Tempo de Carga</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">Nossas Soluções</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Especialistas em <span className="italic">Crescimento Digital</span>
          </h3>
        </div>
        <p className="text-slate-400 max-w-md text-lg">
          Do planejamento à execução, entregamos páginas que não apenas parecem boas, mas que vendem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl group hover:border-blue-500/30 transition-all hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-blue-500/10">
            <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-blue-500/10 transition-colors shadow-inner">
              {s.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{s.title}</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              {s.description}
            </p>
            <div className="mt-8 flex items-center gap-2 text-blue-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % PROJECTS.length);
  const prev = () => setActive((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  const handleProjectLink = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert("Página do projeto em desenvolvimento.");
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Nossos <span className="text-blue-500">Projetos</span> Recentes</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">Resultados exponenciais entregues para líderes de mercado em diversos setores.</p>
        </div>

        <div className="relative group max-w-10xl mx-auto">
          <div className="flex overflow-hidden rounded-[3rem] shadow-2xl shadow-black/60 border border-white/5">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-full"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {PROJECTS.map((project) => (
                <div key={project.id} className="min-w-full relative h-[600px]">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-10 flex flex-col justify-end">
                    <span className="text-blue-500 font-black text-xs tracking-[0.3em] uppercase mb-4">{project.tag}</span>
                    <h4 className="text-4xl md:text-20xl font-black mb-1 tracking-tighter italic">{project.name}</h4>
                    <p className="text-slate-300 max-w-xl text-lg mb-10 font-medium leading-relaxed">{project.description}</p>
                    <button
                      onClick={() => handleProjectLink(project.link)}
                                                      className="
                                    absolute bottom-10 left-10
                                    bg-white text-black
                                    px-5 py-2
                                    rounded-xl
                                    font-bold text-xs
                                    uppercase tracking-wider
                                    hover:bg-blue-600 hover:text-white
                                    transition-all
                                    active:scale-95
                                    shadow-lg shadow-black/30
                                  "
                    >
                      Ver detalhes
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all z-10 opacity-0 group-hover:opacity-100 shadow-xl">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all z-10 opacity-0 group-hover:opacity-100 shadow-xl">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'bg-blue-500 w-12' : 'bg-white/10 w-4 hover:bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => (
  <section id="diferenciais" className="py-24">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">Por que PageNext?</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter">O que nos torna <br /> <span className="italic">incomparáveis</span></h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass p-8 md:p-14 rounded-[3.5rem] relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="space-y-10 relative z-10">
          <h4 className="text-2xl font-black italic tracking-tighter">Arquitetura de Performance</h4>
          <p className="text-slate-400 font-medium">Utilizamos stack de última geração para garantir que sua landing page seja o motor de crescimento mais eficiente da sua empresa.</p>

          <div className="grid grid-cols-2 gap-4">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 glass p-5 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all hover:bg-white/5 group shadow-sm">
                <div className="text-blue-500 transition-transform group-hover:scale-110">{tech.icon}</div>
                <span className="font-bold text-sm tracking-tight">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Satisfação do Cliente</span>
              <span className="text-sm font-black text-blue-500">99.8%</span>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[99.8%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic">Excelência Validada</h2>
        <p className="text-slate-500 font-medium">O que nossos parceiros de negócio dizem sobre os resultados.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] relative border border-white/5 shadow-xl">
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-blue-500 text-sm">★</span>)}
            </div>
            <p className="text-slate-300 mb-10 italic leading-relaxed font-medium">"{t.content}"</p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-8">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full ring-4 ring-blue-500/10 shadow-lg" />
              <div>
                <h5 className="font-black text-lg tracking-tight">{t.name}</h5>
                <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToAction = ({ onOpenContact }: { onOpenContact: () => void }) => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-600 opacity-5 blur-[180px]"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10 text-center glass p-12 md:p-24 rounded-[4rem] border border-blue-500/20 shadow-[0_0_100px_-30px_rgba(59,130,246,0.4)]">
      <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter italic leading-[1.1]">
        Preparado para o seu <br />
        <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-[12px]">próximo Passo?</span>
      </h2>
      <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
        Vamos juntos dar vida a essa ideia e transformá-la em algo verdadeiramente grandioso.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <button
          onClick={onOpenContact}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95"
        >
          Consultoria
        </button>
        <button
          onClick={onOpenContact}

        >

        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-24 pb-12 border-t border-white/5 bg-black/30 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <span className="text-white font-black text-2xl italic">N</span>
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">
              PAGE<span className="text-blue-500">NEXT</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs">
            Transformamos ideias em experiências digitais que funcionam.
          </p>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500/40 transition-all shadow-inner">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-white">Navegação</h6>
          <ul className="space-y-5 text-sm text-slate-500 font-medium">
            <li><a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços Premium</a></li>
            <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfólio de Elite</a></li>
            <li><a href="#diferenciais" className="hover:text-blue-500 transition-colors">Diferenciais</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Tabela de Preços</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-white">Ecossistema</h6>
          <ul className="space-y-5 text-sm text-slate-500 font-medium">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Portal do Cliente</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Política de Retorno</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-white">NewsNext</h6>
          <p className="text-sm text-slate-500 mb-6 font-medium">Receba insights de design e conversão em seu e-mail.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="seu@email.com" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 flex-1 shadow-inner text-white" />
            <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-90">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.25em]">
        <p>© {new Date().getFullYear()} PageNext Agency. Worldwide Rights Reserved.</p>
        <p className="mt-6 md:mt-0 opacity-50">High Performance Digital Experiences</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar onOpenContact={() => setIsModalOpen(true)} />
      <Hero onOpenContact={() => setIsModalOpen(true)} />
      <Services />
      <Portfolio />
      <Differentiators />
      <Testimonials />
      <CallToAction onOpenContact={() => setIsModalOpen(true)} />
      <Footer />
      <WhatsAppFloating />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

