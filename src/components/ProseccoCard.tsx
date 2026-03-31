import { memo } from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import type { Prosecco } from '@/data/proseccoData';

interface ProseccoCardProps {
  prosecco: Prosecco;
  variant?: 'grid' | 'list';
}

const ProseccoCard = memo(({ prosecco, variant = 'grid' }: ProseccoCardProps) => {
  if (variant === 'list') {
    return (
      <Link
        to={`/prosecco/${prosecco.id}`}
        className="flex items-center gap-3 py-3 press"
      >
        <div className="w-[52px] h-[68px] bg-cream rounded flex items-center justify-center shrink-0">
          <img src={prosecco.image} alt={prosecco.name} className="max-h-[60px] object-contain" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-micro text-[11px] tracking-[0.08em] text-oro">{prosecco.producer.toUpperCase()}</span>
          <h3 className="font-heading font-semibold text-[16px] text-selce leading-tight truncate">{prosecco.name}</h3>
          <StarRating rating={prosecco.rating} size={12} showScore />
        </div>
        <div className="shrink-0 text-right">
          <span className="font-body font-medium text-[14px] text-ink-2">{prosecco.price}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/prosecco/${prosecco.id}`}
      className="block bg-cream hairline border-stone rounded-lg overflow-hidden press"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Bottle area */}
      <div className="relative aspect-[2/3] max-h-[180px] bg-parchment flex items-center justify-center"
        style={{ background: 'radial-gradient(circle, rgba(200,168,76,0.06) 0%, transparent 70%) hsl(var(--c-parchment))' }}>
        <img src={prosecco.image} alt={prosecco.name} className="max-h-[150px] object-contain drop-shadow-md" loading="lazy" />
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {prosecco.appellation === 'DOCG' && (
            <span className="text-label text-[10px] tracking-[0.08em] bg-selce text-parchment px-[7px] py-[3px] rounded-sm">DOCG</span>
          )}
          {prosecco.isBio && (
            <span className="text-label text-[10px] tracking-[0.08em] bg-salvia text-salvia-light px-[7px] py-[3px] rounded-sm">BIO</span>
          )}
          {prosecco.isRose && (
            <span className="text-label text-[10px] tracking-[0.08em] bg-blush text-blush-deep px-[7px] py-[3px] rounded-sm">ROSÉ</span>
          )}
        </div>
        {prosecco.isNew && (
          <span className="absolute top-2 left-2 text-label text-[10px] tracking-[0.08em] bg-oro text-selce px-[7px] py-[3px] rounded-sm">NOVÉ</span>
        )}
        <button className="absolute bottom-2 right-2 text-stone-mid press" onClick={(e) => e.preventDefault()}>
          <Heart size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 pb-2.5">
        <span className="text-label text-[11px] tracking-[0.08em] text-oro">{prosecco.producer.toUpperCase()}</span>
        <h3 className="font-heading font-semibold text-[16px] text-selce leading-tight mt-0.5 line-clamp-2">{prosecco.name}</h3>
        <div className="flex items-center gap-1 mt-1 text-ink-3">
          <MapPin size={11} strokeWidth={1.5} />
          <span className="body-small text-[12px]">{prosecco.region}</span>
        </div>
        <span className="inline-block mt-1.5 bg-oro-tint text-oro-deep hairline border-oro/30 rounded-sm px-2 py-[2px] font-body font-medium text-[11px] tracking-[0.05em]">
          {prosecco.style}
        </span>
        <div className="mt-2 pt-2 hairline border-t border-stone flex items-center justify-between">
          <StarRating rating={prosecco.rating} showScore showCount count={prosecco.reviewCount} size={11} />
          <span className="font-body font-medium text-[13px] text-ink-2">{prosecco.price}</span>
        </div>
      </div>
    </Link>
  );
});

ProseccoCard.displayName = 'ProseccoCard';
export default ProseccoCard;
