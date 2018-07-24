import styled, { injectGlobal, css } from 'styled-components';

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  
  h1 {
    font-family: Montserrat;
  }
`

export const theme = {
    primary: "#6e27c5"
}

export const theme1 = {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222'
}

export const theme2 = {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#f16623',
    light: '#f4f4f4',
    dark: '#222'
}

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props =>
props.primary &&
css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`

export const Selection = styled.div`
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid grey
  width: 100px
`

export const SelectionList = styled.ul`
    height: 50px;
    overflow-y: auto;
    padding:0;
    list-style:none;
`
