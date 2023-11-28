import { Principal } from "./styles/main"
import { useState } from "react"
import { Infos, InfosSeletor, InfoSelecionada, ConteudoInfo } from "./styles/sobre"
import { useEffect } from "react"
import SobreMim from "./sobre/sobreMim"
import Abilidades from "./sobre/habilidades"
import Interesses from "./sobre/interesses"

function Sobre({ setAtivo }) {

    const [infoAtual, setInfoAtual] = useState(0)
    const [deslocamento, setDeslocamento] = useState(0)

    const alterarInfo = (info, deslocamento) => {
        setInfoAtual(info)
        setDeslocamento(deslocamento)
    }

    useEffect(() => {
        setAtivo("Sobre")
    }, [])

    return (
        <Principal>
            <Infos>
                <InfosSeletor deslocamento={deslocamento}>
                    <p onClick={() => { alterarInfo(0, 0) }}>Sobre Mim</p>
                    <p onClick={() => { alterarInfo(100, 102) }}>Habilidades</p>
                    <p onClick={() => { alterarInfo(200, 203) }}>Interesses</p>
                </InfosSeletor>

                <InfoSelecionada deslocamento={infoAtual}>
                    <ConteudoInfo className="conteudoInfo" >
                       <SobreMim alterarInfo= {alterarInfo}/>
                        
                    </ConteudoInfo>
                    <ConteudoInfo className="conteudoInfo">
                        <Abilidades/>    
                    </ConteudoInfo>
                    <ConteudoInfo className="conteudoInfo">
                        <Interesses/>
                    </ConteudoInfo>
                </InfoSelecionada>

            </Infos>
        </Principal>
    )
}
export default Sobre