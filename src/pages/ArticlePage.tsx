import { useParams } from 'react-router-dom';
import TopAppBar from '@/components/TopAppBar';
import magazineFeatured from '@/assets/magazine-featured.jpg';

const ArticlePage = () => {
  const { slug } = useParams();

  return (
    <div>
      <TopAppBar showBack transparent />

      {/* Hero */}
      <div className="relative h-[220px] overflow-hidden">
        <img src={magazineFeatured} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-selce/60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <span className="text-micro text-[10px] text-oro">Sprievodca</span>
          <h1 className="font-heading font-bold text-[22px] text-white leading-tight mt-0.5">
            Kompletný Sprievodca Valdobbiadene DOCG
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-body text-[12px] text-white/60">Elena Rossi</span>
            <span className="font-body text-[12px] text-white/60">·</span>
            <span className="font-body text-[12px] text-white/60">8 min čítania</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-4 py-5">
        <p className="font-body text-[15px] text-ink-2 leading-[1.75] mb-5">
          Valdobbiadene Superiore DOCG je srdcom produkcie prémiového Prosecca. Situovaný na strmých kopcoch severného Veneta, tento región je súčasťou UNESCO svetového dedičstva od roku 2019.
        </p>
        <h2 className="heading-h3 text-selce mt-6 mb-3">História Regiónu</h2>
        <p className="font-body text-[15px] text-ink-2 leading-[1.75] mb-5">
          Tradícia pestovania viniča v oblasti Valdobbiadene siaha do rímskeho obdobia. Prvé písomné zmienky o produkcii šumivého vína v tejto oblasti pochádzajú z 18. storočia.
        </p>
        <blockquote className="border-l-2 border-oro pl-4 my-6">
          <p className="font-heading font-semibold italic text-[18px] text-oro leading-[1.4]">
            „Valdobbiadene nie je len región. Je to filozofia vinárstva."
          </p>
          <cite className="font-body text-[12px] text-ink-3 mt-1 block not-italic">— Giovanni Bisol, Bisol 1542</cite>
        </blockquote>
        <h2 className="heading-h3 text-selce mt-6 mb-3">Terroir a Klíma</h2>
        <p className="font-body text-[15px] text-ink-2 leading-[1.75]">
          Mikroklimatické podmienky Valdobbiadene sú ideálne pre odrodu Glera. Chladné noci a teplé dni počas dozrievania zabezpečujú optimálnu rovnováhu medzi cukrom a kyselinou.
        </p>
      </article>
    </div>
  );
};

export default ArticlePage;
