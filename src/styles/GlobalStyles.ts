import styled, { createGlobalStyle } from 'styled-components';

type themeProps = {
  theme: {
    white: 'string';
  };
};

export const GlobaStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    color:white;
    -webkit-font-smoothing: antialiased;

  }
  a{
    text-decoration: none;
    color: ${(props: themeProps) => props.theme.white}
  }
  li{
    list-style: none;
  }
`;
export const AppContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: relative;
  background: ${(props) => props.theme['gray-900']};
`;
