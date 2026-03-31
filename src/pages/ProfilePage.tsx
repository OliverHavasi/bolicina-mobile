import { MapPin } from 'lucide-react';
import TopAppBar from '@/components/TopAppBar';
import profileCover from '@/assets/profile-cover.jpg';
import StarRating from '@/components/StarRating';
import ProseccoCard from '@/components/ProseccoCard';
import { proseccos } from '@/data/proseccoData';

const tabs = ['Hodnotenia', 'Recenzie', 'Wishlist', 'Kolekcie'];

const ProfilePage = () => {
  return (
    <div>
      {/* Cover */}
      <div className="relative h-[140px] overflow-hidden">
        <img src={profileCover} alt="Cover" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, hsl(var(--c-parchment)) 100%)' }} />
      </div>

      {/* Avatar + info */}
      <div className="px-4 -mt-8 relative z-10">
        <div className="w-16 h-16 rounded-full bg-cream-deep flex items-center justify-center font-heading font-bold text-[24px] text-selce" style={{ border: '3px solid hsl(var(--c-parchment))' }}>
          M
        </div>
        <h1 className="heading-h2 text-selce mt-2">Marco Vinetti</h1>
        <span className="font-body text-[14px] text-ink-3">@marcovinetti</span>
        <div className="flex items-center gap-1 mt-0.5 text-ink-3">
          <MapPin size={12} strokeWidth={1.5} />
          <span className="body-small">Bratislava, Slovensko</span>
        </div>
        <span className="inline-block mt-2 px-2.5 py-1 bg-oro-tint text-oro-deep rounded-full font-body font-medium text-[12px]" style={{ border: '0.5px solid hsl(var(--c-oro))' }}>
          Prosecco Expert
        </span>

        {/* Stats row */}
        <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar" style={{ touchAction: 'pan-x' }}>
          {[
            { num: '348', label: 'Hodnotení' },
            { num: '52', label: 'Recenzií' },
            { num: '18', label: 'Zoznamov' },
            { num: '124', label: 'Sleduje' },
            { num: '89', label: 'Sledovateľov' },
          ].map(stat => (
            <div key={stat.label} className="text-center shrink-0">
              <span className="font-heading font-bold text-[18px] text-selce">{stat.num}</span>
              <span className="block font-body text-[11px] text-ink-3">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Tabs - sticky */}
        <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar" style={{ borderBottom: '0.5px solid hsl(var(--c-stone))' }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`shrink-0 pb-2.5 font-body font-semibold text-[13px] tracking-[0.04em] uppercase press ${
                i === 0 ? 'text-selce border-b-2 border-oro' : 'text-ink-3'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {proseccos.slice(0, 6).map(p => (
            <ProseccoCard key={p.id} prosecco={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
