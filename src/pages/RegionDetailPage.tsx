import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { proseccos, producers } from '@/data/proseccoData';
import regionValdobbiadene from '@/assets/region-valdobbiadene.jpg';

const regionData: Record<string, { name: string; appellation: string; desc: string; facts: string[] }> = {
  valdobbiadene: { name: 'Valdobbiadene Superiore', appellation: 'DOCG', desc: 'Valdobbiadene Superiore DOCG je srdcom produkcie prémiového Prosecca. Situovaný na strmých kopcoch severného Veneta, tento región je súčasťou UNESCO svetového dedičstva od roku 2019. Terasovité vinice na svahoch s nadmorskou výškou 100-500 metrov vytvárajú ideálne podmienky pre pestovanie hrozna Glera.', facts: ['5 800 ha', 'Glera', '100-500 m n.m.', '2009'] },
  conegliano: { name: 'Conegliano Valdobbiadene', appellation: 'DOCG', desc: 'Conegliano je historickým centrom Prosecca, kde sa nachádza aj prestížna enologická škola.', facts: ['7 200 ha', 'Glera', '50-400 m n.m.', '2009'] },
  cartizze: { name: 'Cartizze', appellation: 'DOCG', desc: 'Cartizze je len 107 hektárový kopec — najprestížnejšia a najdrahšia vinica Prosecca.', facts: ['107 ha', 'Glera', '300 m n.m.', '2009'] },
  asolo: { name: 'Asolo Prosecco', appellation: 'DOCG', desc: 'Asolo leží medzi Benátkami a Dolomitmi, obklopené stredovekými mestečkami.', facts: ['2 500 ha', 'Glera', '100-450 m n.m.', '2009'] },
  rose: { name: 'Prosecco DOC Rosé', appellation: 'DOC', desc: 'Rosé Prosecco kategória bola oficiálne zavedená v roku 2020 a rýchlo si získala obľubu.', facts: ['N/A', 'Glera, Pinot Nero', 'Rôzne', '2020'] },
  treviso: { name: 'Prosecco DOC Treviso', appellation: 'DOC', desc: 'Najväčšia produkčná oblasť Prosecca na rozsiahlych aluviálnych pláňach.', facts: ['24 000 ha', 'Glera', '0-300 m n.m.', '2009'] },
};

const RegionDetailPage = () => {
  const { slug } = useParams();
  const region = regionData[slug || 'valdobbiadene'] || regionData.valdobbiadene;
  const factLabels = ['Plocha', 'Hlavné hrozno', 'Nadmorská výška', 'Rok uznania'];

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative h-[480px] max-md:h-[360px] overflow-hidden">
        <img src={regionValdobbiadene} alt={region.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 px-6 text-center">
          <h1 className="font-heading font-bold text-[56px] max-md:text-[36px] text-parchment">{region.name}</h1>
          <span className="mt-2 px-3 py-1 bg-gold/20 hairline border-gold/50 text-gold-light rounded-sm text-[12px] font-body font-semibold tracking-[0.08em] uppercase">
            {region.appellation}
          </span>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {factLabels.map((label, i) => (
              <div key={label} className="px-4 py-2 bg-parchment/10 backdrop-blur-md rounded-full">
                <span className="text-parchment/60 text-[11px] font-body tracking-[0.06em] uppercase">{label}: </span>
                <span className="text-parchment font-body font-medium text-[13px]">{region.facts[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 section-padding">
        {/* Description */}
        <div className="max-w-[800px] mx-auto">
          <p className="body-large text-ink-secondary leading-[1.8]">{region.desc}</p>
        </div>

        {/* Proseccos from region */}
        <div className="mt-16">
          <SectionHeader eyebrow="Z Tohto Regiónu" title="Top Prosecco" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {proseccos.slice(0, 4).map(p => (
              <ProseccoCard key={p.id} prosecco={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetailPage;
