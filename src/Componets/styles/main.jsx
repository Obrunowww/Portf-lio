import styled ,{keyframes} from "styled-components";

// animação da sessão aparecendo
export const aparecer = keyframes`
from{
opacity: 0;
}to{
opacity: 1;
}
`
// animação da figure
const movimentar = keyframes`
0%{
    transform: translateY(0px);
}50%{
    transform: translateY(10px);
}
100%{
    transform: translateY(0px);

}`

// Animação da digitação
const palavras = keyframes`
0%,38%{
    content: "Eu sou o Goku!" ;

}50%,60%{
    content: "Digo....";
}

86%,100%{
    content:"Eu sou o Bruno 😅" ;
}
`
const apagar = keyframes`
0%{
    border-left: 2px solid  ${(props) => props.theme.background};
}
`
const digitando = keyframes`
 0%, 40%, 70% {
    width: calc(100% + 10px);
  }
  28%, 62%, 85%, 100% {
    width: 0;
  }
`;


export const Principal = styled.main`
animation: ${aparecer} ease 2s;
width: 100%;
height: 88vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
::-webkit-scrollbar{
    width: 5px;
    
 }
 ::-webkit-scrollbar-track{
    background-color:${(props) => props.theme.corTerciariaClara};
    border-radius: 10px;
   
 }
 ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme.corPrincipal};
  }

`
export const SessãoPrincipal = styled.section`
width: 80%;
height: 90%;
display: flex;
justify-content: space-between;
position: relative;

`
export const Apresentação = styled.div`
width: 50%;
display: flex;
flex-direction: column;
font-size: 25px;
align-items: center;
justify-content: center;
gap: 5%;
p{
    width: 70%;
}
button{
    width: 30%;
    height: 10%;
    background-color: ${(props) => props.theme.background2};
    border: solid 1px;
    border-radius: 10px;
    transition: all ease 0.5s;
    display: flex;
    &:hover, &:focus{
        background-color: ${(props) => props.theme.background3};
        color: ${(props) => props.theme.corPrincipal};;
        filter: drop-shadow(2px 2px 20px ${(props) => props.theme.corSecundaria})
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        &:hover{
            color: ${(props) => props.theme.corPrincipal};
        }
    }
}

`

// Aqui é onde fiz a animação de digitação funcionar 

export const  TextoAnimado = styled.span`
position: relative;
&::before{
    content: "Eu sou o Bruno";
    color: ${(props) => props.theme.corPrincipal};
    
    animation: ${palavras} 10s ease;
}
&::after{
    content: "";
    position: absolute;
    height: 100%;
    border-left: solid 2px ${(props) => props.theme.corPrincipal};
    right: -10px;
    animation: ${apagar} 0.9s  infinite, ${digitando} 10s ease;
    width: 0;
    background-color: ${(props) => props.theme.background};
}
`



export const Figure = styled.figure`

width: 50%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
filter: grayscale(25%);

&:hover{
    filter: grayscale(0%);
    &::after{
        background-color: ${(props) => props.theme.corSecundaria};
    }
}

&::after{
        content: "";
        position: absolute;
        bottom: -22%;
        right: 0;
        width: 100%;
        height: 15%;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        position: absolute;
        transition: all ease 2s;
    }
img{
    width: 90%;
    height: 90%;
    border-radius: 50%;
    transition: all ease 2s;
    

    &:hover{
        filter: drop-shadow(2px 2px 5px ${(props) => props.theme.corSecundaria});
        animation: ${movimentar} ease 2.5s infinite;
    }
}


`