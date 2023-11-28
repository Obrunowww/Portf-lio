import { ConteudoInfoContainer } from "../styles/sobre"

function SobreMim({ alterarInfo }) {
    return (
        <ConteudoInfoContainer>
            <h2>Bruno Cesar - Desenvolvedor Front-End em Ascensão</h2>
            <p>Olá! Meu nome é Bruno Cesar, tenho 22 anos e sou um entusiasta da programação. No ano de 2023, dei meus primeiros passos na área, explorando o mundo da programação com Python. Conforme mergulhava nesse universo, descobri o fascinante campo do desenvolvimento Front-End e minha jornada tomou um rumo empolgante.</p>
            <h2>Educação e Formação</h2>
            <ul>
                <li>
                    <h3>Vai Na Web</h3>
                    <p>Explorei as possibilidades do Front-End, absorvendo os fundamentos de <span>HTML</span>, <span> CSS</span>,  <span>JavaScript</span> e <span>React</span>. Descobri como essas linguagens combinadas são capazes de dar vida a projetos incríveis.</p>
                </li>
                <li>
                    <h3>CC50 - Harvard University</h3>
                    <p>Estou mergulhando no mundo da Ciência da Computação por meio deste curso da Harvard University. É um caminho que estou trilhando simultaneamente ao meu aprendizado em Front-End, ampliando meu conhecimento de forma abrangente.</p>
                </li>
            </ul>
            <div className="botões">
            <button onClick={() => { alterarInfo(100, 102) }}>Ver minhas Habilidades</button>
            <button>
                <a href="" download={true}>Meu currículo</a>
            </button>

            </div>
        </ConteudoInfoContainer>
    )
}
export default SobreMim