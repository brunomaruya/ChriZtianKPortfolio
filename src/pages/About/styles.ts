import styled from 'styled-components'

export const AboutContainer = styled.section`
  height: 100vh;
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  display: flex;
  gap: 10rem;
  padding: 3rem;
  margin: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
`
export const AboutWrapper = styled.div`
  h1 {
    margin-bottom: 3rem;
    font-size: 4rem;
  }
`
