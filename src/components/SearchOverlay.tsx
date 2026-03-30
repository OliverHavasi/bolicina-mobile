import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { proseccos, producers } from '@/data/proseccoData';
import StarRating from './StarRating';

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const filteredProseccos = query.length > 0
    ? proseccos.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.producer.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const filteredProducers = query.length > 0
    ? producers.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  const trendingItems = proseccos.slice(0, 5);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-forest/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="mx-auto mt-20 max-w-[720px] max-md:mx-4 bg-parchment rounded-lg overflow-hidden"
        style={{ boxShadow: '0 24px 80px rgba(27,45,34,0.25)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center px-5 h-16 hairline border-b border-stone">
          <Search size={20} strokeWidth={1.5} className="text-gold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hľadajte prosecco, producenta, región..."
            className="flex-1 ml-3 bg-transparent font-body text-[17px] text-ink placeholder:text-ink-tertiary outline-none"
          />
          <kbd className="hairline border-stone px-1.5 py-0.5 font-body font-medium text-[11px] text-ink-tertiary rounded-sm">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[500px] overflow-y-auto">
          {query.length === 0 ? (
            <>
              <div className="px-5 pt-3 pb-1.5">
                <span className="text-micro text-[11px] tracking-[0.1em] text-ink-tertiary">V TRENDE DNES</span>
              </div>
              {trendingItems.map((item, i) => (
                <Link
                  key={item.id}
                  to={`/prosecco/${item.id}`}
                  onClick={onClose}
                  className="flex items-center px-5 h-14 hover:bg-cream interactive"
                >
                  <span className="font-heading font-bold text-[20px] text-stone w-7">{i + 1}</span>
                  <img src={item.image} alt="" className="w-9 h-12 object-contain mx-3" />
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-semibold text-[15px] text-forest truncate">{item.name}</div>
                    <div className="body-small text-ink-tertiary">{item.producer}</div>
                  </div>
                  <StarRating rating={item.rating} size={12} />
                </Link>
              ))}
            </>
          ) : (
            <>
              {filteredProseccos.length > 0 && (
                <>
                  <div className="px-5 pt-3 pb-1.5">
                    <span className="text-micro text-[11px] tracking-[0.1em] text-ink-tertiary">PROSECCO</span>
                  </div>
                  {filteredProseccos.map((item) => (
                    <Link
                      key={item.id}
                      to={`/prosecco/${item.id}`}
                      onClick={onClose}
                      className="flex items-center px-5 h-14 hover:bg-cream interactive cursor-pointer"
                    >
                      <img src={item.image} alt="" className="w-9 h-12 object-contain mr-3" />
                      <div className="flex-1 min-w-0">
                        <div className="font-heading font-semibold text-[15px] text-forest truncate">{item.name}</div>
                        <div className="body-small text-ink-tertiary">{item.producer}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <StarRating rating={item.rating} size={12} />
                        <span className="body-small text-ink-secondary">{item.price}</span>
                      </div>
                    </Link>
                  ))}
                </>
              )}
              {filteredProducers.length > 0 && (
                <>
                  <div className="px-5 pt-3 pb-1.5">
                    <span className="text-micro text-[11px] tracking-[0.1em] text-ink-tertiary">PRODUCENTI</span>
                  </div>
                  {filteredProducers.map((item) => (
                    <Link
                      key={item.id}
                      to={`/producenti/${item.slug}`}
                      onClick={onClose}
                      className="flex items-center px-5 h-14 hover:bg-cream interactive cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-cream-deep flex items-center justify-center font-heading font-semibold text-[14px] text-forest mr-3">
                        {item.initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-heading font-semibold text-[15px] text-forest">{item.name}</div>
                        <div className="body-small text-ink-tertiary flex items-center gap-1">
                          <MapPin size={10} strokeWidth={1.5} /> {item.region}
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              )}
              {filteredProseccos.length === 0 && filteredProducers.length === 0 && (
                <div className="px-5 py-12 text-center">
                  <p className="font-heading font-semibold text-xl text-forest">Žiadne výsledky</p>
                  <p className="body-small text-ink-secondary mt-1">Skúste iný výraz</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
