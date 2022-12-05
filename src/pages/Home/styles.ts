import styled from 'styled-components'
import patoImg from '../../../public/assets/pato.jpg'

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${patoImg});
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
`
export const HomeWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem;
  color: ${(props) => props.theme.white};
  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 3rem;
  }
  h2 {
    font-size: 5rem;
    line-height: 5rem;
  }
  h3 {
    margin-bottom: 2rem;
    line-height: 2rem;
    font-size: 2rem;
    font-weight: 400;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Button = styled.button`
  width: 8rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  outline: 0;
  border-radius: 30px;
`
