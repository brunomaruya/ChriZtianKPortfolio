import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  LinksContainer,
  NavbarContainer,
  NavbarContainerContainer,
} from './styles'

export const Navbar = () => {
  const [background, setBackground] = useState('transparent')

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setBackground(`#121214`)
    } else {
      setBackground('transparent')
    }
  }

  const goUp = () => {
    window.scrollY(0)
  }

  return (
    <NavbarContainerContainer background={background}>
      <NavbarContainer>
        <span>
          <a href="/" onClick={() => (window.scrollY = 0)}>
            ChriZtianK
          </a>
        </span>
        <LinksContainer>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={goUp}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/about`}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={goUp}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/portfolio`}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={goUp}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/contact`}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={goUp}
            >
              Contact me
            </NavLink>
          </li>
        </LinksContainer>
      </NavbarContainer>
    </NavbarContainerContainer>
  )
}
