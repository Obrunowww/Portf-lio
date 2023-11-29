import { Link } from "react-router-dom"
import { Principal, Figure, SessãoPrincipal, TextoAnimado, Apresentação, RedesSociaisNav } from "./styles/main"
import { useEffect } from "react"
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";



function Main({setAtivo}) {

    useEffect( () =>{
        setAtivo("Inicio")
    }, [])

    return (
        <Principal>
            <SessãoPrincipal>
                <Apresentação>
                    <h2>Desenvolvedor Front End</h2>
                    <p>Oi! <TextoAnimado /></p>

                    <button>
                        <Link to="/sobre">
                            Me conheça aqui!
                        </Link>
                    </button>

                    <RedesSociaisNav>
                        <ul>
                            <li onClick={() =>  window.open(`https://github.com/Obrunowww`, '_blank')}><VscGithub/></li>
                            <li onClick={() =>  window.open(`https://www.linkedin.com/in/bruno-cesar-b7842a292/`, '_blank')}><FaLinkedin /></li>
                        </ul>
                    </RedesSociaisNav>
                </Apresentação>
                <Figure>
                    <img src="./imagens/fotoParaPortifolio.jpg" alt="" />
                </Figure>

            </SessãoPrincipal>
        </Principal>
    )
}
export default Main