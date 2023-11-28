import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: ${(props) => props.theme.corDoTexto};
  background-color: ${(props) => props.theme.background};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all ease 2s;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body{
  overflow: hidden;
}
a{
  color: ${(props) => props.theme.corDoTexto};
  transition: all ease 1s;
}

button{
  cursor: pointer;
  
}
`
export default Reset