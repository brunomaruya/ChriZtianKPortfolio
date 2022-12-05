import { useState } from 'react'
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

  return (
    <NavbarContainerContainer background={background}>
      <NavbarContainer>
        <span>ChriZtianK</span>
        <LinksContainer>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact me</a>
          </li>
        </LinksContainer>
      </NavbarContainer>
    </NavbarContainerContainer>
  )
}
