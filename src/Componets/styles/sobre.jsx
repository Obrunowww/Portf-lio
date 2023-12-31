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
@media (max-width: 890px) {
    width: 95%;
    height: 95%;
    font-size: 20px;
    overflow: auto;
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

@media (min-width: 850px) and (max-width: 1000px) {
    font-size: 25px;

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

@media (max-width: 890px) {
    div{
        width: 60%;
        height: 40px;
        padding: 1%;
    }
}
@media (min-width: 850px) and (max-width: 1000px) {
  
    div{
        width: 60%;
        height: 50px;
        padding: 1%;
    }
}

`

// Abilidades

export const AbilidadesContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;


@media (max-width:890px) {
   flex-direction: column-reverse;
   height: 100%;
}
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
@media (max-width: 890px) {
   width: 35%;
   height: 35%;
   font-size: 30px;
}

`
export const IconesContainer = styled.div`
width: 30%;
height: 60%;
gap: 2%;
display: flex;
flex-wrap: wrap;
@media (max-width: 890px) {
   width: 90%;
   height: 40%;
   justify-content: center;
}
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
@media (max-width: 890px) {
  width: 100%;
}
`

//Interesses

export const InteressesContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 1%;
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
    animation: ${aparecer} ease 3s;
}
@media (max-width: 890px) {
    .info{
        width: 100%;
    }
    
}

`

export const ListaPersonalizada = styled.li`
overflow: hidden;
flex: none;
height: ${props => props.aberto === "true" ? "40%" : "10%"};
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
        right: 1.5%;
        display: block;
        bottom: 0;
        transform: translateY(10%);
        height: 100%;
        width: 3%;
        font-size: 15px;
    }
}
p{
    margin-top: 4%;
    padding: 0% 1%;
}
@media (max-width: 450px) {
    height: ${props => props.aberto === "true" ? "70%" : "10%"};
   
}
@media (min-width: 850px) and (max-width: 1000px) {
    height: ${props => props.aberto === "true" ? "30%" : "7%"};
}


`