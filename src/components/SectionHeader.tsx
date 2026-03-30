import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllLabel?: string;
  dark?: boolean;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  viewAllLink,
  viewAllLabel = 'Zobraziť všetky →',
  dark = false,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-[60px] relative ${className}`}>
      <span className={`text-micro ${dark ? 'text-gold-light' : 'text-gold'}`}>
        {eyebrow}
      </span>
      <h2 className={`heading-h2 mt-3 ${dark ? 'text-parchment' : 'text-forest'}`}>
        {title}
      </h2>
      <div className="w-12 h-[1px] bg-gold mx-auto mt-2" />
      {subtitle && (
        <p className={`body-text mt-3 max-w-md mx-auto ${dark ? 'text-parchment/70' : 'text-ink-secondary'}`}>
          {subtitle}
        </p>
      )}
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="absolute right-0 top-1/2 -translate-y-1/2 body-small font-medium text-gold hover:text-gold-deep interactive max-md:relative max-md:mt-4 max-md:right-auto max-md:translate-y-0"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
