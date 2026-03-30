import { Link } from 'react-router-dom';
import StarRating from '@/components/StarRating';
import SectionHeader from '@/components/SectionHeader';
import { producers } from '@/data/proseccoData';

const ProducersPage = () => {
  return (
    <div className="pt-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 section-padding">
        <SectionHeader
          eyebrow="Talianske Vinárstva"
          title="Producenti Prosecca"
          subtitle="Objavte najlepšie vinárstva z regiónov DOCG a DOC"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {producers.map((p) => (
            <Link
              key={p.id}
              to={`/producenti/${p.slug}`}
              className="bg-cream hairline border-stone rounded-lg p-8 flex flex-col items-center text-center interactive hover:border-gold hover:-translate-y-1 cursor-pointer"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-20 h-20 rounded-full bg-parchment hairline border-stone flex items-center justify-center font-heading font-semibold text-[28px] text-forest">
                {p.initials}
              </div>
              <h3 className="font-heading font-semibold text-[20px] text-forest mt-4">{p.name}</h3>
              <span className="body-small text-ink-tertiary mt-1">{p.region}</span>
              <div className="flex items-center gap-3 mt-3">
                <span className="font-body font-medium text-[13px] text-gold">{p.proseccoCount} prosecco</span>
                <StarRating rating={p.avgRating} size={12} showScore />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProducersPage;
