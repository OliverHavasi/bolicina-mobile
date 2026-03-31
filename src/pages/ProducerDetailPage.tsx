import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import TopAppBar from '@/components/TopAppBar';
import StarRating from '@/components/StarRating';
import ProseccoCard from '@/components/ProseccoCard';
import SectionHeader from '@/components/SectionHeader';
import { producers, proseccos } from '@/data/proseccoData';

const ProducerDetailPage = () => {
  const { slug } = useParams();
  const producer = producers.find(p => p.slug === slug) || producers[0];

  return (
    <div style={{ paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <TopAppBar showBack title={producer.name} />

      <div className="px-4 pt-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center font-heading font-semibold text-[28px] text-selce" style={{ border: '0.5px solid hsl(var(--c-stone))' }}>
            {producer.initials}
          </div>
          <h1 className="heading-h2 text-selce mt-3">{producer.name}</h1>
          <div className="flex items-center gap-1 mt-1 text-ink-3">
            <MapPin size={12} strokeWidth={1.5} />
            <span className="body-small">{producer.region}, Veneto</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="font-body font-medium text-[13px] text-oro">{producer.proseccoCount} prosecco</span>
            <StarRating rating={producer.avgRating} size={12} showScore />
          </div>
          <p className="font-body text-[14px] text-ink-2 mt-3 leading-[1.6]">
            Jedno z najuznávanejších vinárskych domov v oblasti {producer.region}.
          </p>
        </div>

        <SectionHeader title={`Prosecco`} eyebrow="Kolekcia" />
        <div className="grid grid-cols-2 gap-3">
          {proseccos.slice(0, 4).map(p => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProducerDetailPage;
