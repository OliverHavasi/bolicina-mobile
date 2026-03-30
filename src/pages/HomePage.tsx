import { Search, ChevronDown, Grape, Droplets, Beaker, Filter, Star, ThumbsUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import StarRating from '@/components/StarRating';
import { proseccos, producers, reviews, filterStyles } from '@/data/proseccoData';
import { useState } from 'react';

const quickTags = ['Extra Dry', 'Brut', 'Rosé', 'Valdobbiadene', 'Do €15', 'Najlepšie hodnotené'];

const stats = [
  { number: '48 000+', label: 'v databáze', sublabel: 'prosecco' },
  { number: '2,1M+', label: 'od komunity', sublabel: 'hodnotení' },
  { number: '320+', label: 'z Talianska', sublabel: 'producentov' },
  { number: '42', label: 'DOCG a DOC', sublabel: 'regiónov' },
];

const regions = [
  { name: 'Valdobbiadene Superiore', appellation: 'DOCG', count: '1 240', image: regionValdobbiadene, slug: 'valdobbiadene' },
  { name: 'Conegliano Valdobbiadene', appellation: 'DOCG', count: '980', image: regionConogliano, slug: 'conegliano' },
  { name: 'Cartizze', appellation: 'DOCG', count: '186', image: regionCartizze, slug: 'cartizze' },
  { name: 'Asolo Prosecco', appellation: 'DOCG', count: '420', image: regionAsolo, slug: 'asolo' },
  { name: 'Prosecco DOC Rosé', appellation: 'DOC', count: '610', image: regionRose, slug: 'rose' },
  { name: 'Prosecco DOC Treviso', appellation: 'DOC', count: '2 100', image: regionTreviso, slug: 'treviso' },
];

const processSteps = [
  { icon: Grape, title: 'Zber Hrozna', desc: 'Glera hrozno zberané ručne v septembri z terás Valdobbiadene.' },
  { icon: Droplets, title: 'Prvá Fermentácia', desc: 'Výroba základného vína pri kontrolovanej teplote 18°C.' },
  { icon: Beaker, title: 'Charmat Metóda', desc: 'Druhá fermentácia v hermeticky uzavretých nerezových nádobách.' },
  { icon: Filter, title: 'Fľašovanie', desc: 'Filtrácia a plnenie pri zachovaní jemného perlage.' },
  { icon: Star, title: 'Degustácia', desc: 'Každá fľaša preverená skúsenými sommeliermi pred expedíciou.' },
];

const HomePage = () => {
  const [activeStyle, setActiveStyle] = useState('Všetky');

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img src={heroImage} alt="Prosecco pour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(27,45,34,0.55) 0%, rgba(27,45,34,0.2) 50%, rgba(27,45,34,0.7) 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")', opacity: 0.3 }} />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6" style={{ paddingTop: '0', marginTop: '-5vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-micro text-[11px] tracking-[0.14em]" style={{ color: 'rgba(200,168,76,0.9)' }}>
              Objavte · Hodnoťte · Zdieľajte
            </p>
            <div className="w-10 h-[0.5px] bg-gold/50 mx-auto mt-2" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-bold text-[68px] max-md:text-[36px] leading-[1.05] text-parchment text-center max-w-[640px] mt-6"
          >
            Nájdite Svoje Prosecco
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body font-light text-[18px] max-md:text-[16px] text-parchment/80 text-center max-w-[480px] mt-5 leading-[1.7]"
          >
            Hodnotenia, recenzie a odporúčania od 2 miliónov milovníkov Prosecca.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full max-w-[680px] mt-10"
          >
            <div
              className="relative flex items-center h-[58px] rounded-full px-5"
              style={{
                background: 'rgba(247,244,238,0.14)',
                backdropFilter: 'blur(32px)',
                border: '0.5px solid rgba(247,244,238,0.4)',
              }}
            >
              <Search size={18} strokeWidth={1.5} className="text-parchment/60" />
              <input
                type="text"
                placeholder="Hľadajte prosecco, producenta, región..."
                className="flex-1 ml-3 bg-transparent text-parchment font-body text-[15px] placeholder:text-parchment/50 outline-none"
              />
              <button className="absolute right-2 bg-gold text-forest h-[42px] px-6 rounded-full font-body font-semibold text-[13px] tracking-[0.04em] interactive hover:bg-gold-light">
                Hľadať
              </button>
            </div>

            {/* Quick tags */}
            <div className="flex gap-2 mt-5 overflow-x-auto pb-2 justify-center max-md:justify-start custom-scrollbar">
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  className="shrink-0 px-4 py-2 rounded-full font-body text-[12px] tracking-[0.04em] text-parchment interactive cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '0.5px solid rgba(255,255,255,0.25)',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 flex flex-col items-center gap-1">
            <span className="text-micro text-[11px] text-parchment/60">Skrolovať</span>
            <ChevronDown size={16} strokeWidth={1.5} className="text-parchment animate-bounce-gentle" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gold-tint py-9" style={{ borderTop: '0.5px solid rgba(200,168,76,0.3)', borderBottom: '0.5px solid rgba(200,168,76,0.3)' }}>
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i < 3 ? 'lg:border-r lg:hairline lg:border-stone' : ''}`}>
              <div className="font-heading font-bold text-[42px] max-md:text-[32px] text-forest">{stat.number}</div>
              <div className="text-micro text-[12px] tracking-[0.08em] text-ink-tertiary">{stat.sublabel}</div>
              <div className="text-micro text-[12px] tracking-[0.08em] text-ink-tertiary">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING THIS WEEK */}
      <section className="section-padding bg-parchment">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Tento Týždeň"
            title="V Trende"
            subtitle="Prosecco, ktoré komunita práve objavuje"
            viewAllLink="/explore"
          />
          <div className="flex gap-5 overflow-x-auto custom-scrollbar pb-4 snap-x snap-mandatory">
            {proseccos.slice(0, 6).map((p) => (
              <div key={p.id} className="min-w-[280px] snap-start">
                <ProseccoCard prosecco={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP RATED */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Najlepšie Hodnotené"
            title="Top Prosecco"
            subtitle="Podľa hodnotení našej komunity"
          />
          {/* Filter pills */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {filterStyles.map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                className={`px-5 py-2 rounded-full font-body font-medium text-[12px] tracking-[0.05em] interactive ${
                  activeStyle === style
                    ? 'bg-forest text-parchment'
                    : 'bg-transparent text-ink-secondary hairline border-stone hover:border-gold'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {proseccos.slice(0, 8).map((p) => (
              <ProseccoCard key={p.id} prosecco={p} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE BY REGION */}
      <section className="section-padding bg-parchment">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Talianske Terroir"
            title="Objavte Regióny"
            subtitle="Od UNESCO Valdobbiadene po slnečné pláne Treviso"
            viewAllLink="/regiony"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {regions.map((region) => (
              <Link
                key={region.slug}
                to={`/regiony/${region.slug}`}
                className="group relative aspect-video overflow-hidden rounded-lg interactive hover:border-gold cursor-pointer"
                style={{ borderRadius: '50% 50% 8px 8px / 16px 16px 8px 8px' }}
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="absolute inset-0 w-full h-full object-cover interactive group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,45,34,0.85) 0%, rgba(27,45,34,0) 60%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-heading font-semibold text-[22px] text-parchment tracking-[-0.01em]">{region.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-sm text-[10px] font-body font-semibold tracking-[0.08em] uppercase" style={{ background: 'rgba(200,168,76,0.2)', border: '0.5px solid rgba(200,168,76,0.5)', color: 'hsl(var(--color-gold-light))' }}>
                      {region.appellation}
                    </span>
                    <span className="font-body font-light text-[12px] text-parchment/70">{region.count} prosecco</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PROSECCO IS MADE */}
      <section className="section-padding bg-cream-deep">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Proces Výroby"
            title="Od Viniča k Poháru"
            subtitle="Päť krokov, ktoré robia Prosecco výnimočným"
          />
          <div className="flex max-lg:flex-col items-start gap-8 lg:gap-4 relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[0.5px] border-t border-dashed border-stone" />
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex-1 text-center relative max-lg:flex max-lg:items-start max-lg:text-left max-lg:gap-4">
                  <div className="relative z-10 mx-auto max-lg:mx-0">
                    <span className="font-heading font-bold text-[64px] max-md:text-[48px] text-stone/40 absolute -top-6 left-1/2 -translate-x-1/2 max-lg:left-0 max-lg:translate-x-0 max-lg:-top-4 select-none">
                      {i + 1}
                    </span>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-parchment hairline border-stone flex items-center justify-center mx-auto max-lg:mx-0 mt-4">
                      <Icon size={24} strokeWidth={1.5} className="text-gold" />
                    </div>
                  </div>
                  <div className="max-lg:pt-2">
                    <h4 className="font-heading font-medium text-[18px] text-ink mt-4 max-lg:mt-0">{step.title}</h4>
                    <p className="body-small text-ink-secondary mt-2 max-w-[200px] mx-auto max-lg:max-w-none">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCERS SPOTLIGHT */}
      <section className="section-padding bg-parchment">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Partneri Kvality"
            title="Vybraní Producenti"
            viewAllLink="/producenti"
          />
          <div className="flex gap-5 overflow-x-auto custom-scrollbar pb-4">
            {producers.map((p) => (
              <Link
                key={p.id}
                to={`/producenti/${p.slug}`}
                className="shrink-0 w-[240px] h-[180px] bg-cream hairline border-stone rounded-lg flex flex-col items-center justify-center gap-2 interactive hover:border-gold hover:-translate-y-1 cursor-pointer"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-14 h-14 rounded-full bg-parchment hairline border-stone flex items-center justify-center font-heading font-semibold text-[20px] text-forest">
                  {p.initials}
                </div>
                <span className="font-heading font-semibold text-[17px] text-forest">{p.name}</span>
                <span className="body-small text-ink-tertiary">{p.region}</span>
                <div className="flex items-center gap-2">
                  <span className="font-body font-medium text-[12px] text-gold">{p.proseccoCount} prosecco</span>
                  <StarRating rating={p.avgRating} size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY REVIEWS */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Recenzie"
            title="Čo Hovoria Ľudia"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-parchment hairline border-stone rounded-lg p-6"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cream-deep flex items-center justify-center font-heading font-semibold text-[14px] text-forest">
                    {review.username[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-body font-semibold text-[14px] text-ink">{review.username}</div>
                    <span className="inline-block px-2 py-0.5 bg-gold-tint text-gold-deep rounded-sm text-[10px] font-body font-medium tracking-[0.05em]">
                      {review.badge}
                    </span>
                  </div>
                  <span className="text-micro text-[10px] text-ink-tertiary">{review.date}</span>
                </div>
                <StarRating rating={review.rating} size={14} />
                <Link to={`/prosecco/${review.proseccoId}`} className="block font-heading font-semibold text-[16px] text-forest mt-2 hover:text-gold interactive">
                  {review.proseccoName}
                </Link>
                <p className="body-small text-ink-secondary mt-2 line-clamp-4">{review.text}</p>
                <div className="flex items-center gap-1 mt-3 text-ink-tertiary">
                  <ThumbsUp size={14} strokeWidth={1.5} />
                  <span className="body-small">Pomohlo ({review.helpfulCount})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section className="section-padding bg-forest">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Redakcia"
            title="Z Nášho Magazínu"
            dark
            viewAllLink="/magazin"
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
            {/* Featured article */}
            <Link to="/magazin/sprievodca-valdobbiadene" className="lg:col-span-3 relative aspect-[4/3] rounded-lg overflow-hidden group" style={{ borderRadius: '50% 50% 8px 8px / 16px 16px 8px 8px' }}>
              <img src={magazineFeatured} alt="Magazine" className="absolute inset-0 w-full h-full object-cover interactive group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,45,34,0.9) 0%, rgba(27,45,34,0) 50%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-gold/20 hairline border-gold/50 text-gold-light rounded-sm text-[10px] font-body font-semibold tracking-[0.08em] uppercase mb-3">Sprievodca</span>
                <h3 className="font-heading font-semibold text-[28px] max-md:text-[22px] text-parchment leading-[1.2]">Kompletný Sprievodca Valdobbiadene DOCG</h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="body-small text-parchment/60">Elena Rossi</span>
                  <span className="body-small text-parchment/60">·</span>
                  <span className="body-small text-parchment/60">8 min čítania</span>
                </div>
                <span className="inline-block mt-3 text-gold font-body font-medium text-[13px]">Čítať →</span>
              </div>
            </Link>

            {/* Side articles */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { title: 'Cartizze: Najdrahšia Vinica Prosecca', cat: 'Región', time: '5 min' },
                { title: 'Interview s Vinárstvom Bisol 1542', cat: 'Interview', time: '12 min' },
                { title: 'Rosé Prosecco: Trend alebo Tradícia?', cat: 'Analýza', time: '6 min' },
              ].map((article, i) => (
                <Link key={i} to="/magazin/article" className="flex gap-4 items-start group">
                  <div className="w-[72px] h-[72px] rounded bg-forest-mid shrink-0 overflow-hidden">
                    <img src={magazineFeatured} alt="" className="w-full h-full object-cover opacity-60" loading="lazy" />
                  </div>
                  <div>
                    <span className="text-micro text-[10px] text-gold-light">{article.cat}</span>
                    <h4 className="font-heading font-semibold text-[16px] text-parchment leading-[1.3] mt-1 group-hover:text-gold interactive">{article.title}</h4>
                    <span className="body-small text-parchment/50 mt-1">{article.time} čítania</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, hsl(var(--color-gold-tint)) 0%, hsl(var(--color-parchment)) 100%)', borderTop: '0.5px solid rgba(200,168,76,0.4)', borderBottom: '0.5px solid rgba(200,168,76,0.4)' }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          {/* Decorative arch */}
          <svg viewBox="0 0 400 60" className="w-full max-w-[400px] mx-auto mb-8 text-gold/30">
            <path d="M 0 60 Q 200 -20 400 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <h2 className="heading-h2 text-forest">Buďte Prvý v Poznaní</h2>
          <p className="body-text text-ink-secondary mt-3">
            Nové ročníky, limitované edície a odborné recenzie priamo na váš e-mail.
          </p>
          <div className="flex gap-3 mt-8 max-md:flex-col">
            <input
              type="email"
              placeholder="Váš e-mail"
              className="flex-1 h-[52px] px-4 hairline border-stone rounded bg-parchment font-body text-[15px] text-ink placeholder:text-ink-tertiary outline-none focus:border-gold"
            />
            <button className="h-[52px] px-7 bg-forest text-parchment rounded font-body font-semibold text-[14px] interactive hover:bg-forest-light shrink-0">
              Prihlásiť sa
            </button>
          </div>
          <p className="body-small text-ink-tertiary mt-3">Žiadny spam. Odhláste sa kedykoľvek.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
