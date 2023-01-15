import { Divide as HamburgerMenu } from 'hamburger-react';
import { useState } from 'react';

interface HamburgerProps {
  toggleNavigation: () => void;
}

export function Hamburger({ toggleNavigation }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    toggleNavigation();
  };

  return <HamburgerMenu size={24} onToggle={toggle} toggled={isOpen} />;
}
