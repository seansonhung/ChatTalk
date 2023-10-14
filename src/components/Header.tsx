import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-28 max-w-80rem mx-auto flex items-center pt-4">
      <img 
        src="/icon.svg" 
        alt="Logo" 
        className="w-36 h-20 m-4" 
      />
      {/* Other header content */}
    </header>
  );
};

export default Header;
