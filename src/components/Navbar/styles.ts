import styled from 'styled-components';

type props = {
  background: string;
};

export const NavbarContainerContainer = styled.div`
  height: ${(props) => props.theme['navbar-height']};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background: ${(props: props) => props.background || 'transparent'};
  transition: background-color 0.5s;
  .active {
    color: ${(props) => props.theme.blue};
  }
  .not-active {
    color: white;
  }
  @media (max-width: 1120px) {
    height: calc(${(props) => props.theme['navbar-height']} - 2rem);
    position: fixed;
  }
`;
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme['max-width']};
  width: 100%;
  height: 3rem;

  padding: 3rem 3rem;
  color: ${(props) => props.theme.white};
  svg {
    display: none;
  }

  span {
    font-weight: 600;
    font-size: 2rem;
    @media (max-width: 1120px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 1120px) {
    svg {
      display: block;
      font-size: 2rem;
    }
  }
`;
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

  @media (max-width: 1120px) {
    width: 50%;
    min-height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 900;
    padding: 6rem 3rem;
    background: ${(props) => props.theme['gray-900']};
    flex-direction: column;
    gap: 3rem;
    box-shadow: 0px 0px 29px 15px rgba(0, 0, 0, 1);
    transition: 0.3s ease-in-out;
    li {
      font-size: 1.5rem;
    }
    svg:first-of-type {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem;
      font-size: 2rem;
    }
  }
`;
