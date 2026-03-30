import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  showScore?: boolean;
  showCount?: boolean;
  count?: number;
  className?: string;
}

const StarRating = ({ rating, size = 13, showScore = false, showCount = false, count = 0, className = '' }: StarRatingProps) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(1, Math.max(0, rating - (star - 1)));
          return (
            <div key={star} className="relative" style={{ width: size, height: size }}>
              <Star
                size={size}
                strokeWidth={1.5}
                className="text-stone absolute inset-0"
              />
              <div className="overflow-hidden absolute inset-0" style={{ width: `${fill * 100}%` }}>
                <Star
                  size={size}
                  strokeWidth={1.5}
                  className="text-gold fill-gold"
                />
              </div>
            </div>
          );
        })}
      </div>
      {showScore && (
        <span className="font-heading font-semibold text-lg text-forest ml-1">
          {rating.toFixed(1)}
        </span>
      )}
      {showCount && (
        <span className="body-small text-ink-tertiary">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
};

export default StarRating;
