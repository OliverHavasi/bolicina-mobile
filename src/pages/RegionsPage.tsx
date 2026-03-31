import { Link } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import regionValdobbiadene from '@/assets/region-valdobbiadene.jpg';
import regionConogliano from '@/assets/region-conegliano.jpg';
import regionCartizze from '@/assets/region-cartizze.jpg';
import regionAsolo from '@/assets/region-asolo.jpg';
import regionRose from '@/assets/region-rose.jpg';
import regionTreviso from '@/assets/region-treviso.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const regions = [
  { name: 'Valdobbiadene Superiore', slug: 'valdobbiadene', appellation: 'DOCG', count: '1 240', image: regionValdobbiadene, desc: 'UNESCO World Heritage. Steep terraces.' },
  { name: 'Conegliano Valdobbiadene', slug: 'conegliano', appellation: 'DOCG', count: '980', image: regionConogliano, desc: 'The historic heart of Prosecco.' },
  { name: 'Cartizze', slug: 'cartizze', appellation: 'DOCG', count: '186', image: regionCartizze, desc: 'Only 107 hectares. The most prestigious zone.' },
  { name: 'Asolo Prosecco', slug: 'asolo', appellation: 'DOCG', count: '420', image: regionAsolo, desc: 'Medieval towns and vineyards.' },
  { name: 'Prosecco DOC Rosé', slug: 'rose', appellation: 'DOC', count: '610', image: regionRose, desc: 'New category since 2020.' },
  { name: 'Prosecco DOC Treviso', slug: 'treviso', appellation: 'DOC', count: '2 100', image: regionTreviso, desc: 'The largest production area.' },
];

const RegionsPage = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <TopAppBar title={t('regions')} />
      <div className="px-4 pt-3 space-y-3">
        {regions.map(region => (
          <Link
            key={region.slug}
            to={`/regiony/${region.slug}`}
            className="block relative h-[140px] rounded-xl overflow-hidden press"
          >
            <img src={region.image} alt={region.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.85) 0%, rgba(44,24,16,0.1) 50%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-label text-[10px] bg-selce/80 text-parchment px-[6px] py-[2px] rounded-sm">{region.appellation}</span>
                <span className="font-body text-[11px] text-white/70">{region.count} {t('proseccoCount')}</span>
              </div>
              <h3 className="font-heading font-bold text-[18px] text-white leading-tight">{region.name}</h3>
              <p className="font-body text-[12px] text-white/60 mt-0.5">{region.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;
