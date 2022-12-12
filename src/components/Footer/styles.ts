import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: ${(props) => props.theme['footer-height']};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  /* background: ${(props) => props.theme['gray-900']}; */
  background: black;
  @media (max-width: 768px) {
    height: calc(${(props) => props.theme['footer-height']} + 5rem);
  }
`
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`
export const CollumnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    ul {
      h1 {
        display: none;
      }
    }
    ul:first-child {
      h1 {
        display: block;
      }
      p {
        display: none;
      }
    }
    ul:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 1rem;
    }
    ul:last-child {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      li {
        span {
          display: none;
        }
      }
    }
  }
`
export const Collumn = styled.ul`
  h1 {
    margin-bottom: 1rem;
  }
  p {
    color: ${(props) => props.theme['gray-300']};
  }
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      a {
        color: ${(props) => props.theme['gray-300']};
      }
    }
  }
  &:last-child {
    ul {
      li {
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`
