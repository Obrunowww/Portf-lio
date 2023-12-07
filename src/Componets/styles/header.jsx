import styled, {keyframes, css} from "styled-components"
import { aparecer } from "./main"

const animaçãoMenuAbrir = keyframes`
from{
    transform: translate(100%, -10%);
}to{
    transform: translate(0, 0);
}

`
const animaçãoMenuFechar = keyframes`
from{
    transform: translate(0, 0);
}to{
    transform: translate(100%, -10%);
}

`
const Descer = keyframes`
from{
    transform: translateY(-100%);
}
to{
    transform: translateY(0);
}
`

export const HeaderContainer = styled.header`
width: 100%;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 1px 1px 10px rgba(1,1,1,0.5);
background-color:${(props) => props.theme.headerColor} ;
animation: ${Descer} ease 1s;
`
export const Navegação = styled.nav`
width: 50%;
height: 80%;

ul{
    flex: none;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #3702f7ab;
}

@media (max-width: 890px) {
   display: none;
}

`
export const Lista= styled.li`
cursor: pointer;
text-align: center;

font-size: 20px;
transition: all ease 2s;
position: relative;
&:hover{
    color:${(props) => props.theme.corPrincipal};
    text-shadow: 1px 1px 1px black;
    font-size: 21px;

    &::after{
        width: 50%;
        opacity: 1;

    }
}
&::after {
    content: "";
    opacity:  ${(props)=> props.ativo == "true"? 1 : 0};
    position: absolute;
    transition: all ease 2s;
    width:  ${(props)=> props.ativo == "true"? "50%": "0%"};;
    bottom: 0;
    height: 3px;
    display: flex;
    right: 0;
    transform: translate(-50%, 70%);
    align-self: center;
    background-color:${(props) => props.theme.corPrincipal};
}
a{
    color:  ${(props)=> props.ativo == "true"? `${(props) => props.theme.corPrincipal}` : `${(props) => props.theme.corDoTexto}`} !important
    ;
}
a:hover{
    color: ${(props) => props.theme.corPrincipal};
    transition: all ease 2s;
}
`

// Botão de modoClaro/escuro

export const BotãoContainer= styled.div`
width: 4%;
height: 52%;

display: flex;
overflow: hidden;
align-items: center;
justify-content: center;
border-radius: 50%;



button{
    background-color: ${props => props.modoEscuro === "true" ? "#9ed5f7" : "#0000008d"};
    border: none;
    width: 100%;
    height: 100%;
    color:  ${props => props.modoEscuro === "true" ? "yellow" : "#8484fa"};
    font-size: 20px;
    display: flex;
  
    div{
        transition: all ease 1.5s;
        transform: ${props => props.modoEscuro === "true" ? "translateX(0%)" : "translateX(-100%)"} ;
        flex: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
}

@media (max-width: 890px) {
   display: none;
}

`

export const NavegaçãoMobile = styled.nav`
display: none;

button{
    width: 15%;
    font-size: 20px;
    border: none;
    height: 50%;
    background-color: transparent;
}

@media (max-width: 890px) {
    .menu{
    width: 15%;
    font-size: 25px;
    border: none;
    height: 50%;
    background-color: transparent;
    color:${(props) => props.theme.corPrincipal}
   
}
   display: flex;
   width: 50%;
   justify-content: flex-end;
   
}


`
export const MenuMobile = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background-color: ${(props) => props.theme.background};
animation: ${(props) => props.animaçãoMenu === "true" ? css`${animaçãoMenuAbrir} ease 1s` : css`${animaçãoMenuFechar} ease 1s`};
z-index: 3;
display: flex;
flex-direction: column;
align-items: center;
gap: 2%;
ul{
    display: flex;
    flex-direction: column;
    height: 15%;
    justify-content: space-between;
}
.voltar{
    &:hover{
        text-decoration: underline;
    }
}
`

export const BotãoContainerMobile = styled.div`
width: 10%;
height: 5%;
border: solid 1px;
display: flex;
overflow: hidden;
align-items: center;
justify-content: center;
border-radius: 50%;



button{
    background-color: ${props => props.modoEscuro === "true" ? "#9ed5f7" : "#0000008d"};
    border: none;
    width: 100%;
    height: 100%;
    color:  ${props => props.modoEscuro === "true" ? "yellow" : "#8484fa"};
    font-size: 20px;
    display: flex;
  
    div{
        transition: all ease 1.5s;
        transform: ${props => props.modoEscuro === "true" ? "translateX(0%)" : "translateX(-100%)"} ;
        flex: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`