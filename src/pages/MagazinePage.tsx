import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import magazineFeatured from '@/assets/magazine-featured.jpg';

const articles = [
  { slug: 'sprievodca-valdobbiadene', title: 'Kompletný Sprievodca Valdobbiadene DOCG', cat: 'Sprievodca', time: '8 min', author: 'Elena Rossi' },
  { slug: 'cartizze-najdrahsia', title: 'Cartizze: Najdrahšia Vinica Prosecca', cat: 'Región', time: '5 min', author: 'Luca Bianchi' },
  { slug: 'interview-bisol', title: 'Interview s Vinárstvom Bisol 1542', cat: 'Interview', time: '12 min', author: 'Anna Moretti' },
  { slug: 'rose-trend', title: 'Rosé Prosecco: Trend alebo Tradícia?', cat: 'Analýza', time: '6 min', author: 'Paolo Verdi' },
  { slug: 'charmat-metoda', title: 'Charmat Metóda: Tajomstvo Prosecca', cat: 'Vzdelávanie', time: '7 min', author: 'Elena Rossi' },
  { slug: 'parovanie-jedal', title: 'Párování Jedál s Proseccom', cat: 'Sprievodca', time: '9 min', author: 'Marco Neri' },
];

const MagazinePage = () => {
  return (
    <div className="pt-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 section-padding">
        <SectionHeader
          eyebrow="Redakcia Bolicina"
          title="Magazín"
          subtitle="Články, rozhovory a sprievodcovia svetom Prosecca"
        />

        {/* Featured */}
        <Link
          to={`/magazin/${articles[0].slug}`}
          className="group relative aspect-[21/9] max-md:aspect-video rounded-lg overflow-hidden mb-12"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <img src={magazineFeatured} alt="" className="absolute inset-0 w-full h-full object-cover interactive group-hover:scale-[1.03]" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(27,45,34,0.9) 0%, rgba(27,45,34,0.3) 60%)' }} />
          <div className="absolute bottom-0 left-0 p-10 max-md:p-6 z-10 max-w-[500px]">
            <span className="inline-block px-3 py-1 bg-gold/20 hairline border-gold/50 text-gold-light rounded-sm text-[10px] font-body font-semibold tracking-[0.08em] uppercase mb-3">{articles[0].cat}</span>
            <h2 className="font-heading font-semibold text-[32px] max-md:text-[24px] text-parchment leading-[1.2]">{articles[0].title}</h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="body-small text-parchment/60">{articles[0].author}</span>
              <span className="body-small text-parchment/60">·</span>
              <span className="body-small text-parchment/60">{articles[0].time} čítania</span>
            </div>
          </div>
        </Link>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.slice(1).map((article) => (
            <Link
              key={article.slug}
              to={`/magazin/${article.slug}`}
              className="group bg-cream hairline border-stone rounded-lg overflow-hidden interactive hover:-translate-y-1 hover:border-gold"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={magazineFeatured} alt="" className="w-full h-full object-cover interactive group-hover:scale-[1.04]" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="text-micro text-[10px] text-gold">{article.cat}</span>
                <h3 className="font-heading font-semibold text-[18px] text-forest mt-1 leading-[1.3]">{article.title}</h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="body-small text-ink-tertiary">{article.author}</span>
                  <span className="body-small text-ink-tertiary">·</span>
                  <span className="body-small text-ink-tertiary">{article.time} čítania</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
