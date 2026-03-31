import { useParams } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { proseccos } from '@/data/proseccoData';
import regionValdobbiadene from '@/assets/region-valdobbiadene.jpg';

const regionData: Record<string, { name: string; appellation: string; desc: string; facts: string[] }> = {
  valdobbiadene: { name: 'Valdobbiadene Superiore', appellation: 'DOCG', desc: 'Valdobbiadene Superiore DOCG je srdcom produkcie prémiového Prosecca. Situovaný na strmých kopcoch severného Veneta, tento región je súčasťou UNESCO svetového dedičstva od roku 2019.', facts: ['5 800 ha', 'Glera', '100-500 m', '2009'] },
  conegliano: { name: 'Conegliano Valdobbiadene', appellation: 'DOCG', desc: 'Conegliano je historickým centrom Prosecca.', facts: ['7 200 ha', 'Glera', '50-400 m', '2009'] },
  cartizze: { name: 'Cartizze', appellation: 'DOCG', desc: 'Cartizze je len 107 hektárový kopec.', facts: ['107 ha', 'Glera', '300 m', '2009'] },
  asolo: { name: 'Asolo Prosecco', appellation: 'DOCG', desc: 'Asolo leží medzi Benátkami a Dolomitmi.', facts: ['2 500 ha', 'Glera', '100-450 m', '2009'] },
  rose: { name: 'Prosecco DOC Rosé', appellation: 'DOC', desc: 'Rosé Prosecco kategória od 2020.', facts: ['N/A', 'Glera, Pinot Nero', 'Rôzne', '2020'] },
  treviso: { name: 'Prosecco DOC Treviso', appellation: 'DOC', desc: 'Najväčšia produkčná oblasť Prosecca.', facts: ['24 000 ha', 'Glera', '0-300 m', '2009'] },
};

const RegionDetailPage = () => {
  const { slug } = useParams();
  const region = regionData[slug || 'valdobbiadene'] || regionData.valdobbiadene;
  const factLabels = ['Plocha', 'Hrozno', 'Výška', 'Rok'];

  return (
    <div>
      <TopAppBar showBack transparent />

      {/* Hero */}
      <div className="relative h-[200px] overflow-hidden">
        <img src={regionValdobbiadene} alt={region.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-selce/60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <span className="text-label text-[10px] bg-oro/20 text-oro-light px-[6px] py-[2px] rounded-sm" style={{ border: '0.5px solid rgba(200,168,76,0.5)' }}>{region.appellation}</span>
          <h1 className="heading-h1 text-white mt-1">{region.name}</h1>
        </div>
      </div>

      {/* Facts strip */}
      <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))', touchAction: 'pan-x' }}>
        {factLabels.map((label, i) => (
          <div key={label} className="shrink-0 text-center">
            <span className="font-body text-[10px] text-ink-3 uppercase tracking-[0.06em]">{label}</span>
            <span className="block font-body font-medium text-[13px] text-selce">{region.facts[i]}</span>
          </div>
        ))}
      </div>

      <div className="px-4">
        <p className="font-body text-[14px] text-ink-2 leading-[1.7] mt-4">{region.desc}</p>

        <SectionHeader title="Top Prosecco" eyebrow="Z Tohto Regiónu" />
        <div className="grid grid-cols-2 gap-3">
          {proseccos.slice(0, 4).map(p => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionDetailPage;
