import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StarRating from '@/components/StarRating';
import { proseccos } from '@/data/proseccoData';

const tabs = ['Celkovo', 'Podľa Regiónu', 'Podľa Štýlu', 'Tento Rok', 'Všetky Časy'];

const RankingsPage = () => {
  const ranked = [...proseccos].sort((a, b) => b.rating - a.rating);

  return (
    <div className="pt-[68px]">
      {/* Dark hero */}
      <section className="bg-forest py-20 relative overflow-hidden">
        <svg viewBox="0 0 800 200" className="absolute inset-0 w-full h-full text-gold/10">
          <path d="M 0 200 Q 400 -50 800 200" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <div className="relative z-10 text-center">
          <h1 className="font-heading font-bold text-[52px] max-md:text-[36px] text-parchment">Top Prosecco</h1>
          <p className="font-body font-light text-[16px] text-parchment/70 tracking-[0.04em] mt-2">
            Rebríčky najlepšie hodnotených Prosecco od našej komunity
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-parchment" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
        <div className="max-w-[960px] mx-auto px-6 flex gap-2 py-3 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full font-body text-[13px] tracking-[0.04em] interactive shrink-0 ${
                i === 0
                  ? 'bg-gold/15 text-gold hairline border-gold'
                  : 'text-forest-mid hover:bg-cream'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Ranking list */}
      <div className="max-w-[960px] mx-auto px-6 py-8">
        {ranked.map((p, i) => (
          <Link
            key={p.id}
            to={`/prosecco/${p.id}`}
            className="flex items-center gap-4 py-4 interactive hover:bg-cream hover:translate-x-1 rounded-lg px-3 -mx-3"
            style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}
          >
            {/* Rank */}
            <span className={`font-heading font-bold text-[52px] max-md:text-[36px] w-16 text-center shrink-0 ${
              i === 0 ? 'text-gold' : i === 1 ? 'text-stone-mid' : i === 2 ? 'text-gold-deep/60' : 'text-stone'
            }`}>
              {i + 1}
            </span>

            {/* Bottle */}
            <img src={p.image} alt="" className="w-12 h-16 object-contain shrink-0 drop-shadow-md" />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-[18px] text-forest truncate">{p.name}</h3>
              <p className="body-small text-ink-secondary">{p.producer}</p>
              <p className="body-small text-ink-tertiary">{p.region}</p>
            </div>

            {/* Style badge */}
            <span className="hidden md:inline-block bg-gold-tint text-gold-deep hairline border-gold/30 rounded-sm px-2 py-0.5 font-body font-medium text-[11px] shrink-0">
              {p.style}
            </span>

            {/* Rating */}
            <div className="shrink-0 text-right">
              <StarRating rating={p.rating} showScore size={14} />
              <span className="body-small text-ink-tertiary">({p.reviewCount.toLocaleString()})</span>
            </div>

            {/* Price */}
            <span className="hidden md:block font-body font-medium text-[14px] text-ink-secondary shrink-0 w-12 text-right">{p.price}</span>

            <ArrowRight size={16} strokeWidth={1.5} className="text-gold shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RankingsPage;
