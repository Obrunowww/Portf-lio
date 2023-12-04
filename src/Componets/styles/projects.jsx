import styled from "styled-components";
import { aparecer } from "./main";



export const ProjetosContainer = styled.section`
padding-right: 2%;
width: 80%;
height: 80%;
display: flex;
animation: ${aparecer} ease 6s;
justify-content: space-between;
flex-wrap: wrap;
overflow: hidden;
transition: all ease 2s;
position: relative;

 ::-webkit-scrollbar{
    width: 5px;
    
 
 }
 ::-webkit-scrollbar-track{
    background-color: ${(props) => props.theme.corTerciariaEscura};
   
 }
 ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.corTerciariaClara};
    border-radius: 10%;
   
  }
 &:hover{
   overflow: auto;
   
 }
 @media (max-width: 450px) {
    flex-wrap: nowrap;
    flex-direction: column;
    width: 90%;
    height: 90%;
    gap: 5%;
 }
`
export const BotãoDasLinguagens = styled.button`
    transition: all ease 1s;
    padding: 1%;
    border: solid 1px ;
    background-color: ${props => props.cordefundo};
    color: black;
    
`

export const Projeto = styled.div`

position: relative;
overflow: hidden;
width: 45%;
height: 62%;
padding-bottom: 2%;
filter: grayscale(90%);
transition: all ease 1s;
cursor: pointer;

&:hover{
    filter: grayscale(0%);

    div{
        bottom: 0%;
    }
}

figure{
    
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        color: #fafafa65;
    }
}
@media (max-width: 450px) {
    width: 100%;
    height: 62%;
    flex: none;
    font-size: 20px;
}

`
export const ProjetoInfos = styled.div`
position: absolute;
cursor: auto;
padding: 1%;
display: flex;
flex-direction: column;
gap: 5%;
color: ${(props) => props.theme.corDoTextoInfos};;
width: 100%;
background-color:${(props) => props.theme.corPrincipal};
height: 50%;
bottom: -50%;
transition: all ease 1s;
overflow: auto;


span{
    color: ${(props) => props.theme.corDeDestaque};
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}




`