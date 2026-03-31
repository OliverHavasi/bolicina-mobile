import { useState, useRef, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { proseccos, producers } from '@/data/proseccoData';
import StarRating from '@/components/StarRating';
import { useLanguage } from '@/i18n/LanguageContext';

const SearchPage = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredProseccos = query.length > 0
    ? proseccos.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.producer.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  const filteredProducers = query.length > 0
    ? producers.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  const trendingItems = proseccos.slice(0, 5);

  return (
    <div className="bg-parchment min-h-screen" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="flex items-center gap-3 px-4 py-2">
        <div className="flex-1 flex items-center h-11 bg-cream rounded-lg px-3 gap-2" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
          <Search size={18} strokeWidth={1.5} className="text-ink-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="flex-1 bg-transparent font-body text-[16px] text-ink placeholder:text-ink-3 outline-none"
          />
        </div>
        <button onClick={() => navigate(-1)} className="font-body font-medium text-[14px] text-oro press shrink-0">
          {t('cancel')}
        </button>
      </div>

      <div className="px-4">
        {query.length === 0 ? (
          <>
            <span className="text-micro text-[11px] text-ink-3 block mt-3 mb-2">{t('trendingToday')}</span>
            {trendingItems.map((item, i) => (
              <Link key={item.id} to={`/prosecco/${item.id}`} className="flex items-center h-14 gap-3 press" style={i < trendingItems.length - 1 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
                <span className="font-heading font-bold text-[18px] text-stone w-6 text-center">{i + 1}</span>
                <img src={item.image} alt="" className="w-8 h-11 object-contain" />
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-semibold text-[14px] text-selce truncate">{item.name}</div>
                  <div className="font-body text-[12px] text-ink-3">{item.producer}</div>
                </div>
                {item.rating > 0 && <StarRating rating={item.rating} size={10} />}
              </Link>
            ))}
          </>
        ) : (
          <>
            {filteredProseccos.length > 0 && (
              <>
                <span className="text-micro text-[11px] text-ink-3 block mt-3 mb-2">Prosecco</span>
                {filteredProseccos.map((item, i) => (
                  <Link key={item.id} to={`/prosecco/${item.id}`} className="flex items-center h-14 gap-3 press" style={i < filteredProseccos.length - 1 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
                    <img src={item.image} alt="" className="w-8 h-11 object-contain" />
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-semibold text-[14px] text-selce truncate">{item.name}</div>
                      <div className="font-body text-[12px] text-ink-3">{item.producer}</div>
                    </div>
                    <span className="font-body text-[13px] text-ink-2">{item.price}</span>
                  </Link>
                ))}
              </>
            )}
            {filteredProducers.length > 0 && (
              <>
                <span className="text-micro text-[11px] text-ink-3 block mt-3 mb-2">{t('producers')}</span>
                {filteredProducers.map((item, i) => (
                  <Link key={item.id} to={`/producenti/${item.slug}`} className="flex items-center h-14 gap-3 press" style={i < filteredProducers.length - 1 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}>
                    <div className="w-8 h-8 rounded-full bg-cream-deep flex items-center justify-center font-heading font-semibold text-[12px] text-selce">{item.initials}</div>
                    <div className="flex-1">
                      <div className="font-heading font-semibold text-[14px] text-selce">{item.name}</div>
                      <div className="font-body text-[12px] text-ink-3 flex items-center gap-0.5"><MapPin size={10} strokeWidth={1.5} /> {item.region}</div>
                    </div>
                  </Link>
                ))}
              </>
            )}
            {filteredProseccos.length === 0 && filteredProducers.length === 0 && (
              <div className="text-center py-16">
                <p className="font-heading font-semibold text-[18px] text-selce">{t('noResults')}</p>
                <p className="font-body text-[14px] text-ink-3 mt-1">{t('tryAnother')}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
