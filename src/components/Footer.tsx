import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-selce text-cream/70 px-4 py-8" style={{ borderTop: '2px solid rgba(200,168,76,0.3)', marginBottom: 'calc(49px + env(safe-area-inset-bottom, 0px))' }}>
      <div className="text-center">
        <span className="font-heading font-semibold italic text-[22px] text-oro-light">Bolicina</span>
        <p className="font-body text-[12px] text-cream/50 mt-1">Váš sprievodca svetom Prosecca.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h4 className="text-label text-cream/90 mb-2">Objaviť</h4>
          {['Explore', 'Rankings', 'Regióny', 'Producenti'].map(l => (
            <Link key={l} to="/explore" className="block font-body text-[12px] text-cream/50 py-0.5">{l}</Link>
          ))}
        </div>
        <div>
          <h4 className="text-label text-cream/90 mb-2">Spoločnosť</h4>
          {['O nás', 'Podmienky', 'Súkromie', 'Kontakt'].map(l => (
            <Link key={l} to="/" className="block font-body text-[12px] text-cream/50 py-0.5">{l}</Link>
          ))}
        </div>
      </div>
      <p className="font-body text-[11px] text-cream/30 text-center mt-6">© 2025 Bolicina.com — Made with 🥂 in Venetia</p>
    </footer>
  );
};

export default Footer;
