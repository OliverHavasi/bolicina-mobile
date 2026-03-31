import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  eyebrow?: string;
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
  viewAllLabel = 'Všetky →',
  dark = false,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`flex items-baseline justify-between mt-7 mb-3 ${className}`}>
      <div>
        {eyebrow && (
          <span className={`text-micro text-[11px] ${dark ? 'text-oro-light' : 'text-oro'}`}>{eyebrow}</span>
        )}
        <h2 className={`heading-h3 ${dark ? 'text-white' : 'text-selce'}`}>{title}</h2>
      </div>
      {viewAllLink && (
        <Link to={viewAllLink} className="font-body font-medium text-[13px] text-oro shrink-0 press">
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
