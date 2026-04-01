import { Search, Bell, ChevronDown } from 'lucide-react';
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
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { proseccos } from '@/data/proseccoData';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const regions = [
  { name: 'Valdobbiadene', image: regionValdobbiadene, slug: 'valdobbiadene' },
  { name: 'Conegliano', image: regionConogliano, slug: 'conegliano' },
  { name: 'Cartizze', image: regionCartizze, slug: 'cartizze' },
  { name: 'Asolo', image: regionAsolo, slug: 'asolo' },
  { name: 'DOC Rosé', image: regionRose, slug: 'rose' },
  { name: 'Treviso', image: regionTreviso, slug: 'treviso' },
];

const articles = [
  { slug: 'sprievodca-valdobbiadene', titleKey: 'guideValdobbiadene' as const, cat: 'Guida', author: 'Elena Rossi' },
  { slug: 'cartizze-najdrahsia', titleKey: 'cartizzeArticle' as const, cat: 'Regione', author: 'Luca Bianchi' },
  { slug: 'interview-bisol', titleKey: 'interviewBisol' as const, cat: 'Interview', author: 'Anna Moretti' },
];

// Article titles per language
const articleTitles: Record<string, Record<string, string>> = {
  guideValdobbiadene: { it: 'Guida Completa a Valdobbiadene', sk: 'Kompletný Sprievodca Valdobbiadene', en: 'Complete Guide to Valdobbiadene' },
  cartizzeArticle: { it: 'Cartizze: Il Vigneto Più Costoso', sk: 'Cartizze: Najdrahšia Vinica', en: 'Cartizze: The Most Expensive Vineyard' },
  interviewBisol: { it: 'Intervista con HAMSIK Winery', sk: 'Interview s HAMSIK Winery', en: 'Interview with HAMSIK Winery' },
};

const HomePage = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(t('filterAll'));
  const navigate = useNavigate();

  const quickFilters = [
    t('filterAll'), t('filterExtraDry'), t('filterBrut'), t('filterRose'), t('filterDOCG'), t('filterFrizzante'),
  ];

  return (
    <div>
      {/* HERO — full viewport */}
      <section className="relative overflow-hidden" style={{ height: '100dvh', width: '100%' }}>
        <img src={heroImage} alt="Prosecco" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
        {/* Top scrim for icon legibility */}
        <div className="absolute inset-x-0 top-0 z-[1]" style={{ height: 120, background: 'linear-gradient(to bottom, rgba(4,22,10,0.50) 0%, rgba(4,22,10,0) 100%)' }} />
        {/* Bottom scrim — neutral black */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.60) 100%)' }} />

        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4"
          style={{
            height: `calc(52px + env(safe-area-inset-top, 0px))`,
            paddingTop: 'env(safe-area-inset-top, 0px)',
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
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button className="press tap-target flex items-center justify-center"><Bell size={22} strokeWidth={1.5} className="text-white" /></button>
            <button className="press tap-target flex items-center justify-center" onClick={() => navigate('/hladat')}><Search size={22} strokeWidth={1.5} className="text-white" /></button>
          </div>
        </div>

        {/* Hero content — positioned in lower portion */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] flex flex-col items-center" style={{ padding: '0 24px 100px' }}>
          {/* Tagline */}
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(200,168,76,0.95)', display: 'block', marginBottom: 10, textAlign: 'center' }}>
            {t('tagline')}
          </span>
          {/* Heading */}
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 32, color: 'white', lineHeight: 1.1, margin: '0 0 24px 0', textAlign: 'center' }}>
            {t('heroHeading')}
          </h1>

          {/* Search Bar — frosted glass */}
          <button
            onClick={() => navigate('/hladat')}
            className="w-full h-12 rounded-full flex items-center px-4 gap-3 press"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '0.5px solid rgba(255, 255, 255, 0.20)',
              maxWidth: 340,
            }}
          >
            <Search size={18} strokeWidth={1.5} style={{ color: 'rgba(247, 244, 238, 0.6)' }} />
            <span className="font-body text-[15px]" style={{ color: 'rgba(247, 244, 238, 0.55)' }}>
              {t('searchPlaceholder')}
            </span>
          </button>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-1 w-full justify-center" style={{ touchAction: 'pan-x' }}>
            {quickFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="shrink-0 h-8 px-4 rounded-full font-body font-medium text-[12px] press"
                style={
                  activeFilter === f
                    ? { background: '#1a1a1a', color: 'white', border: '1px solid rgba(200,168,76,0.8)' }
                    : { background: 'rgba(247,244,238,0.15)', color: 'white', border: '0.5px solid rgba(247,244,238,0.35)' }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Bouncing chevron — centered below chips */}
        <div className="absolute bottom-8 left-0 right-0 z-[3] flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} strokeWidth={1.5} className="text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* FEED SECTIONS */}
      <div className="px-4">
        {/* Trending */}
        <SectionHeader title={t('trending')} eyebrow={t('thisWeek')} viewAllLink="/explore" viewAllLabel={t('seeAll')} />
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ touchAction: 'pan-x', scrollSnapType: 'x mandatory' }}>
            {proseccos.slice(0, 6).map((p) => (
              <div key={p.id} className="w-[155px] shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <ProseccoCard prosecco={p} />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--c-parchment)), transparent)' }} />
        </div>

        {/* Recommended — list */}
        <SectionHeader title={t('recommended')} viewAllLink="/explore" viewAllLabel={t('seeAll')} />
        <div>
          {proseccos.slice(0, 3).map((p, i) => (
            <div key={p.id} style={i < 2 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
              <ProseccoCard prosecco={p} variant="list" />
            </div>
          ))}
        </div>

        {/* Regions */}
        <SectionHeader title={t('regions')} viewAllLink="/regiony" viewAllLabel={t('seeAll')} />
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ touchAction: 'pan-x' }}>
          {regions.map((r) => (
            <Link key={r.slug} to={`/regiony/${r.slug}`} className="shrink-0 w-[110px] h-[70px] rounded-[10px] overflow-hidden relative press">
              <img src={r.image} alt={r.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 right-1 font-heading font-semibold text-[12px] text-white leading-tight">{r.name}</span>
            </Link>
          ))}
        </div>

        {/* Top Rated — 2-col grid */}
        <SectionHeader title={t('topRated')} viewAllLink="/rebriciky" viewAllLabel={t('seeAll')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          {proseccos.map((p) => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>

        {/* Magazine */}
        <SectionHeader title={t('fromMagazine')} viewAllLink="/magazin" viewAllLabel={t('seeAll')} />
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
                <h3 className="font-heading font-semibold text-[15px] text-selce leading-tight mt-0.5 line-clamp-2">
                  {articleTitles[a.titleKey]?.[lang] || a.slug}
                </h3>
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
