import { useParams } from 'react-router-dom';
import { MapPin, Heart, Bookmark, Share2, BadgeCheck, ThumbsUp } from 'lucide-react';
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
  ['Appellation', 'Valdobbiadene Superiore DOCG'],
  ['Región', 'Veneto, Taliansko'],
  ['Krajina', 'Taliansko'],
  ['Hrozno', 'Glera 100%'],
  ['Alkohol', '11.5%'],
  ['Teplota podávania', '6-8°C'],
  ['Párování jedál', 'Morské plody, Risotto, Aperitivo'],
  ['Štýl', 'Brut'],
  ['Perláž', 'Jemná a vytrvalá'],
  ['Objem', '750ml'],
];

const ProseccoDetailPage = () => {
  const { id } = useParams();
  const prosecco = proseccos.find(p => p.id === id) || proseccos[0];

  // Radar chart SVG
  const centerX = 120, centerY = 120, radius = 90;
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
    return {
      x: centerX + radius * value * Math.cos(angle),
      y: centerY + radius * value * Math.sin(angle),
    };
  };
  const radarPoints = radarValues.map((v, i) => getPoint(i, v));
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="pt-[68px]">
      {/* Breadcrumb */}
      <div className="bg-cream-deep py-3" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="body-small text-ink-tertiary">
            Objaviť › {prosecco.region} › {prosecco.style}
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left - bottle */}
          <div className="lg:col-span-5">
            <div className="bg-parchment hairline border-stone rounded-lg p-10 sticky top-[84px] relative overflow-hidden">
              {/* Perlage animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-gold/20"
                    style={{
                      width: `${3 + Math.random() * 3}px`,
                      height: `${3 + Math.random() * 3}px`,
                      left: `${30 + Math.random() * 40}%`,
                      bottom: '20%',
                      animation: `float-bubble ${3 + Math.random() * 2}s ease-out infinite`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>

              <img
                src={prosecco.image}
                alt={prosecco.name}
                className="max-h-[280px] mx-auto object-contain drop-shadow-xl relative z-10"
              />

              {/* Action buttons */}
              <div className="flex justify-center gap-3 mt-8">
                {[
                  { icon: Heart, label: 'Pridať do zoznamu' },
                  { icon: Bookmark, label: 'Do kolekcie' },
                  { icon: Share2, label: 'Zdieľať' },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center gap-1.5 px-4 py-2 hairline border-stone rounded-full body-small text-ink-secondary hover:border-gold interactive"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - info */}
          <div className="lg:col-span-7">
            <span className="text-micro text-[11px] tracking-[0.12em] text-gold font-semibold">
              {prosecco.producer.toUpperCase()}
            </span>
            <h1 className="font-heading font-bold text-[44px] max-md:text-[32px] text-forest leading-[1.1] mt-1">
              {prosecco.name}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="hairline border-gold text-gold-deep bg-gold-tint px-3 py-1 rounded-full font-heading font-semibold text-[16px]">
                {prosecco.vintage}
              </span>
              <span className="flex items-center gap-1 body-small text-ink-secondary">
                <MapPin size={12} strokeWidth={1.5} /> {prosecco.region}
              </span>
              <span className="bg-forest text-parchment px-2.5 py-0.5 rounded-sm font-body font-semibold text-[11px] tracking-[0.06em] uppercase">
                {prosecco.appellation}
              </span>
              <span className="bg-gold-tint text-gold-deep hairline border-gold/30 px-2.5 py-0.5 rounded-sm font-body font-medium text-[11px] tracking-[0.05em]">
                {prosecco.style}
              </span>
            </div>

            {/* Rating block */}
            <div className="mt-7 pt-7" style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}>
              <div className="flex items-start gap-6">
                <span className="font-heading font-bold text-[80px] max-md:text-[60px] text-forest leading-none">
                  {prosecco.rating.toFixed(1)}
                </span>
                <div className="pt-2">
                  <StarRating rating={prosecco.rating} size={24} />
                  <p className="body-small text-ink-tertiary mt-1">
                    Založené na {prosecco.reviewCount.toLocaleString()} hodnoteniach
                  </p>

                  {/* Distribution bars */}
                  <div className="mt-4 space-y-1.5">
                    {ratingDist.map((d) => (
                      <div key={d.stars} className="flex items-center gap-2">
                        <span className="font-body font-medium text-[13px] text-ink-secondary w-7">{d.stars}★</span>
                        <div className="flex-1 h-1.5 bg-stone rounded-full overflow-hidden">
                          <div className="h-full bg-gold rounded-full interactive" style={{ width: `${d.pct}%` }} />
                        </div>
                        <span className="body-small text-ink-tertiary w-8 text-right">{d.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 h-[46px] bg-forest text-parchment rounded font-body font-semibold text-[14px] interactive hover:bg-forest-light">
                Ohodnotiť toto Prosecco
              </button>
            </div>

            {/* Where to buy */}
            <div className="mt-6 pt-6" style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}>
              <h3 className="font-heading font-medium text-[18px] text-forest">Kde Kúpiť</h3>
              <p className="body-small text-ink-secondary mt-1">Cenové rozpätie: €12 – €22</p>
              <div className="mt-4 space-y-3">
                {['Wine & More', 'Prosecco Shop IT', 'Vivino Market'].map((retailer, i) => (
                  <div key={retailer} className="flex items-center justify-between py-2" style={{ borderBottom: i < 2 ? '0.5px solid hsl(var(--color-stone))' : 'none' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-cream-deep flex items-center justify-center font-body font-semibold text-[12px] text-forest">{retailer[0]}</div>
                      <span className="body-text text-ink">{retailer}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-semibold text-[18px] text-forest">€{14 + i * 3}</span>
                      <span className="font-body font-semibold text-[13px] text-gold interactive cursor-pointer hover:text-gold-deep">Kúpiť →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flavor profile */}
            <div className="mt-6 pt-6" style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}>
              <h3 className="font-heading font-medium text-[18px] text-forest">Chuťový Profil</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {flavorTags.map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-gold-tint text-gold-deep hairline border-gold/30 rounded-full font-body text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Radar chart */}
              <div className="mt-6 flex justify-center">
                <svg width="240" height="240" viewBox="0 0 240 240">
                  {/* Grid lines */}
                  {[0.33, 0.66, 1].map(scale => (
                    <polygon
                      key={scale}
                      points={Array.from({ length: 6 }, (_, i) => {
                        const p = getPoint(i, scale);
                        return `${p.x},${p.y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="hsl(var(--color-stone))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Axes */}
                  {radarAxes.map((_, i) => {
                    const p = getPoint(i, 1);
                    return <line key={i} x1={centerX} y1={centerY} x2={p.x} y2={p.y} stroke="hsl(var(--color-stone))" strokeWidth="0.5" />;
                  })}
                  {/* Data */}
                  <polygon points={radarPoints.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(200,168,76,0.2)" stroke="hsl(var(--color-gold))" strokeWidth="1" />
                  {/* Labels */}
                  {radarAxes.map((label, i) => {
                    const p = getPoint(i, 1.2);
                    return (
                      <text key={label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="fill-ink-secondary" style={{ fontSize: '11px', fontFamily: 'Inter' }}>
                        {label}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Details grid */}
            <div className="mt-6 pt-6 grid grid-cols-2 gap-x-8 gap-y-3" style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}>
              {details.map(([label, value]) => (
                <div key={label}>
                  <span className="text-label text-[12px] text-ink-tertiary">{label}</span>
                  <p className="body-text text-ink mt-0.5">{value}</p>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="mt-10 pt-6" style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-h3 text-forest">Recenzie Komunity</h2>
                <select className="px-3 py-1.5 hairline border-stone rounded bg-parchment body-small text-ink-secondary outline-none">
                  <option>Najnovšie</option>
                  <option>Najpomocnejšie</option>
                  <option>Najlepšie hodnotené</option>
                </select>
              </div>

              {/* Sample reviews */}
              {[
                { user: 'MarcoVino', badge: 'Expert', rating: 5, text: 'Výnimočné perlage a nádherná chuťová komplexnosť. Vôňa broskyní s jemným kvetinovým záverom.', helpful: 24, date: '15. marca 2025' },
                { user: 'SilviaBubbles', badge: 'Connoisseur', rating: 4, text: 'Spoľahlivá klasika. Sviežosť citrónov s delikátnou medovou notou v závere. Ideálne k ľahkým predjedlám.', helpful: 18, date: '12. marca 2025' },
              ].map((review, i) => (
                <div key={i} className="py-5" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-cream-deep flex items-center justify-center font-heading font-semibold text-[16px] text-forest">
                        {review.user[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-body font-semibold text-[14px] text-ink">{review.user}</span>
                          <BadgeCheck size={14} strokeWidth={1.5} className="text-gold" />
                        </div>
                        <span className="inline-block px-2 py-0.5 bg-gold-tint text-gold-deep rounded-sm text-[10px] font-body font-medium">{review.badge}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={review.rating} size={14} />
                      <span className="body-small text-ink-tertiary block mt-1">{review.date}</span>
                    </div>
                  </div>
                  <p className="body-text text-ink mt-3 leading-[1.75]">{review.text}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1 body-small text-ink-tertiary hover:text-forest interactive">
                      <ThumbsUp size={14} strokeWidth={1.5} /> Pomohlo ({review.helpful})
                    </button>
                    <button className="body-small text-ink-tertiary hover:text-ink interactive">Nahlásiť</button>
                  </div>
                </div>
              ))}

              <button className="w-full mt-5 py-3 hairline border-forest text-forest rounded font-body font-semibold text-[14px] interactive hover:bg-forest hover:text-parchment">
                Napísať Recenziu
              </button>
            </div>
          </div>
        </div>

        {/* Similar */}
        <div className="mt-16">
          <SectionHeader eyebrow="Odporúčame" title="Mohlo by sa vám páčiť" />
          <div className="flex gap-5 overflow-x-auto custom-scrollbar pb-4">
            {proseccos.slice(2, 8).map(p => (
              <div key={p.id} className="min-w-[280px]">
                <ProseccoCard prosecco={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProseccoDetailPage;
