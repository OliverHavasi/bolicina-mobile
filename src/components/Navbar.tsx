import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Home, Compass, Trophy, User, SearchIcon } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

const navLinks = [
  { label: 'Objaviť', href: '/explore' },
  { label: 'Rebríčky', href: '/rebriciky' },
  { label: 'Regióny', href: '/regiony' },
  { label: 'Producenti', href: '/producenti' },
  { label: 'Komunita', href: '/profil/demo' },
  { label: 'Magazín', href: '/magazin' },
];

const mobileNav = [
  { label: 'Domov', href: '/', icon: Home },
  { label: 'Objaviť', href: '/explore', icon: Compass },
  { label: 'Rebríčky', href: '/rebriciky', icon: Trophy },
  { label: 'Profil', href: '/profil/demo', icon: User },
  { label: 'Hľadať', href: '#search', icon: SearchIcon },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center interactive ${
          scrolled || !isHome
            ? 'bg-parchment/[0.92] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_1px_0_rgba(28,25,22,0.06)]'
            : 'bg-transparent'
        }`}
        style={{ borderBottom: '0.5px solid rgba(200,168,76,0.25)' }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* Bubble cluster SVG */}
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold">
              <circle cx="4" cy="12" r="2.5" fill="currentColor" opacity="0.6" />
              <circle cx="9" cy="8" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="12" cy="4" r="1.5" fill="currentColor" />
            </svg>
            <div>
              <span className={`font-heading font-semibold italic text-[28px] leading-none ${scrolled || !isHome ? 'text-forest' : 'text-parchment'}`}>
                Bolicina
              </span>
              <div className={`text-[10px] font-body font-light tracking-[0.15em] uppercase ${scrolled || !isHome ? 'text-ink-tertiary' : 'text-parchment/60'}`}>
                Prosecco Discovery
              </div>
            </div>
          </Link>

          {/* Center nav - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-body font-normal text-[13px] tracking-[0.06em] uppercase interactive hover:text-forest ${
                  location.pathname === link.href
                    ? `${scrolled || !isHome ? 'text-forest' : 'text-parchment'} after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:w-[4px] after:h-[4px] after:rounded-full after:bg-gold`
                    : scrolled || !isHome ? 'text-ink-secondary' : 'text-parchment/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className={`interactive ${scrolled || !isHome ? 'text-ink-secondary hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <div className={`w-[0.5px] h-5 ${scrolled || !isHome ? 'bg-stone' : 'bg-parchment/30'}`} />
            <button className={`font-body font-medium text-[13px] interactive ${scrolled || !isHome ? 'text-ink-secondary hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}>
              Prihlásiť sa
            </button>
            <button className="bg-forest text-parchment px-[22px] py-2.5 rounded-full font-body font-medium text-[13px] tracking-[0.04em] interactive hover:bg-forest-light hover:-translate-y-px">
              Registrovať sa
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden ${scrolled || !isHome ? 'text-forest' : 'text-parchment'}`}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-parchment shadow-2xl flex flex-col animate-[slide-in-right_0.3s_ease-out]">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileOpen(false)} className="text-forest">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-heading font-medium text-[28px] text-forest py-3 interactive hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="p-6 flex flex-col gap-3">
              <button className="w-full py-3 hairline border-stone rounded font-body font-medium text-[14px] text-ink-secondary">
                Prihlásiť sa
              </button>
              <button className="w-full py-3 bg-forest text-parchment rounded font-body font-medium text-[14px]">
                Registrovať sa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom nav */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 h-[72px] bg-parchment/[0.96] backdrop-blur-[20px] flex items-center justify-around lg:hidden"
        style={{ borderTop: '0.5px solid hsl(var(--color-stone))' }}
      >
        {mobileNav.map((item) => {
          const isActive = item.href === '#search'
            ? false
            : location.pathname === item.href;
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.href === '#search') {
                  setSearchOpen(true);
                } else {
                  window.location.href = item.href;
                }
              }}
              className="flex flex-col items-center gap-1 relative"
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className={isActive ? 'text-forest' : 'text-ink-tertiary'}
              />
              <span className={`text-[10px] font-body ${isActive ? 'text-forest font-medium' : 'text-ink-tertiary'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-gold" />
              )}
            </button>
          );
        })}
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
};

export default Navbar;
