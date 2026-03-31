import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProseccoCard from '@/components/ProseccoCard';
import { proseccos } from '@/data/proseccoData';
import { useLanguage } from '@/i18n/LanguageContext';

const ScanPage = () => {
  const { t } = useLanguage();
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowResult(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed z-[200] bg-[#0A0A0A] flex flex-col items-center" style={{ top: 0, bottom: 0, maxWidth: '390px', width: '100%', left: '50%', transform: 'translateX(-50%)' }}>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-start px-4" style={{ paddingTop: 'calc(12px + env(safe-area-inset-top, 0px))' }}>
        <Link to="/" className="press tap-target flex items-center justify-center">
          <X size={24} strokeWidth={1.5} className="text-white" />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center w-full px-10">
        <div className="relative w-[260px] h-[340px]" style={{ border: '2px solid rgba(200,168,76,0.85)', borderRadius: '16px' }}>
          {['top-0 left-0', 'top-0 right-0 scale-x-[-1]', 'bottom-0 left-0 scale-y-[-1]', 'bottom-0 right-0 scale-[-1]'].map((pos, i) => (
            <div key={i} className={`absolute ${pos}`}>
              <div className="w-6 h-[3px] bg-oro rounded-full" style={{ margin: '-1px 0 0 -1px' }} />
              <div className="w-[3px] h-6 bg-oro rounded-full" style={{ margin: '-3px 0 0 -1px' }} />
            </div>
          ))}
          <div className="absolute left-2 right-2" style={{
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, rgba(200,168,76,0.8), transparent)',
            animation: 'scan-line 2.2s ease-in-out infinite',
          }} />
          <div className="absolute left-2 right-2" style={{
            height: '20px',
            background: 'rgba(200,168,76,0.06)',
            animation: 'scan-line 2.2s ease-in-out infinite',
            transform: 'translateY(2px)',
          }} />
        </div>
      </div>

      <div className="text-center pb-6">
        <p className="font-body font-light text-[15px] text-white/75">{t('pointCamera')}</p>
        <button className="mt-3 px-6 py-2.5 rounded-full font-body font-medium text-[14px] text-white press" style={{ border: '0.5px solid rgba(255,255,255,0.3)' }}>
          {t('uploadPhoto')}
        </button>
      </div>

      {showResult && (
        <div className="absolute bottom-0 left-0 right-0 bg-parchment rounded-t-[20px] animate-slide-up" style={{ height: '55%', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-9 h-1 rounded-full bg-stone" />
          </div>
          <div className="px-4">
            <span className="text-micro text-[11px] text-oro">{t('found')}</span>
            <ProseccoCard prosecco={proseccos[0]} variant="list" />
            <div style={{ borderTop: '0.5px solid hsl(var(--c-stone))' }} className="pt-3 mt-2">
              <Link to={`/prosecco/${proseccos[0].id}`} className="block w-full h-12 bg-selce text-white rounded-lg font-heading font-semibold text-[16px] flex items-center justify-center press">
                {t('viewDetails')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
