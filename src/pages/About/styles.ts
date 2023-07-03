import styled from 'styled-components';

export const AboutContainer = styled.section`
  margin: 0 auto;
  min-height: 100vh;
  max-width: ${(props) => props.theme['max-width']};
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 0 3rem 3rem;
  margin: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
  padding-bottom: ${(props) => props.theme['footer-height']};
  /* padding-bottom: 50rem; */
  img {
    filter: brightness(0.8);
    flex: 1;
    clip-path: inset(300px 0px 0px 0px);
    margin-top: -300px;
    max-height: 80rem;
    width: 50%;
    object-fit: cover;
    object-position: bottom;
  }
  @media (max-width: 1120px) {
    min-height: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: calc(${(props) => props.theme['footer-height']} + 4rem);
    margin-top: calc(${(props) => props.theme['navbar-height']} - 2rem);
    padding-bottom: 0;
    img {
      width: 100%;
      width: 100vw;
      margin-top: 4rem;
    }
  }
`;
export const AboutWrapper = styled.div`
  flex: 1;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 500;

    /* width: 200px; */
  }
  p {
    filter: drop-shadow(0px 10px 7px #000);

    top: 20rem;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;
