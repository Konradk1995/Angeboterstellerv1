import React from 'react';

interface NavigationProps {
  activeSection: string;
  mobile?: boolean;
  onClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, mobile, onClick }) => {
  const links = [
    { href: '#intro', label: 'Home' },
    { href: '#vision', label: 'Vision' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#timeline', label: 'Timeline' },
  ];

  const baseClasses = "transition-colors duration-200";
  const activeClasses = "text-indigo-600 font-medium";
  const inactiveClasses = "text-gray-600 hover:text-indigo-600";
  const mobileClasses = mobile ? "block py-2" : "";

  return (
    <div className={mobile ? "flex flex-col" : "flex items-center space-x-8"}>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onClick}
          className={`${baseClasses} ${mobileClasses} ${
            activeSection === href.slice(1) ? activeClasses : inactiveClasses
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default Navigation;