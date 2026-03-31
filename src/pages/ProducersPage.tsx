import { Link } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import StarRating from '@/components/StarRating';
import { producers } from '@/data/proseccoData';
import { useLanguage } from '@/i18n/LanguageContext';

const ProducersPage = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <TopAppBar title={t('producers')} />
      <div className="px-4 pt-3 space-y-3">
        {producers.map(p => (
          <Link
            key={p.id}
            to={`/producenti/${p.slug}`}
            className="flex items-center gap-3 bg-cream rounded-lg p-3 press"
            style={{ border: '0.5px solid hsl(var(--c-stone))', boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center font-heading font-semibold text-[18px] text-selce shrink-0" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-[16px] text-selce">{p.name}</h3>
              <span className="font-body text-[12px] text-ink-3">{p.region}</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-body font-medium text-[12px] text-oro">{p.proseccoCount} {t('proseccoCount')}</span>
                {p.avgRating > 0 && <StarRating rating={p.avgRating} size={10} showScore />}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProducersPage;
