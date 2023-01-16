import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  LinksContainer,
  NavbarContainer,
  NavbarContainerContainer,
} from './styles';

export const Navbar = () => {
  const [background, setBackground] = useState('transparent');
  const [isOpen, setIsOpen] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setBackground(`#121214`);
    } else {
      setBackground('transparent');
    }
  };

  const showNavigation = () => {
    setIsOpen(true);
  };
  const hideNavigation = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainerContainer background={background}>
      <NavbarContainer>
        <span>
          <a href="/" onClick={() => (window.scrollY = 0)}>
            ChriZtianK
          </a>
        </span>
        <LinksContainer style={{ right: isOpen ? 0 : '-100%' }}>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/about`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/portfolio`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/contact`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact me
            </NavLink>
          </li>
          <X onClick={hideNavigation} />
        </LinksContainer>
        <List onClick={showNavigation} />
      </NavbarContainer>
    </NavbarContainerContainer>
  );
};
