import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: ${(props) => props.theme['max-width']};
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  padding: 3rem;
  margin: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
  padding-bottom: ${(props) => props.theme['footer-height']};
  /* padding-bottom: 50rem; */
  img {
    object-fit: cover;
  }
`
export const AboutWrapper = styled.div`
  h1 {
    margin-bottom: 3rem;
    font-size: 4rem;
  }
`
