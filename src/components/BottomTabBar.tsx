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
      className="fixed bottom-0 z-[100]"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'end',
        height: `calc(49px + env(safe-area-inset-bottom, 0px))`,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'rgba(255, 248, 221, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
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
            <div key={tab.label} className="flex items-center justify-center">
              <button
                onClick={() => navigate(tab.href)}
                className="press flex items-center justify-center -mt-[14px]"
                style={{
                  background: 'hsl(var(--c-oro))',
                  borderRadius: '14px',
                  padding: '13px 20px',
                  boxShadow: '0 4px 16px rgba(200,168,76,0.4)',
                }}
              >
                <Icon size={24} strokeWidth={1.5} style={{ color: '#2C1810' }} />
              </button>
            </div>
          );
        }

        return (
          <Link
            key={tab.label}
            to={tab.href}
            className="press flex flex-col items-center justify-center gap-[3px] py-[6px]"
          >
            <Icon
              size={22}
              strokeWidth={1.5}
              style={{ color: isActive ? 'hsl(var(--c-oro))' : '#2C1810' }}
            />
            <span
              className="font-body font-medium text-[10px] tracking-[0.06em] uppercase"
              style={{ color: isActive ? 'hsl(var(--c-oro))' : '#2C1810' }}
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
