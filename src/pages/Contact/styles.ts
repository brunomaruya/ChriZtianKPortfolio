import styled from 'styled-components'
import chrisImg from '../../../public/assets/4.jpg'

export const ContactContainer = styled.section`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 3rem;
  margin: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
  padding-inline: 3rem;
  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
  }
`
export const MessageContainer = styled.div`
  padding-block: 3rem;
  margin-bottom: ${(props) => props.theme['footer-height']};

  h1 {
    margin-bottom: 4rem;
    font-size: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    input,
    textarea {
      padding: 1rem;
      color: ${(props) => props.theme['gray-900']};
      border-radius: 10px;
    }

    & > div:first-child {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 4rem;
      div {
        width: 100%;
        input {
          width: 100%;
        }
      }

      @media (max-width: 1120px) {
        flex-direction: column;
      }
    }
    & > div {
      width: 100%;
      margin-bottom: 4rem;
    }
    button {
      padding: 1rem 3rem;
      padding-bottom: ${(props) => props.theme['footer-heihgt']};
      background: ${(props) => props.theme.blue};
      border-radius: 10px;
      transition: all 0.2s;
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
  @media (max-width: 1120px) {
    margin-bottom: 0;
  }
`

export const InformationContainer = styled.div`
  padding: 3rem;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${chrisImg});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 1120px) {
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);

    margin-bottom: calc(${(props) => props.theme['footer-height']} + 5rem);
  }
`
