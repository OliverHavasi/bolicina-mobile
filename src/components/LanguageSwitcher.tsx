import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="press tap-target flex items-center justify-center"
      >
        <Globe size={22} strokeWidth={1.5} className="text-white" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[199]" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-full mt-2 z-[200] rounded-xl overflow-hidden"
            style={{
              background: 'rgba(44,24,16,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '0.5px solid rgba(247,244,238,0.15)',
              minWidth: 180,
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            }}
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 press"
                style={{
                  borderBottom: l.code !== 'en' ? '0.5px solid rgba(247,244,238,0.1)' : 'none',
                }}
              >
                <span className="text-[18px]">{l.flag}</span>
                <span
                  className="font-body text-[14px] flex-1 text-left"
                  style={{ color: lang === l.code ? 'hsl(var(--c-oro))' : 'rgba(247,244,238,0.8)' }}
                >
                  {l.label}
                </span>
                {lang === l.code && (
                  <Check size={16} strokeWidth={2} style={{ color: 'hsl(var(--c-oro))' }} />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
