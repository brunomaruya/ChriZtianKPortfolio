import styled from 'styled-components'

export const PortfolioContainer = styled.section`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  margin-inline: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
  margin-bottom: ${(props) => props.theme['footer-height']};
  padding: 3rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    margin-bottom: calc(${(props) => props.theme['footer-height']} + 5rem);
  }
`
export const FullImage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  overflow: hidden;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  img {
    width: auto;
    max-width: 90%;
    max-height: 90%;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  font-size: 3rem;
  line-height: 0;
  border: 0;
  outline: 0;
`
export const ArrowButton = styled.button`
  margin-inline: 2rem;
  background: transparent;
  font-size: 3rem;
  line-height: 0;
  border: 0;
  outline: 0;
`
