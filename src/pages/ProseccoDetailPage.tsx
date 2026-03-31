import { useParams } from 'react-router-dom';
import { Heart, Share2, MapPin, BadgeCheck, ThumbsUp } from 'lucide-react';
import TopAppBar from '@/components/TopAppBar';
import StarRating from '@/components/StarRating';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { proseccos } from '@/data/proseccoData';

const ratingDist = [
  { stars: 5, pct: 42 },
  { stars: 4, pct: 34 },
  { stars: 3, pct: 16 },
  { stars: 2, pct: 6 },
  { stars: 1, pct: 2 },
];

const flavorTags = ['Broskyňa', 'Zelené Jablko', 'Med', 'Kvetinový', 'Citrus', 'Grapefruit', 'Toast', 'Mandľa'];
const radarAxes = ['Sladkosť', 'Acidita', 'Ovocitosť', 'Komplexnosť', 'Perláž', 'Záver'];
const radarValues = [0.3, 0.7, 0.8, 0.65, 0.85, 0.6];

const details = [
  ['Vinárstvo', 'Bisol 1542'],
  ['Appellation', 'Valdobbiadene DOCG'],
  ['Región', 'Veneto, Taliansko'],
  ['Hrozno', 'Glera 100%'],
  ['Alkohol', '11.5%'],
  ['Teplota', '6-8°C'],
  ['Štýl', 'Brut'],
  ['Perláž', 'Jemná a vytrvalá'],
  ['Objem', '750ml'],
];

const ProseccoDetailPage = () => {
  const { id } = useParams();
  const prosecco = proseccos.find(p => p.id === id) || proseccos[0];

  const centerX = 120, centerY = 120, radius = 90;
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
    return { x: centerX + radius * value * Math.cos(angle), y: centerY + radius * value * Math.sin(angle) };
  };
  const radarPoints = radarValues.map((v, i) => getPoint(i, v));
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div>
      <TopAppBar
        showBack
        transparent
        rightContent={
          <div className="flex items-center gap-2">
            <button className="press tap-target flex items-center justify-center"><Share2 size={22} strokeWidth={1.5} className="text-selce" /></button>
            <button className="press tap-target flex items-center justify-center"><Heart size={22} strokeWidth={1.5} className="text-selce" /></button>
          </div>
        }
      />

      {/* Bottle Hero */}
      <div className="h-[280px] bg-cream flex items-center justify-center relative overflow-hidden">
        {/* Perlage */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
              background: 'rgba(200,168,76,0.35)',
              left: `${30 + Math.random() * 40}%`,
              bottom: '20%',
              animation: `float-bubble ${2.5 + Math.random() * 1.5}s ease-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        <img src={prosecco.image} alt={prosecco.name} className="max-h-[230px] object-contain relative z-10" style={{ filter: 'drop-shadow(0 10px 28px rgba(44,24,16,0.14))' }} />
        {/* Dots */}
        <div className="absolute bottom-3 flex gap-1.5 z-10">
          <div className="w-5 h-[6px] rounded-full bg-oro" />
          <div className="w-[6px] h-[6px] rounded-full bg-stone" />
          <div className="w-[6px] h-[6px] rounded-full bg-stone" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Identity */}
        <div className="pt-4 pb-4" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          <div className="flex gap-1.5 mb-1">
            {prosecco.appellation === 'DOCG' && <span className="text-label text-[10px] bg-selce text-parchment px-[7px] py-[3px] rounded-sm">DOCG</span>}
            <span className="text-label text-[10px] bg-oro-tint text-oro-deep px-[7px] py-[3px] rounded-sm">{prosecco.style}</span>
          </div>
          <span className="text-label text-[11px] text-oro tracking-[0.08em]">{prosecco.producer.toUpperCase()}</span>
          <h1 className="heading-h1 text-selce mt-0.5">{prosecco.name}</h1>
          <div className="flex items-center gap-1 mt-1 text-ink-3">
            <MapPin size={12} strokeWidth={1.5} />
            <span className="body-small">{prosecco.region} · {prosecco.vintage}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="py-4" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          <div className="flex items-start gap-4">
            <span className="font-heading font-bold text-[56px] text-selce leading-none">{prosecco.rating.toFixed(1)}</span>
            <div className="pt-1 flex-1">
              <StarRating rating={prosecco.rating} size={18} />
              <p className="body-small text-ink-3 mt-1">{prosecco.reviewCount.toLocaleString()} hodnotení</p>
              <div className="mt-2 space-y-1">
                {ratingDist.map(d => (
                  <div key={d.stars} className="flex items-center gap-1.5">
                    <span className="font-body font-medium text-[12px] text-ink-2 w-5">{d.stars}★</span>
                    <div className="flex-1 h-[5px] bg-stone rounded-full overflow-hidden">
                      <div className="h-full bg-oro rounded-full" style={{ width: `${d.pct}%` }} />
                    </div>
                    <span className="font-body text-[11px] text-ink-3 w-7 text-right">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="w-full mt-3 h-11 bg-selce text-white rounded-lg font-heading font-semibold text-[15px] press">
            Ohodnotiť toto Prosecco
          </button>
        </div>

        {/* Flavor profile */}
        <div className="py-4" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          <h3 className="heading-h4 text-selce">Chuťový Profil</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {flavorTags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-oro-tint text-oro-deep rounded-full font-body text-[12px]" style={{ border: '0.5px solid rgba(200,168,76,0.3)' }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <svg width="240" height="240" viewBox="0 0 240 240">
              {[0.33, 0.66, 1].map(scale => (
                <polygon key={scale} points={Array.from({ length: 6 }, (_, i) => { const p = getPoint(i, scale); return `${p.x},${p.y}`; }).join(' ')} fill="none" stroke="hsl(var(--c-stone))" strokeWidth="0.5" />
              ))}
              {radarAxes.map((_, i) => { const p = getPoint(i, 1); return <line key={i} x1={centerX} y1={centerY} x2={p.x} y2={p.y} stroke="hsl(var(--c-stone))" strokeWidth="0.5" />; })}
              <polygon points={radarPoints.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(200,168,76,0.2)" stroke="hsl(var(--c-oro))" strokeWidth="1" />
              {radarAxes.map((label, i) => { const p = getPoint(i, 1.22); return <text key={label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '11px', fontFamily: 'DM Sans', fill: 'hsl(var(--c-ink-2))' }}>{label}</text>; })}
            </svg>
          </div>
        </div>

        {/* Where to buy */}
        <div className="py-4" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          <h3 className="heading-h4 text-selce">Kde Kúpiť</h3>
          <p className="body-small text-ink-3 mt-0.5">€12 – €22</p>
          {['Wine & More', 'Prosecco Shop IT', 'Vivino Market'].map((r, i) => (
            <div key={r} className="flex items-center justify-between py-2.5" style={i < 2 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-cream-deep flex items-center justify-center font-body font-semibold text-[12px] text-selce">{r[0]}</div>
                <span className="font-body text-[14px] text-ink">{r}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-heading font-semibold text-[16px] text-selce">€{14 + i * 3}</span>
                <span className="font-body font-semibold text-[13px] text-oro press">Kúpiť →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Details table */}
        <div className="py-4 grid grid-cols-2 gap-x-4 gap-y-2" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          <h3 className="heading-h4 text-selce col-span-2 mb-1">Detaily</h3>
          {details.map(([label, value]) => (
            <div key={label}>
              <span className="text-label text-[11px] text-ink-3">{label}</span>
              <p className="font-body text-[14px] text-ink mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="py-4">
          <h3 className="heading-h4 text-selce mb-3">Recenzie</h3>
          {[
            { user: 'MarcoVino', badge: 'Expert', rating: 5, text: 'Výnimočné perlage a nádherná chuťová komplexnosť.', helpful: 24, date: '15.3.2025' },
            { user: 'SilviaBubbles', badge: 'Connoisseur', rating: 4, text: 'Spoľahlivá klasika s citrusovou sviežosťou.', helpful: 18, date: '12.3.2025' },
          ].map((review, i) => (
            <div key={i} className="py-3" style={i < 1 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-cream-deep flex items-center justify-center font-heading font-semibold text-[14px] text-selce">{review.user[0]}</div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-body font-semibold text-[13px] text-ink">{review.user}</span>
                      <BadgeCheck size={12} strokeWidth={1.5} className="text-oro" />
                    </div>
                    <span className="text-micro text-[10px] text-oro-deep bg-oro-tint px-1.5 py-0.5 rounded-sm">{review.badge}</span>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} size={11} />
                  <span className="font-body text-[11px] text-ink-3">{review.date}</span>
                </div>
              </div>
              <p className="font-body text-[14px] text-ink-2 mt-2 leading-[1.6]">{review.text}</p>
              <button className="flex items-center gap-1 mt-1.5 text-ink-3 press">
                <ThumbsUp size={12} strokeWidth={1.5} />
                <span className="font-body text-[12px]">Pomohlo ({review.helpful})</span>
              </button>
            </div>
          ))}
          <button className="w-full mt-2 py-2.5 rounded-lg font-body font-semibold text-[14px] text-selce press" style={{ border: '0.5px solid hsl(var(--c-selce))' }}>
            Napísať recenziu
          </button>
        </div>

        {/* Similar */}
        <SectionHeader title="Mohlo by sa vám páčiť" />
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6" style={{ touchAction: 'pan-x' }}>
          {proseccos.slice(2, 8).map(p => (
            <div key={p.id} className="w-[155px] shrink-0">
              <ProseccoCard prosecco={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar */}
      <div
        className="fixed left-0 right-0 z-[90] flex items-center"
        style={{
          bottom: `calc(49px + env(safe-area-inset-bottom, 0px))`,
          height: '64px',
          background: 'rgba(247,242,235,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '0.5px solid hsl(var(--c-stone))',
        }}
      >
        <button className="flex-1 flex flex-col items-center justify-center gap-0.5 press">
          <Heart size={18} strokeWidth={1.5} className="text-selce" />
          <span className="font-body text-[11px] text-ink-2">Zoznam</span>
        </button>
        <div className="w-[0.5px] h-8 bg-stone" />
        <button className="flex-[1.5] h-10 mx-3 bg-selce text-white rounded-lg font-heading font-semibold text-[14px] press">
          Ohodnotiť
        </button>
        <div className="w-[0.5px] h-8 bg-stone" />
        <button className="flex-1 flex flex-col items-center justify-center gap-0.5 press">
          <Share2 size={18} strokeWidth={1.5} className="text-selce" />
          <span className="font-body text-[11px] text-ink-2">Zdieľať</span>
        </button>
      </div>
    </div>
  );
};

export default ProseccoDetailPage;
