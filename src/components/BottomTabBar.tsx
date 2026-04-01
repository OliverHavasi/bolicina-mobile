import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, ScanLine, Trophy, User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const BottomTabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tabs = [
    { label: t('navHome'), href: '/', icon: Home },
    { label: t('navDiscover'), href: '/explore', icon: Compass },
    { label: t('navScan'), href: '/skenovat', icon: ScanLine, center: true },
    { label: t('navRankings'), href: '/rebriciky', icon: Trophy },
    { label: t('navProfile'), href: '/profil/demo', icon: User },
  ];

  return (
    <nav
      className="fixed bottom-0 z-[100] flex items-center justify-around"
      style={{
        height: `calc(56px + env(safe-area-inset-bottom, 0px))`,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: '#1B2D22',
        maxWidth: '390px',
        width: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.href === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(tab.href);
        const Icon = tab.icon;

        if (tab.center) {
          return (
            <div key={tab.label} className="flex-1 flex items-center justify-center">
              <button
                onClick={() => navigate(tab.href)}
                className="press flex items-center justify-center relative -mt-5"
                style={{
                  background: '#3D2B1F',
                  borderRadius: '16px',
                  width: 52,
                  height: 52,
                  boxShadow: '0 -2px 12px rgba(61,43,31,0.35)',
                }}
              >
                <Icon size={24} strokeWidth={1.5} style={{ color: '#C8A84C' }} />
              </button>
            </div>
          );
        }

        return (
          <Link
            key={tab.label}
            to={tab.href}
            className="press flex-1 flex flex-col items-center gap-[2px] py-[6px] relative"
          >
            {isActive && (
              <div className="absolute top-0 w-1 h-1 rounded-full" style={{ background: '#C8A84C' }} />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              style={{ color: isActive ? '#C8A84C' : '#F7F4EE' }}
            />
            <span
              className="font-body font-medium text-[10px] tracking-[0.06em] uppercase text-center"
              style={{ color: isActive ? '#C8A84C' : '#F7F4EE', marginTop: 2 }}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomTabBar;
