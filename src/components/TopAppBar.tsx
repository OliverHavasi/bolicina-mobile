import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  title?: string;
  showBack?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  transparent?: boolean;
}

const TopAppBar = ({ title, showBack = false, leftContent, rightContent, transparent = false }: TopAppBarProps) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showFrost = !transparent || scrolled;

  return (
    <header
      className="fixed top-0 z-50 flex items-center justify-between px-4"
      style={{
        height: `calc(52px + env(safe-area-inset-top, 0px))`,
        paddingTop: 'env(safe-area-inset-top, 0px)',
        background: showFrost ? 'rgba(247,242,235,0.95)' : 'transparent',
        backdropFilter: showFrost ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: showFrost ? 'blur(20px)' : 'none',
        borderBottom: showFrost ? '0.5px solid hsl(var(--c-stone))' : 'none',
        transition: 'background 0.25s, backdrop-filter 0.25s, border-bottom 0.25s',
        maxWidth: '390px',
        width: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <div className="w-10 flex items-center justify-start">
        {showBack ? (
          <button onClick={() => navigate(-1)} className="press tap-target flex items-center justify-center">
            <ChevronLeft size={24} strokeWidth={1.5} className="text-selce" />
          </button>
        ) : leftContent || null}
      </div>
      {title && (
        <span className="font-heading font-semibold text-[18px] text-selce truncate max-w-[60%] text-center">
          {title}
        </span>
      )}
      <div className="w-10 flex items-center justify-end">
        {rightContent || null}
      </div>
    </header>
  );
};

export default TopAppBar;
