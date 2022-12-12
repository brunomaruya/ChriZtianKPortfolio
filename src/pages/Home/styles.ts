import styled from 'styled-components'
import chrisImg from '../../../public/assets/christian.jpg'

export const HomeContainer = styled.section`
  width: 100%;
  padding-bottom: calc(${(props) => props.theme['navbar-height']} + 10rem);
`
export const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${chrisImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  & > div {
    width: 100%;
    max-width: ${(props) => props.theme['max-width']};
    padding: 3rem;
    margin-top: 4rem;
  }
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
  @media (max-width: 768px) {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) 30%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${chrisImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1rem;
    }
    & > div {
      text-align: center;
    }
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Button = styled.button`
  width: 9rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 3px solid ${(props) => props.theme.blue};
  outline: 0;
  border-radius: 30px;
  transition: 0.3s background;
  a {
    font-size: 1rem;
    color: ${(props) => props.theme.blue};
    transition: 0.3s color;
  }
  &:hover {
    background: ${(props) => props.theme.blue};
    a {
      color: white;
    }
  }
`
export const LastWorksContainer = styled.section`
  margin-top: 5rem;
  h1 {
    margin-bottom: 5rem;
    position: relative;
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
  }
`
export const LastWorksWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  justify-items: center;
  margin: auto;
  padding: 3rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`
