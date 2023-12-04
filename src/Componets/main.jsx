import { Link } from "react-router-dom"
import { Principal, Figure, SessãoPrincipal, TextoAnimado, Apresentação, RedesSociaisNav } from "./styles/main"
import { useEffect } from "react"
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";



function Main({setAtivo}) {

    useEffect( () =>{
        setAtivo("Inicio")
    }, [])

    return (
        <Principal>
            {/* Sessão Principal desktop e tablet */}
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
                            <li onClick={()=> window.open(`https://api.whatsapp.com/send/?phone=%2B5521978755710&text&type=phone_number&app_absent=0`, "_blank")}><FaWhatsapp /></li>
                        </ul>
                    </RedesSociaisNav>
                </Apresentação>
                <Figure>
                    <img src="./imagens/fotoParaPortifolio.jpg" alt="Foto do Bruno" />
                </Figure>

            </SessãoPrincipal>
            
        </Principal>
    )
}
export default Main