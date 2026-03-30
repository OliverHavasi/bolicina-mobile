import { MapPin } from 'lucide-react';
import profileCover from '@/assets/profile-cover.jpg';
import StarRating from '@/components/StarRating';
import ProseccoCard from '@/components/ProseccoCard';
import { proseccos } from '@/data/proseccoData';

const tabs = ['Hodnotenia', 'Recenzie', 'Wishlist', 'Kolekcie', 'Aktivita'];

const ProfilePage = () => {
  return (
    <div className="pt-[68px]">
      {/* Cover */}
      <div className="relative h-[280px] max-md:h-[200px] overflow-hidden">
        <img src={profileCover} alt="Cover" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={720} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, hsl(var(--color-parchment)) 100%)' }} />
      </div>

      {/* Profile area */}
      <div className="max-w-[1280px] mx-auto px-6 -mt-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-cream-deep flex items-center justify-center font-heading font-bold text-[28px] text-forest" style={{ border: '3px solid hsl(var(--color-parchment))' }}>
            M
          </div>
          <h1 className="font-heading font-semibold text-[24px] text-forest mt-3">Marco Vinetti</h1>
          <span className="body-text text-ink-tertiary">@marcovinetti</span>
          <div className="flex items-center gap-1 mt-1 text-ink-tertiary">
            <MapPin size={12} strokeWidth={1.5} />
            <span className="body-small">Bratislava, Slovensko</span>
          </div>
          <span className="mt-2 px-3 py-1 bg-gold-tint hairline border-gold text-gold-deep rounded-full font-body font-medium text-[12px] tracking-[0.04em]">
            Prosecco Expert
          </span>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-6 flex-wrap justify-center">
            {[
              { num: '348', label: 'Hodnotení' },
              { num: '52', label: 'Recenzií' },
              { num: '18', label: 'Zoznamov' },
              { num: '124', label: 'Sleduje' },
              { num: '89', label: 'Sledovateľov' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading font-semibold text-[20px] text-forest">{stat.num}</span>
                <span className="block body-small text-ink-tertiary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 justify-center mt-8 pb-3 overflow-x-auto" style={{ borderBottom: '0.5px solid hsl(var(--color-stone))' }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`font-body font-semibold text-[13px] tracking-[0.06em] uppercase pb-3 interactive shrink-0 ${
                i === 0 ? 'text-forest border-b-2 border-gold' : 'text-ink-tertiary hover:text-forest'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-8 pb-16">
          {proseccos.slice(0, 8).map(p => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
