import { Link } from "react-router-dom"
import { Principal, Figure, SessãoPrincipal, TextoAnimado, Apresentação } from "./styles/main"
import { useEffect } from "react"



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

                    <section><h2>Redes Sociais</h2></section>
                </Apresentação>
                <Figure>
                    <img src="./imagens/fotoParaPortifolio.jpg" alt="" />
                </Figure>

            </SessãoPrincipal>
        </Principal>
    )
}
export default Main