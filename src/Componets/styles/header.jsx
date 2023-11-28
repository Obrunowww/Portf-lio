import styled, {keyframes} from "styled-components"


export const HeaderContainer = styled.header`
width: 100%;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 1px 1px 10px rgba(1,1,1,0.5);
background-color:${(props) => props.theme.headerColor} ;
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