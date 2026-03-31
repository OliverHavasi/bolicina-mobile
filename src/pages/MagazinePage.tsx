import { Link } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import magazineFeatured from '@/assets/magazine-featured.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const MagazinePage = () => {
  const { t } = useLanguage();

  const articles = [
    { slug: 'sprievodca-valdobbiadene', title: 'Guida Completa a Valdobbiadene DOCG', cat: 'Guida', time: '8 min', author: 'Elena Rossi' },
    { slug: 'cartizze-najdrahsia', title: 'Cartizze: Il Vigneto Più Costoso', cat: 'Regione', time: '5 min', author: 'Luca Bianchi' },
    { slug: 'interview-hamsik', title: 'Intervista con HAMSIK Winery', cat: 'Interview', time: '12 min', author: 'Anna Moretti' },
    { slug: 'rose-trend', title: 'Rosé Prosecco: Trend o Tradizione?', cat: 'Analisi', time: '6 min', author: 'Paolo Verdi' },
    { slug: 'charmat-metoda', title: 'Il Metodo Charmat: Il Segreto del Prosecco', cat: 'Educazione', time: '7 min', author: 'Elena Rossi' },
  ];

  return (
    <div style={{ paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <TopAppBar title={t('magazine')} />

      <div className="px-4 pt-3">
        <Link to={`/magazin/${articles[0].slug}`} className="block relative h-[200px] rounded-xl overflow-hidden press mb-4">
          <img src={magazineFeatured} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.85) 0%, rgba(44,24,16,0.1) 50%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <span className="text-micro text-[10px] text-oro">{articles[0].cat}</span>
            <h2 className="font-heading font-bold text-[18px] text-white leading-tight mt-0.5">{articles[0].title}</h2>
            <span className="font-body text-[12px] text-white/60 mt-1">{articles[0].author} · {articles[0].time}</span>
          </div>
        </Link>

        {articles.slice(1).map((a, i) => (
          <Link
            key={a.slug}
            to={`/magazin/${a.slug}`}
            className="flex items-center gap-3 py-3 press"
            style={i < articles.length - 2 ? { borderBottom: '0.5px solid hsl(var(--c-stone))' } : undefined}
          >
            <div className="w-[72px] h-[72px] rounded-lg overflow-hidden shrink-0">
              <img src={magazineFeatured} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-micro text-[11px] text-oro">{a.cat}</span>
              <h3 className="font-heading font-semibold text-[15px] text-selce leading-tight mt-0.5 line-clamp-2">{a.title}</h3>
              <span className="font-body text-[12px] text-ink-3">{a.author} · {a.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
