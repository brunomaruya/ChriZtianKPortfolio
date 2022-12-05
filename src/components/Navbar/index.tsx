import { LinksContainer, NavbarContainer } from './styles'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <span>ChriZtianK</span>
      <LinksContainer>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact me</a>
        </li>
      </LinksContainer>
    </NavbarContainer>
  )
}
