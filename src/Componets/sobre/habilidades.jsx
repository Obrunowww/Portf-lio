import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5";
import { AbilidadesContainer , IconesContainer, InfoDaAbilidade} from "../styles/sobre";

import { Icone} from "../styles/sobre";

//  João se tu tiver lendo isso me inspirei/ copiei essa parte do seu kkkkkkkkkkkkkkkk



function Abilidades() {

    const [abilidadeAtual, setAbilidaddeAtual] = useState(MensagemPadrão)
    const TodasAbilidades = [{
        nome: "HTML5",
        logo: <FaHtml5 />,
        corHover: { cor: "#F06529", bg: "#18345A" },
        info: "estou familiarizado com as tags semânticas da Linguagem de Marcação de Hipertexto (HTML) e estou constantemente buscando aprender mais sobre elas.",
    },
    {
        nome: "CSS3",
        logo: <FaCss3Alt />,
        corHover: { cor: "#2965f1", bg: "white" },
        info: "Estou familiarizado com conceitos de responsividade e flexibilidade no Cascading Style Sheets(CSS), tenho algum conhecimento em grid e estou extremamente interessado em criar animações usando CSS."
    },
    {
        nome: "JavaScript",
        logo: <IoLogoJavascript />,
        corHover: { cor: "white", bg: "#F0DB4F" },
        info: "Tenho conhecimento em moderado de JavaScript para manipulação do DOM, incluindo loops, manipulação de arrays e utilização de APIs. Desenvolvi projetos, como o do One Piece, que está disponível em Projetos. No momento, estou trabalhando em um projeto que envolve a utilização da API TMDB para um site de filmes."
    },
    {
        nome: "React",
        logo: <FaReact />,
        corHover: { cor: "#61DBFB", bg: "#222222" },
        info: "Tenho um conhecimento moderado em React. Foi quando o aprendi que me apaixonei pelo front-end. Estou buscando me aprofundar em algumas bibliotecas e frameworks, como o Swiper, Styled Components, React Icons, entre outros."
    },
    {
        nome: "Styled Components",
        logo: <SiStyledcomponents />,
        corHover: { cor: "#fc49c9", bg: "#FFA76A" },
        info: "Ainda estou aprendendo sobre os Styled Components. A utilização da lógica e a facilidade que eles proporcionam na estilização me agradaram muito. Pretendo estudar mais sobre essa ferramenta."
    },
    {
        nome: "Phyton",
        logo: <FaPython />,
        corHover: { cor: "#204462", bg: "#F4CA3B" },
        info: "Python foi a primeira linguagem de programação com a qual me deparei. Sua simplicidade e diversidade me impressionaram bastante. Futuramente, pretendo aprofundar meus conhecimentos nessa linguagem, especialmente porque também é uma das presentes no CC50."
    }

    ]
    const [mostrarAbilidade, setMostrarAbilidade] = useState(false)
    const [infoAbilidadeAtual, setInfoAbilidadeAtual] = useState("")


    const mostrar =(titulo, info) =>{

        setInfoAbilidadeAtual({
            titulo: titulo,
            info: info
        })
        setMostrarAbilidade(true)
    }
    const sair = () =>{
        setInfoAbilidadeAtual("")
        setMostrarAbilidade(false)
    }

    return (
        <AbilidadesContainer>
            <InfoDaAbilidade>
                {mostrarAbilidade? 
                <div>
                <h2>{infoAbilidadeAtual.titulo}</h2>
                <p>{infoAbilidadeAtual.info}</p>
                </div> : abilidadeAtual} 

            </InfoDaAbilidade>

            <IconesContainer>
                {TodasAbilidades.map((abilidade, index) => (
                    <Icone cor={abilidade.corHover.cor}
                    bg={abilidade.corHover.bg}
                    onMouseEnter={()=> {
                        mostrar(abilidade.nome, abilidade.info)
                    }}
                    onMouseLeave={sair}
                    key={index}
                    >
                        {abilidade.logo}
                    </Icone>
                ))}
            </IconesContainer>
        </AbilidadesContainer>
    )
}

function MensagemPadrão() {
    return (
       <h2>
         Passe em cima de uma das tecnologias 
       </h2>
    )
}


export default Abilidades