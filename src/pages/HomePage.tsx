import { Search, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-prosecco.jpg';
import regionValdobbiadene from '@/assets/region-valdobbiadene.jpg';
import regionConogliano from '@/assets/region-conegliano.jpg';
import regionCartizze from '@/assets/region-cartizze.jpg';
import regionAsolo from '@/assets/region-asolo.jpg';
import regionRose from '@/assets/region-rose.jpg';
import regionTreviso from '@/assets/region-treviso.jpg';
import magazineFeatured from '@/assets/magazine-featured.jpg';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { proseccos, producers, reviews } from '@/data/proseccoData';
import { useState } from 'react';

const quickFilters = ['Všetky', 'Extra Dry', 'Brut', 'Rosé', 'DOCG', 'Do €15'];

const regions = [
  { name: 'Valdobbiadene', image: regionValdobbiadene, slug: 'valdobbiadene' },
  { name: 'Conegliano', image: regionConogliano, slug: 'conegliano' },
  { name: 'Cartizze', image: regionCartizze, slug: 'cartizze' },
  { name: 'Asolo', image: regionAsolo, slug: 'asolo' },
  { name: 'DOC Rosé', image: regionRose, slug: 'rose' },
  { name: 'Treviso', image: regionTreviso, slug: 'treviso' },
];

const articles = [
  { slug: 'sprievodca-valdobbiadene', title: 'Kompletný Sprievodca Valdobbiadene', cat: 'Sprievodca', author: 'Elena Rossi' },
  { slug: 'cartizze-najdrahsia', title: 'Cartizze: Najdrahšia Vinica', cat: 'Región', author: 'Luca Bianchi' },
  { slug: 'interview-bisol', title: 'Interview s Bisol 1542', cat: 'Interview', author: 'Anna Moretti' },
];

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('Všetky');
  const navigate = useNavigate();

  return (
    <div>
      {/* Top App Bar - Home specific */}
      <header
        className="fixed top-0 z-50 flex items-center justify-between px-4"
        style={{
          height: `calc(52px + env(safe-area-inset-top, 0px))`,
          paddingTop: 'env(safe-area-inset-top, 0px)',
          maxWidth: '390px',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 16 16" className="text-oro">
            <circle cx="4" cy="12" r="2.5" fill="currentColor" opacity="0.6" />
            <circle cx="9" cy="8" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="12" cy="4" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-heading font-bold italic text-[22px] text-white">Bolicina</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="press tap-target flex items-center justify-center"><Bell size={24} strokeWidth={1.5} className="text-white" /></button>
          <button className="press tap-target flex items-center justify-center" onClick={() => navigate('/hladat')}><Search size={24} strokeWidth={1.5} className="text-white" /></button>
        </div>
      </header>

      {/* Hero Card */}
      <section className="relative overflow-hidden" style={{ height: 280 }}>
        <img src={heroImage} alt="Prosecco" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,24,16,.15) 0%, rgba(44,24,16,.2) 40%, rgba(44,24,16,.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 z-[2]" style={{ padding: '20px 16px 24px' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(200,168,76,0.95)', display: 'block', marginBottom: 6 }}>Objavte · Hodnoťte · Zdieľajte</span>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 28, color: 'white', lineHeight: 1.1, margin: 0 }}>Nájdite Svoje Prosecco</h1>
        </div>
      </section>

      {/* Search Bar - floating */}
      <div className="mx-4 -mt-5 relative z-10">
        <button
          onClick={() => navigate('/hladat')}
          className="w-full h-12 bg-white rounded-full flex items-center px-4 gap-3 press"
          style={{ border: '0.5px solid hsl(var(--c-stone))', boxShadow: '0 2px 12px rgba(44,24,16,0.08)' }}
        >
          <Search size={18} strokeWidth={1.5} className="text-ink-3" />
          <span className="font-body text-[15px] text-ink-3">Hľadajte prosecco, región...</span>
        </button>
      </div>

      {/* Quick Filter Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 mt-3.5 pb-1" style={{ touchAction: 'pan-x' }}>
        {quickFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`shrink-0 h-8 px-4 rounded-full font-body font-medium text-[12px] press ${
              activeFilter === f
                ? 'bg-selce text-white'
                : 'bg-transparent text-ink-2'
            }`}
            style={activeFilter !== f ? { border: '0.5px solid hsl(var(--c-stone))' } : undefined}
          >
            {f}
          </button>
        ))}
      </div>

      {/* FEED SECTIONS */}
      <div className="px-4">
        {/* V Trende */}
        <SectionHeader title="V Trende" eyebrow="Tento Týždeň" viewAllLink="/explore" />
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ touchAction: 'pan-x', scrollSnapType: 'x mandatory' }}>
            {proseccos.slice(0, 6).map((p) => (
              <div key={p.id} className="w-[155px] shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <ProseccoCard prosecco={p} />
              </div>
            ))}
          </div>
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--c-parchment)), transparent)' }} />
        </div>

        {/* Odporúčané - list cards */}
        <SectionHeader title="Odporúčané" viewAllLink="/explore" />
        <div>
          {proseccos.slice(0, 3).map((p, i) => (
            <div key={p.id} style={i < 2 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
              <ProseccoCard prosecco={p} variant="list" />
            </div>
          ))}
        </div>

        {/* Regióny */}
        <SectionHeader title="Regióny" viewAllLink="/regiony" />
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ touchAction: 'pan-x' }}>
          {regions.map((r) => (
            <Link key={r.slug} to={`/regiony/${r.slug}`} className="shrink-0 w-[110px] h-[70px] rounded-[10px] overflow-hidden relative press">
              <img src={r.image} alt={r.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 right-1 font-heading font-semibold text-[12px] text-white leading-tight">{r.name}</span>
            </Link>
          ))}
        </div>

        {/* Najlepšie Hodnotené - 2-column grid */}
        <SectionHeader title="Najlepšie Hodnotené" viewAllLink="/rebriciky" />
        <div className="grid grid-cols-2 gap-3">
          {proseccos.slice(0, 8).map((p) => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>

        {/* Z Magazínu */}
        <SectionHeader title="Z Magazínu" viewAllLink="/magazin" />
        <div>
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to={`/magazin/${a.slug}`}
              className="flex items-center gap-3 py-3 press"
              style={i < articles.length - 1 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}
            >
              <div className="w-[72px] h-[72px] rounded-lg overflow-hidden shrink-0">
                <img src={magazineFeatured} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-micro text-[11px] text-oro">{a.cat}</span>
                <h3 className="font-heading font-semibold text-[15px] text-selce leading-tight mt-0.5 line-clamp-2">{a.title}</h3>
                <span className="body-small text-ink-3 text-[12px]">{a.author}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
