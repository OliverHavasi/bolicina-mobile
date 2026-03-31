import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TopAppBar from '@/components/TopAppBar';
import StarRating from '@/components/StarRating';
import { proseccos } from '@/data/proseccoData';

const tabs = ['Celkovo', 'Podľa Regiónu', 'Podľa Štýlu', 'Tento Rok', 'Všetky Časy'];

const RankingsPage = () => {
  const ranked = [...proseccos].sort((a, b) => b.rating - a.rating);

  return (
    <div>
      {/* Compact hero */}
      <div className="bg-selce flex items-end justify-center" style={{ height: `calc(100px + env(safe-area-inset-top, 0px))`, paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <h1 className="font-heading font-bold text-[20px] text-white pb-3">Top Prosecco Veneta</h1>
      </div>

      {/* Tabs - sticky */}
      <div className="sticky top-0 z-40 bg-parchment overflow-x-auto no-scrollbar flex gap-2 px-4 py-2" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`shrink-0 px-4 py-1.5 rounded-full font-body text-[13px] press ${
              i === 0 ? 'text-selce font-semibold' : 'text-ink-3'
            }`}
            style={i === 0 ? { borderBottom: '2px solid hsl(var(--c-oro))' } : undefined}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Ranking list */}
      <div className="px-4">
        {ranked.map((p, i) => (
          <Link
            key={p.id}
            to={`/prosecco/${p.id}`}
            className="flex items-center gap-3 h-[72px] press"
            style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}
          >
            <span className={`font-heading font-extrabold text-[32px] w-8 text-center shrink-0 ${
              i === 0 ? 'text-oro' : i === 1 ? 'text-stone-mid' : i === 2 ? 'text-cotto' : 'text-stone'
            }`}>
              {i + 1}
            </span>
            <div className="w-11 h-[58px] bg-cream rounded flex items-center justify-center shrink-0">
              <img src={p.image} alt="" className="max-h-[50px] object-contain" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-[15px] text-selce truncate">{p.name}</h3>
              <p className="font-body text-[12px] text-ink-3">{p.producer}</p>
              <StarRating rating={p.rating} size={10} showScore />
            </div>
            <div className="shrink-0 text-right flex items-center gap-1">
              <span className="font-body font-medium text-[13px] text-ink-2">{p.price}</span>
              <ChevronRight size={16} strokeWidth={1.5} className="text-ink-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RankingsPage;
