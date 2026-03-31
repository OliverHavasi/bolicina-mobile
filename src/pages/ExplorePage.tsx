import { useState } from 'react';
import { ChevronDown, Search, X, SlidersHorizontal } from 'lucide-react';
import TopAppBar from '@/components/TopAppBar';
import ProseccoCard from '@/components/ProseccoCard';
import { proseccos, styles } from '@/data/proseccoData';
import { useLanguage } from '@/i18n/LanguageContext';

const ExplorePage = () => {
  const { t } = useLanguage();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sortOptions = [t('mostPopular'), t('bestRated'), t('priceUp'), t('priceDown'), t('newest')];
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const regions = ['Valdobbiadene DOCG', 'Conegliano DOCG', 'Cartizze DOCG', 'Asolo DOCG', 'DOC Rosé', 'DOC Treviso'];

  const toggleStyle = (s: string) => {
    setSelectedStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const allProseccos = [...proseccos, ...proseccos].slice(0, 12);

  return (
    <div style={{ paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <TopAppBar title={t('navDiscover')} />

      <div className="px-4 pt-3">
        {/* Search bar */}
        <div className="relative flex items-center h-11 bg-cream rounded-lg px-3 gap-2" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
          <Search size={18} strokeWidth={1.5} className="text-ink-3 shrink-0" />
          <input type="text" placeholder={t('searchPlaceholder')} className="flex-1 bg-transparent font-body text-[16px] text-ink placeholder:text-ink-3 outline-none" />
        </div>

        {/* Quick filter chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-3 pb-1" style={{ touchAction: 'pan-x' }}>
          {styles.map(s => (
            <button
              key={s}
              onClick={() => toggleStyle(s)}
              className={`shrink-0 h-8 px-3 rounded-full font-body text-[12px] font-medium press ${
                selectedStyles.includes(s) ? 'bg-selce text-white' : 'text-ink-2'
              }`}
              style={!selectedStyles.includes(s) ? { border: '0.5px solid hsl(var(--c-stone))' } : undefined}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mt-4 mb-3">
          <span className="font-body text-[13px] text-ink-3">8 {t('proseccoCount')}</span>
          <div className="flex items-center gap-2">
            <button className="font-heading font-semibold text-[13px] text-selce press flex items-center gap-1">
              {sortBy} <ChevronDown size={14} strokeWidth={1.5} />
            </button>
            <button onClick={() => setFiltersOpen(true)} className="press tap-target flex items-center justify-center">
              <SlidersHorizontal size={20} strokeWidth={1.5} className="text-selce" />
            </button>
          </div>
        </div>

        {/* Active filters */}
        {selectedStyles.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mb-3">
            {selectedStyles.map(f => (
              <span key={f} className="flex items-center gap-1 px-2.5 py-1 bg-oro-tint text-oro-deep rounded-full text-[12px] font-body font-medium press" style={{ border: '0.5px solid hsl(var(--c-oro))' }}>
                {f}
                <X size={12} strokeWidth={1.5} onClick={() => toggleStyle(f)} />
              </span>
            ))}
          </div>
        )}

        {/* 2-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          {allProseccos.map((p, i) => (
            <ProseccoCard key={`${p.id}-${i}`} prosecco={p} />
          ))}
        </div>
      </div>

      {/* Filter Bottom Sheet */}
      {filtersOpen && (
        <div className="fixed z-[200]" style={{ top: 0, bottom: 0, maxWidth: '390px', width: '100%', left: '50%', transform: 'translateX(-50%)' }} onClick={() => setFiltersOpen(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(44,24,16,0.4)' }} />
          <div className="absolute bottom-0 left-0 right-0 bg-parchment rounded-t-[20px] max-h-[80vh] overflow-y-auto animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-9 h-1 rounded-full bg-stone" />
            </div>
            <div className="px-4 pb-4">
              <h3 className="heading-h3 text-selce mb-4">{t('filters')}</h3>

              <FilterGroup title={t('style')}>
                <div className="flex flex-wrap gap-2">
                  {styles.map(s => (
                    <button
                      key={s}
                      onClick={() => toggleStyle(s)}
                      className={`px-3 py-1.5 rounded-full font-body text-[12px] press ${
                        selectedStyles.includes(s) ? 'bg-selce text-white' : 'text-ink-2'
                      }`}
                      style={!selectedStyles.includes(s) ? { border: '0.5px solid hsl(var(--c-stone))' } : undefined}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title={t('regionLabel')}>
                {regions.map(r => (
                  <label key={r} className="flex items-center gap-2 py-2 press">
                    <input type="checkbox" className="w-4 h-4 rounded accent-selce" />
                    <span className="font-body text-[14px] text-ink-2">{r}</span>
                  </label>
                ))}
              </FilterGroup>

              <FilterGroup title={t('certification')}>
                <div className="flex flex-wrap gap-2">
                  {['DOCG', 'DOC', 'BIO', 'Vegán'].map(c => (
                    <button key={c} className="px-3 py-1.5 rounded-full font-body text-[12px] text-ink-2 press" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
                      {c}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title={t('bottleSize')}>
                <div className="flex flex-wrap gap-2">
                  {['375ml', '750ml', '1.5L'].map(s => (
                    <button key={s} className="px-3 py-1.5 rounded-full font-body text-[12px] text-ink-2 press" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </FilterGroup>
            </div>

            <div className="sticky bottom-0 bg-parchment px-4 pb-4" style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
              <button onClick={() => setFiltersOpen(false)} className="w-full h-[52px] bg-selce text-white rounded-lg font-heading font-semibold text-[16px] press">
                {t('showResults')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FilterGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-3" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
    <div className="flex items-center justify-between mb-2">
      <span className="font-body font-semibold text-[13px] tracking-[0.04em] uppercase text-ink-2">{title}</span>
      <ChevronDown size={14} strokeWidth={1.5} className="text-ink-3" />
    </div>
    {children}
  </div>
);

export default ExplorePage;
