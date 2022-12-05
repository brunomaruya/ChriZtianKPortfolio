import styled, { createGlobalStyle } from 'styled-components'

export const GlobaStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    color:white
  }
  a{
    text-decoration: none;
    color: ${(props) => props.theme.white}
  }
  li{
    list-style: none;
  }
`
export const AppContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: ${(props) => props.theme['gray-900']};
`
