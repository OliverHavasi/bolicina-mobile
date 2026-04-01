import { memo } from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import type { Prosecco } from '@/data/proseccoData';

interface ProseccoCardProps {
  prosecco: Prosecco;
  variant?: 'grid' | 'list';
}

const formatCount = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');

const ProseccoCard = memo(({ prosecco, variant = 'grid' }: ProseccoCardProps) => {
  const badges: { label: string; key: string }[] = [];
  if (prosecco.isNew) badges.push({ label: 'NOVÉ', key: 'new' });
  if (prosecco.appellation === 'DOCG') badges.push({ label: 'DOCG', key: 'docg' });
  if (prosecco.appellation === 'DOC') badges.push({ label: 'DOC', key: 'doc' });
  if (prosecco.isBio) badges.push({ label: 'BIO', key: 'bio' });
  if (prosecco.isRose) badges.push({ label: 'ROSÉ', key: 'rose' });
  const visibleBadges = badges.slice(0, 2);

  const badgeStyles: Record<string, { bg: string; color: string }> = {
    new: { bg: 'hsl(var(--c-oro))', color: 'hsl(var(--c-selce))' },
    docg: { bg: 'hsl(var(--c-selce))', color: '#F5EDE3' },
    doc: { bg: 'hsl(var(--c-cotto))', color: '#F5EDE3' },
    bio: { bg: 'hsl(var(--c-salvia))', color: 'hsl(var(--c-salvia-light))' },
    rose: { bg: 'hsl(var(--c-blush))', color: 'hsl(var(--c-blush-deep))' },
  };

  if (variant === 'list') {
    return (
      <Link
        to={`/prosecco/${prosecco.id}`}
        className="flex items-center gap-3 press"
        style={{ padding: '12px 0', minHeight: '72px' }}
      >
        <div
          className="shrink-0 flex items-center justify-center overflow-hidden"
          style={{ width: 48, height: 64, background: 'hsl(var(--c-cream))', borderRadius: 4 }}
        >
          <img
            src={prosecco.image}
            alt={prosecco.name}
            loading="lazy"
            style={{ maxWidth: 36, maxHeight: 56, objectFit: 'contain', display: 'block', margin: '0 auto' }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'hsl(var(--c-oro))', marginBottom: 2 }}>
            {prosecco.producer}
          </p>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: 'hsl(var(--c-selce))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
            {prosecco.name}
          </h3>
          {prosecco.rating > 0 && (
            <div className="flex items-center gap-1 mt-[3px]">
              <StarRating rating={prosecco.rating} size={12} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: 'hsl(var(--c-selce))', whiteSpace: 'nowrap' }}>{prosecco.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <div className="shrink-0">
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: 'hsl(var(--c-selce))', whiteSpace: 'nowrap' }}>{prosecco.price}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/prosecco/${prosecco.id}`}
      className="press"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'hsl(var(--c-cream))',
        border: '0.5px solid hsl(var(--c-stone))',
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        minWidth: 0,
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Bottle area */}
      <div
        className="relative"
        style={{
          width: '100%',
          height: 180,
          background: 'hsl(var(--c-parchment))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '8px 16px',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={prosecco.image}
          alt={prosecco.name}
          loading="lazy"
          style={{
            maxHeight: 148,
            maxWidth: 80,
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
            filter: 'drop-shadow(0 6px 14px rgba(44,24,16,.13))',
          }}
        />
        {/* Badges */}
        {visibleBadges.length > 0 && (
          <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'nowrap', maxWidth: 'calc(100% - 40px)' }}>
            {visibleBadges.map((b) => (
              <span
                key={b.key}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  padding: '3px 6px',
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                  lineHeight: 1.3,
                  background: badgeStyles[b.key]?.bg,
                  color: badgeStyles[b.key]?.color,
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        )}
        <button className="absolute bottom-2 right-2 press" style={{ color: 'hsl(var(--c-stone-mid))' }} onClick={(e) => e.preventDefault()}>
          <Heart size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Producer */}
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'hsl(var(--c-oro))', marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '0 0 3px 0' }}>
          {prosecco.producer}
        </p>
        {/* Name */}
        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: 'hsl(var(--c-selce))',
            lineHeight: 1.25,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: 4,
            minHeight: 38,
            margin: '0 0 4px 0',
          }}
        >
          {prosecco.name}
        </h3>
        {/* Region */}
        <div className="flex items-center gap-[3px]" style={{ marginBottom: 6, overflow: 'hidden' }}>
          <MapPin size={11} strokeWidth={1.5} style={{ color: 'hsl(var(--c-ink-3))', flexShrink: 0 }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12, color: 'hsl(var(--c-ink-3))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {prosecco.region}
          </span>
        </div>
        {/* Style chip */}
        <span
          style={{
            display: 'inline-block',
            background: 'hsl(var(--c-oro-tint))',
            border: '0.5px solid rgba(200,168,76,.3)',
            color: 'hsl(var(--c-oro-deep))',
            padding: '3px 9px',
            borderRadius: 100,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: 11,
            marginBottom: 8,
            alignSelf: 'flex-start',
          }}
        >
          {prosecco.style}
        </span>
        {/* Rating + Price */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '0.5px solid hsl(var(--c-stone))',
            paddingTop: 8,
            marginTop: 'auto',
            gap: 8,
          }}
        >
          <div className="flex items-center gap-1" style={{ minWidth: 0, flex: 1 }}>
            {prosecco.rating > 0 ? (
              <>
                <StarRating rating={prosecco.rating} size={12} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: 'hsl(var(--c-selce))', whiteSpace: 'nowrap' }}>
                  {prosecco.rating.toFixed(1)}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 11, color: 'hsl(var(--c-ink-3))', whiteSpace: 'nowrap' }}>
                  ({formatCount(prosecco.reviewCount)})
                </span>
              </>
            ) : (
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 11, color: 'hsl(var(--c-ink-3))', whiteSpace: 'nowrap' }}>—</span>
            )}
          </div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: 'hsl(var(--c-selce))', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {prosecco.price}
          </span>
        </div>
      </div>
    </Link>
  );
});

ProseccoCard.displayName = 'ProseccoCard';
export default ProseccoCard;
