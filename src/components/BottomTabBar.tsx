import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, ScanLine, Trophy, User } from 'lucide-react';

const tabs = [
  { label: 'Domov', href: '/', icon: Home },
  { label: 'Objaviť', href: '/explore', icon: Compass },
  { label: 'Skenovať', href: '/skenovat', icon: ScanLine, center: true },
  { label: 'Rebríčky', href: '/rebriciky', icon: Trophy },
  { label: 'Profil', href: '/profil/demo', icon: User },
];

const BottomTabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[100] flex items-end justify-around"
      style={{
        height: `calc(49px + env(safe-area-inset-bottom, 0px))`,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'rgba(247,242,235,0.97)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '0.5px solid hsl(var(--c-stone))',
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
                background: 'hsl(var(--c-selce))',
                borderRadius: '14px',
                padding: '13px 20px',
                boxShadow: '0 4px 16px rgba(44,24,16,0.35)',
              }}
            >
              <Icon size={24} strokeWidth={1.5} className="text-white" />
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
              <div className="absolute top-0 w-1 h-1 rounded-full bg-oro" />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              className={isActive ? 'text-selce' : 'text-ink-3'}
            />
            <span
              className={`font-body font-medium text-[10px] tracking-[0.06em] uppercase ${
                isActive ? 'text-selce' : 'text-ink-3'
              }`}
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
