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
`
