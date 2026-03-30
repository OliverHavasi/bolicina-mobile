import { useState } from 'react';
import { ChevronDown, Search, Grid3X3, List, MapPin, X } from 'lucide-react';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { proseccos, styles } from '@/data/proseccoData';

const regions = [
  { name: 'Valdobbiadene DOCG', count: 1240 },
  { name: 'Conegliano DOCG', count: 980 },
  { name: 'Cartizze DOCG', count: 186 },
  { name: 'Asolo DOCG', count: 420 },
  { name: 'DOC Rosé', count: 610 },
  { name: 'DOC Treviso', count: 2100 },
];

const sortOptions = ['Najpopulárnejšie', 'Najlepšie hodnotené', 'Cena ↑', 'Cena ↓', 'Najnovšie'];

const ExplorePage = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [ratingMin, setRatingMin] = useState(3.0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleStyle = (s: string) => {
    setSelectedStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const toggleRegion = (r: string) => {
    setSelectedRegions(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]);
  };

  const activeFilters = [...selectedStyles, ...selectedRegions];
  const allProseccos = [...proseccos, ...proseccos].slice(0, 12); // Extended for demo

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-[280px] shrink-0 sticky top-[84px] self-start max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
              <h3 className="font-heading font-semibold text-[22px] text-forest">Filtre</h3>
              <button className="font-body font-medium text-[12px] text-gold" onClick={() => { setSelectedStyles([]); setSelectedRegions([]); }}>Resetovať</button>
            </div>

            {/* Style */}
            <FilterGroup title="ŠTÝL">
              <div className="flex flex-wrap gap-2">
                {styles.map(s => (
                  <button
                    key={s}
                    onClick={() => toggleStyle(s)}
                    className={`px-3 py-1.5 rounded-full font-body text-[12px] interactive ${
                      selectedStyles.includes(s)
                        ? 'bg-forest text-parchment border-forest'
                        : 'text-ink-secondary hairline border-stone hover:border-gold'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* Region */}
            <FilterGroup title="REGIÓN">
              {regions.map(r => (
                <label key={r.name} className="flex items-center gap-2 py-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(r.name)}
                    onChange={() => toggleRegion(r.name)}
                    className="w-3.5 h-3.5 rounded-sm accent-gold cursor-pointer"
                  />
                  <span className="flex-1 body-small text-ink-secondary group-hover:text-ink interactive">{r.name}</span>
                  <span className="body-small text-ink-tertiary text-[11px]">{r.count.toLocaleString()}</span>
                </label>
              ))}
            </FilterGroup>

            {/* Rating */}
            <FilterGroup title="HODNOTENIE">
              <div className="mt-2">
                <input
                  type="range"
                  min="3"
                  max="5"
                  step="0.1"
                  value={ratingMin}
                  onChange={(e) => setRatingMin(Number(e.target.value))}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between mt-1">
                  <span className="body-small text-ink-tertiary">3.0</span>
                  <span className="font-heading font-semibold text-[16px] text-forest">{ratingMin.toFixed(1)}+</span>
                  <span className="body-small text-ink-tertiary">5.0</span>
                </div>
              </div>
            </FilterGroup>

            {/* Certification */}
            <FilterGroup title="CERTIFIKÁCIA">
              <div className="flex flex-wrap gap-2">
                {['DOCG', 'DOC', 'Bio/Organik', 'Vegán'].map(c => (
                  <button key={c} className="px-3 py-1.5 rounded-full font-body text-[12px] text-ink-secondary hairline border-stone hover:border-gold interactive">
                    {c}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* Bottle size */}
            <FilterGroup title="VEĽKOSŤ FĽAŠE">
              <div className="flex flex-wrap gap-2">
                {['375ml', '750ml', '1.5L', '3L'].map(s => (
                  <button key={s} className="px-3 py-1.5 rounded-full font-body text-[12px] text-ink-secondary hairline border-stone hover:border-gold interactive">
                    {s}
                  </button>
                ))}
              </div>
            </FilterGroup>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <span className="body-text text-ink-secondary">
                Zobrazených 1–{allProseccos.length} z 4 820 prosecco
              </span>
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  className="lg:hidden flex items-center gap-1.5 px-4 py-2 hairline border-stone rounded-full body-small text-ink-secondary"
                  onClick={() => setFiltersOpen(true)}
                >
                  Filtre <ChevronDown size={14} strokeWidth={1.5} />
                </button>

                {/* Active filters */}
                {activeFilters.length > 0 && (
                  <div className="hidden md:flex gap-1.5">
                    {activeFilters.map(f => (
                      <span key={f} className="flex items-center gap-1 px-2.5 py-1 bg-gold-tint text-gold-deep hairline border-gold/30 rounded-full text-[12px] font-body font-medium">
                        {f}
                        <X size={12} strokeWidth={1.5} className="cursor-pointer" />
                      </span>
                    ))}
                  </div>
                )}

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 hairline border-stone rounded bg-parchment body-small text-ink-secondary outline-none"
                >
                  {sortOptions.map(o => <option key={o}>{o}</option>)}
                </select>

                {/* View toggle */}
                <div className="flex gap-1">
                  <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'text-forest' : 'text-ink-tertiary'}`}>
                    <Grid3X3 size={18} strokeWidth={1.5} />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'text-forest' : 'text-ink-tertiary'}`}>
                    <List size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {allProseccos.map((p, i) => (
                <ProseccoCard key={`${p.id}-${i}`} prosecco={p} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-3 py-2 hairline border-stone rounded body-small text-ink-secondary interactive hover:border-gold">←</button>
              {[1, 2, 3, '...', 201].map((page, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 rounded font-body text-[14px] interactive ${
                    page === 1 ? 'bg-forest text-parchment' : 'text-ink-secondary hover:bg-cream'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 hairline border-stone rounded body-small text-ink-secondary interactive hover:border-gold">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filters bottom sheet */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-forest/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-parchment rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-[22px] text-forest">Filtre</h3>
              <button onClick={() => setFiltersOpen(false)}><X size={24} strokeWidth={1.5} className="text-forest" /></button>
            </div>
            <p className="body-small text-ink-tertiary mb-4">Mobilné filtre — rovnaké ako desktop sidebar</p>
            <button
              onClick={() => setFiltersOpen(false)}
              className="w-full h-[46px] bg-forest text-parchment rounded font-body font-semibold text-[14px]"
            >
              Použiť filtre
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FilterGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-4" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
    <button className="flex items-center justify-between w-full mb-3">
      <span className="font-body font-semibold text-[13px] tracking-[0.06em] uppercase text-ink-secondary">{title}</span>
      <ChevronDown size={14} strokeWidth={1.5} className="text-ink-tertiary" />
    </button>
    {children}
  </div>
);

export default ExplorePage;
