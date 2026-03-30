import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest text-cream/70 pb-24 lg:pb-0" style={{ borderTop: '2px solid rgba(200,168,76,0.3)' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-heading font-semibold italic text-[26px] text-gold-light">Bolicina</span>
            <p className="body-small mt-3 text-cream/60">Váš sprievodca svetom Prosecca.</p>
            <div className="flex gap-4 mt-5">
              {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                <span key={s} className="body-small text-gold/60 hover:text-gold interactive cursor-pointer">{s}</span>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <span className="hairline border-gold/40 text-gold-light text-[10px] font-body font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-sm">DOCG Partner</span>
              <span className="hairline border-gold/40 text-gold-light text-[10px] font-body font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-sm">DOC Verified</span>
            </div>
          </div>

          {/* Objaviť */}
          <div>
            <h4 className="text-label text-cream mb-4">Objaviť</h4>
            {['Explore', 'Rankings', 'Novinky', 'Regióny', 'Producenti', 'Sprievodca štýlmi'].map((l) => (
              <Link key={l} to="/explore" className="block body-small text-cream/60 hover:text-gold interactive py-1">{l}</Link>
            ))}
          </div>

          {/* Komunita */}
          <div>
            <h4 className="text-label text-cream mb-4">Komunita</h4>
            {['Recenzie', 'Wishlisty', 'Kolekcie', 'Fórum', 'Udalosti', 'Ambasádor'].map((l) => (
              <Link key={l} to="/" className="block body-small text-cream/60 hover:text-gold interactive py-1">{l}</Link>
            ))}
          </div>

          {/* Spoločnosť */}
          <div>
            <h4 className="text-label text-cream mb-4">Spoločnosť</h4>
            {['O nás', 'Press', 'API', 'Podmienky', 'Ochrana súkromia', 'Kontakt', 'Kariéra'].map((l) => (
              <Link key={l} to="/" className="block body-small text-cream/60 hover:text-gold interactive py-1">{l}</Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6" style={{ borderTop: '0.5px solid rgba(200,168,76,0.2)' }}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="body-small text-cream/40">© 2025 Bolicina.com — Made with 🥂 in Venetia</p>
            <div className="flex gap-3">
              {['SK', 'EN', 'IT', 'DE'].map((lang) => (
                <button key={lang} className={`body-small interactive ${lang === 'SK' ? 'text-gold' : 'text-cream/40 hover:text-cream/70'}`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
