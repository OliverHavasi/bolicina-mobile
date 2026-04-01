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
      className="fixed bottom-0 z-[100] flex items-end justify-around"
      style={{
        height: `calc(49px + env(safe-area-inset-bottom, 0px))`,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'hsl(var(--c-selce))',
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
            <button
              key={tab.label}
              onClick={() => navigate(tab.href)}
              className="press flex items-center justify-center -mt-[14px]"
              style={{
                background: 'hsl(var(--c-oro))',
                borderRadius: '14px',
                padding: '13px 20px',
                boxShadow: '0 4px 16px rgba(200,168,76,0.4)',
              }}
            >
              <Icon size={24} strokeWidth={1.5} className="text-selce" />
            </button>
          );
        }

        return (
          <Link
            key={tab.label}
            to={tab.href}
            className="press flex flex-col items-center gap-[3px] py-[6px] px-3 relative"
          >
            {isActive && (
              <div className="absolute top-0 w-1 h-1 rounded-full" style={{ background: 'hsl(var(--c-oro))' }} />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              style={{ color: isActive ? 'hsl(var(--c-oro))' : 'rgba(247,244,238,0.5)' }}
            />
            <span
              className="font-body font-medium text-[10px] tracking-[0.06em] uppercase"
              style={{ color: isActive ? 'hsl(var(--c-oro))' : 'rgba(247,244,238,0.5)' }}
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
