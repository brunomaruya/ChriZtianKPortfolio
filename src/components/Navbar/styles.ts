import styled from 'styled-components'
export const NavbarContainerContainer = styled.div`
  height: ${(props) => props.theme['navbar-height']};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background: ${(props) => props.background || 'transparent'};
  transition: background-color 0.5s;
  .active {
    color: ${(props) => props.theme.blue};
  }
  .not-active {
    color: white;
  }
`
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme['max-width']};
  width: 100%;
  height: 3rem;

  padding: 3rem 3rem;
  color: ${(props) => props.theme.white};

  span {
    font-weight: 600;
    font-size: 2rem;
  }
`
export const LinksContainer = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  li {
    a {
      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`
