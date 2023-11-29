import styled from "styled-components";
import { temaAtual } from "./tema";
import { aparecer } from "./main";

export const Infos = styled.section`
width: 85%;
height: 85%;
padding: 0.2%;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #ffffff83;
border-radius: 10px;
overflow: hidden;
h2, h3{
    color: ${props => props.theme.corDeDestaqueClaro};
    text-shadow: 1px 1px 1px black;
}
`

export const InfosSeletor = styled.div`
width: 100%;
height: 15%;
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 1px 1px 10px black;
position: relative;
border-radius: 10px;
&::before{
    content: "";
    position: absolute;
    width: 33%;
    display: block;
    height: 100%;
    border-radius: 10px;
    background-color: #00000032;
    top: 0;
    left: 0;
    transition: all ease 2s;
    transform: translateX(${props => props.deslocamento}%);
}

p{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 10px;
    transition: all ease 2s;
   
    cursor: pointer;
    &:hover{
        background-color: #00000032;
    }
}

`

export const InfoSelecionada = styled.section`
width: 100%;
height: 84%;
display: flex;
overflow: hidden;



.conteudoInfo{
    transition: all ease 2s;
    flex: none;
    width: 100%;
    transform: translateX(-${props => props.deslocamento}%);
    background-color: ${props => props.theme.corPrincipal}
 
   
}

`

export const ConteudoInfo = styled.div`
display: flex;
padding: 0.5%;
border-radius: 10px;

`

// Parte De Sobre Mim

export const ConteudoInfoContainer = styled.div`
width: 100%;
height: 100%;
overflow-y: auto;
display: flex;
flex-direction: column;
gap: 7%;
div{
    flex: none;
    width: 32% ;
    height: 30px;
    display: flex;
    justify-content: space-around;
    button{
    width: 45%;
    height: 100%;
    align-self: center;
    
    border: solid 1px;
    color: ${props => props.theme.corDeDestaqueClaro};
    transition: all ease 1s;
    filter: drop-shadow(1px 1px 1px black);
    background-color: ${props => props.theme.background2};
        a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: ${props => props.theme.corDeDestaqueClaro};
        }
        &:hover{
        background-color: ${props => props.theme.background3};
        filter: drop-shadow(2px 2px 20px ${(props) => props.theme.corSecundaria})
    }
}
}



`

// Abilidades

export const AbilidadesContainer = styled.div`
width: 100%;
height: 100;
display: flex;
justify-content: space-between;
align-items: center;
`


export const Icone = styled.div`
width: 40% ;
height: 40% ;
font-size: 75px;
display: flex;
align-items: center;
background-color: #000000bc;
justify-content: center;
transition: all ease 1s;
filter: grayscale(100%);
&:hover{
    color:  ${props => props.cor};
    filter: grayscale(0);
    
    background-color: ${props => props.bg};
    text-shadow: 1px 1px black;
}
`
export const IconesContainer = styled.div`
width: 30%;
height: 60%;
gap: 2%;
display: flex;
flex-wrap: wrap;
`

export const InfoDaAbilidade = styled.div`
width: 45%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
animation: ${aparecer} ease 2s;

div{
    animation: ${aparecer} ease 2s;
}
`

//Interesses

export const InteressesContainer = styled.div`
width: 100%;
height: 100%;
display: flex;

justify-content: center;
overflow: auto;
position: relative;

ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1%;
}
p{
    margin-top: 0.5%;
    font-size: 20px;
    background-color: #ffffff58;
}
.info{
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
}

`

export const ListaPersonalizada = styled.li`
overflow: hidden;
height: ${props => props.aberto === "true" ? "35%" : "10%"};
position: relative;
transition: height ease 1.5s;
display: flex;
flex-direction: column;

h2{
    cursor: pointer;
    padding-left: 1%;
    background-color: #0000003b;
    position: relative;
    &::before{
        content: "${props => props.aberto === "true" ? "▲" : "▼"}";
        position: absolute;
        right: 0;
        display: block;
        bottom: 0;
        transform: translateY(10%);
        height: 100%;
        width: 3%;
        font-size: 15px;
    }
}
p{
    padding: 0% 1%;
}

`