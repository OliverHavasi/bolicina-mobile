import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import StarRating from '@/components/StarRating';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { producers, proseccos } from '@/data/proseccoData';

const ProducerDetailPage = () => {
  const { slug } = useParams();
  const producer = producers.find(p => p.slug === slug) || producers[0];

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 section-padding">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-24 h-24 rounded-full bg-cream hairline border-stone flex items-center justify-center font-heading font-semibold text-[32px] text-forest">
            {producer.initials}
          </div>
          <h1 className="heading-h1 text-forest mt-6">{producer.name}</h1>
          <div className="flex items-center gap-2 mt-2 text-ink-secondary">
            <MapPin size={14} strokeWidth={1.5} />
            <span className="body-text">{producer.region}, Veneto, Taliansko</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="font-body font-medium text-[14px] text-gold">{producer.proseccoCount} prosecco</span>
            <StarRating rating={producer.avgRating} size={16} showScore showCount count={1234} />
          </div>
          <p className="body-large text-ink-secondary max-w-[600px] mt-6">
            Jedno z najuznávanejších vinárskych domov v oblasti {producer.region}. Tradícia kvality siahajúca generácie dozadu.
          </p>
        </div>

        <SectionHeader eyebrow="Kolekcia" title="Prosecco od {0}".replace('{0}', producer.name) />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {proseccos.slice(0, 4).map(p => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProducerDetailPage;
