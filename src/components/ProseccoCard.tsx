import { memo } from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import type { Prosecco } from '@/data/proseccoData';

interface ProseccoCardProps {
  prosecco: Prosecco;
}

const ProseccoCard = memo(({ prosecco }: ProseccoCardProps) => {
  return (
    <Link
      to={`/prosecco/${prosecco.id}`}
      className="group block bg-parchment hairline border-stone rounded-lg overflow-hidden cursor-pointer interactive hover:-translate-y-1 hover:border-gold"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Bottle area */}
      <div className="relative bg-cream h-[220px] flex items-center justify-center"
        style={{ background: 'radial-gradient(circle, rgba(242,202,122,0.08) 0%, transparent 70%) hsl(var(--color-cream))' }}>
        <img
          src={prosecco.image}
          alt={prosecco.name}
          className="max-h-[180px] object-contain drop-shadow-lg"
          loading="lazy"
        />
        {/* Badges top right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {prosecco.appellation === 'DOCG' && (
            <span className="text-label text-[10px] tracking-[0.1em] bg-forest text-parchment px-2 py-0.5 rounded-sm">DOCG</span>
          )}
          {prosecco.isBio && (
            <span className="text-label text-[10px] tracking-[0.1em] bg-forest-mid text-parchment px-2 py-0.5 rounded-sm">BIO</span>
          )}
          {prosecco.isRose && (
            <span className="text-label text-[10px] tracking-[0.1em] bg-blush/30 text-blush-deep px-2 py-0.5 rounded-sm">ROSÉ</span>
          )}
        </div>
        {/* New badge top left */}
        {prosecco.isNew && (
          <span className="absolute top-3 left-3 text-label text-[10px] tracking-[0.08em] bg-gold text-forest px-2 py-0.5 rounded-sm">
            NOVÉ
          </span>
        )}
        {/* Wishlist heart */}
        <button
          className="absolute bottom-3 right-3 text-stone-mid hover:text-gold interactive"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content area */}
      <div className="p-4 pb-3.5">
        <span className="text-micro text-[11px] tracking-[0.12em] text-gold font-semibold">
          {prosecco.producer.toUpperCase()}
        </span>
        <h3 className="font-heading font-semibold text-lg text-forest leading-[1.25] mt-1 line-clamp-2">
          {prosecco.name}
        </h3>
        <div className="flex items-center gap-1 mt-1.5 text-ink-tertiary">
          <MapPin size={12} strokeWidth={1.5} />
          <span className="body-small">{prosecco.region}</span>
        </div>
        <span className="inline-block mt-2 bg-gold-tint text-gold-deep hairline border-gold/30 rounded-sm px-2 py-0.5 font-body font-medium text-[11px] tracking-[0.05em]">
          {prosecco.style}
        </span>

        {/* Rating row */}
        <div className="mt-2 pt-2 hairline border-t border-stone flex items-center justify-between">
          <StarRating
            rating={prosecco.rating}
            showScore
            showCount
            count={prosecco.reviewCount}
          />
          <span className="font-body font-medium text-[13px] text-ink-secondary">
            {prosecco.price}
          </span>
        </div>

        {/* CTA row */}
        <div className="flex items-center justify-between pt-2.5">
          <button
            className="hairline border-stone text-ink-secondary rounded px-3.5 py-1.5 font-body font-medium text-[12px] hover:border-gold hover:text-forest interactive"
            onClick={(e) => e.preventDefault()}
          >
            Ohodnotiť
          </button>
          <span className="font-body font-medium text-[12px] text-gold">
            Pridať do zoznamu
          </span>
        </div>
      </div>
    </Link>
  );
});

ProseccoCard.displayName = 'ProseccoCard';

export default ProseccoCard;
