import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import regionValdobbiadene from '@/assets/region-valdobbiadene.jpg';
import regionConogliano from '@/assets/region-conegliano.jpg';
import regionCartizze from '@/assets/region-cartizze.jpg';
import regionAsolo from '@/assets/region-asolo.jpg';
import regionRose from '@/assets/region-rose.jpg';
import regionTreviso from '@/assets/region-treviso.jpg';

const regions = [
  { name: 'Valdobbiadene Superiore', slug: 'valdobbiadene', appellation: 'DOCG', count: '1 240', image: regionValdobbiadene, desc: 'UNESCO svetové dedičstvo. Strmé terasy s výhľadom na Dolomity.' },
  { name: 'Conegliano Valdobbiadene', slug: 'conegliano', appellation: 'DOCG', count: '980', image: regionConogliano, desc: 'Historické srdce Prosecca. Ranné hmly a zelené kopce Veneta.' },
  { name: 'Cartizze', slug: 'cartizze', appellation: 'DOCG', count: '186', image: regionCartizze, desc: 'Len 107 hektárov. Najprestížnejšia zóna Prosecca na svete.' },
  { name: 'Asolo Prosecco', slug: 'asolo', appellation: 'DOCG', count: '420', image: regionAsolo, desc: 'Stredoveké mestečká obklopené kamennými múrmi a vinicami.' },
  { name: 'Prosecco DOC Rosé', slug: 'rose', appellation: 'DOC', count: '610', image: regionRose, desc: 'Nová kategória od 2020. Ružové tóny Pinot Nero v harmónii s Glerou.' },
  { name: 'Prosecco DOC Treviso', slug: 'treviso', appellation: 'DOC', count: '2 100', image: regionTreviso, desc: 'Rozsiahle aluviálne pláne. Najväčšia produkčná oblasť Prosecca.' },
];

const RegionsPage = () => {
  return (
    <div className="pt-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 section-padding">
        <SectionHeader
          eyebrow="Terroir Prosecca"
          title="Regióny a Appellácie"
          subtitle="Objavte unikátne terroir, ktoré definujú charakter každého Prosecca"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <Link
              key={region.slug}
              to={`/regiony/${region.slug}`}
              className="group relative aspect-[16/10] overflow-hidden rounded-lg interactive cursor-pointer"
              style={{ borderRadius: '50% 50% 8px 8px / 16px 16px 8px 8px', boxShadow: 'var(--shadow-card)' }}
            >
              <img
                src={region.image}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover interactive group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,45,34,0.9) 0%, rgba(27,45,34,0.2) 50%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-body font-semibold tracking-[0.08em] uppercase" style={{ background: 'rgba(200,168,76,0.2)', border: '0.5px solid rgba(200,168,76,0.5)', color: 'hsl(var(--color-gold-light))' }}>
                    {region.appellation}
                  </span>
                  <span className="font-body font-light text-[12px] text-parchment/70">{region.count} prosecco</span>
                </div>
                <h3 className="font-heading font-semibold text-[26px] text-parchment leading-[1.2]">{region.name}</h3>
                <p className="body-small text-parchment/60 mt-2">{region.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionsPage;
