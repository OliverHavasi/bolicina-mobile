import { useParams } from 'react-router-dom';
import magazineFeatured from '@/assets/magazine-featured.jpg';

const ArticlePage = () => {
  const { slug } = useParams();

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <div className="relative h-[400px] max-md:h-[280px] overflow-hidden">
        <img src={magazineFeatured} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 px-6 text-center">
          <span className="inline-block px-3 py-1 bg-gold/20 hairline border-gold/50 text-gold-light rounded-sm text-[10px] font-body font-semibold tracking-[0.08em] uppercase mb-3">
            Sprievodca
          </span>
          <h1 className="font-heading font-bold text-[44px] max-md:text-[28px] text-parchment max-w-[700px] leading-[1.1]">
            Kompletný Sprievodca Valdobbiadene DOCG
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="body-small text-parchment/60">Elena Rossi</span>
            <span className="body-small text-parchment/60">·</span>
            <span className="body-small text-parchment/60">15. marca 2025</span>
            <span className="body-small text-parchment/60">·</span>
            <span className="body-small text-parchment/60">8 min čítania</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[720px] mx-auto px-6 py-16">
        <p className="body-large text-ink-secondary leading-[1.8] mb-6">
          Valdobbiadene Superiore DOCG je srdcom produkcie prémiového Prosecca. Situovaný na strmých kopcoch severného Veneta, tento región je súčasťou UNESCO svetového dedičstva od roku 2019.
        </p>
        <h2 className="heading-h3 text-forest mt-10 mb-4">História Regiónu</h2>
        <p className="body-text text-ink-secondary leading-[1.75] mb-6">
          Tradícia pestovania viniča v oblasti Valdobbiadene siaha do rímskeho obdobia. Prvé písomné zmienky o produkcii šumivého vína v tejto oblasti pochádzajú z 18. storočia. Hrozno Glera, dnes hlavná odroda pre výrobu Prosecca, sa tu pestuje po generácie.
        </p>
        <p className="body-text text-ink-secondary leading-[1.75] mb-6">
          Terasovité vinice na strmých svahoch s nadmorskou výškou 100 až 500 metrov vytvárajú unikátne podmienky pre dozrievanie hrozna. Kombinácia alpskej klímy a vplyvu Jadranu dáva vínam z tejto oblasti nezameniteľný charakter — jemnú aromatickosť, elegantnú aciditu a vytrvalé perlage.
        </p>
        <blockquote className="border-l-2 border-gold pl-6 my-8">
          <p className="font-heading font-medium italic text-[24px] text-gold leading-[1.4]">
            „Valdobbiadene nie je len región. Je to filozofia vinárstva, kde každý kopec rozpráva príbeh."
          </p>
          <cite className="body-small text-ink-tertiary mt-2 block not-italic">— Giovanni Bisol, Bisol 1542</cite>
        </blockquote>
        <h2 className="heading-h3 text-forest mt-10 mb-4">Terroir a Klíma</h2>
        <p className="body-text text-ink-secondary leading-[1.75] mb-6">
          Mikroklimatické podmienky Valdobbiadene sú ideálne pre odrodu Glera. Chladné noci a teplé dni počas dozrievania zabezpečujú optimálnu rovnováhu medzi cukrom a kyselinou, čo je kľúčové pre kvalitné Prosecco.
        </p>
        <p className="body-text text-ink-secondary leading-[1.75]">
          Pôda je zmes hliny, piesku a vápenca — kombinácia, ktorá dodáva vínam minerálny charakter a komplexnosť. Najcennejšie vinice sa nachádzajú na južných svahoch, kde hrozno dostáva maximum slnečného žiarenia.
        </p>
      </article>
    </div>
  );
};

export default ArticlePage;
