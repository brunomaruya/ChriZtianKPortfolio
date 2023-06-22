import styled from 'styled-components';

export const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: ${(props) => props.theme['max-width']};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10rem;
  padding: 0 3rem 3rem;
  margin: auto;
  margin-top: ${(props) => props.theme['navbar-height']};
  padding-bottom: ${(props) => props.theme['footer-height']};
  /* padding-bottom: 50rem; */
  img {
    flex: 1;
    height: 100%;
    width: 100%;
    max-height: 80rem;
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
      position: relative;
      left: calc(-50vw + 50%);
    }
  }
`;
export const AboutWrapper = styled.div`
  position: absolute;
  flex: 1;
  margin-top: 7rem;
  margin-inline: 10rem;
  h1 {
    color: black;
    position: absolute;
    left: -7rem;
    /* text-align: center; */
    margin-bottom: 3rem;
    font-size: 4rem;
    font-weight: 500;

    /* width: 200px; */
  }
  p {
    top: 20rem;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    width: 30rem;
  }
  p:first-of-type {
    position: absolute;
    left: -7rem;
  }
  p:last-of-type {
    position: absolute;
    left: 40rem;
  }
`;
