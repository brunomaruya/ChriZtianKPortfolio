import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  max-width: ${(props) => props.theme['max-width']};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 2rem 6rem;
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
`
