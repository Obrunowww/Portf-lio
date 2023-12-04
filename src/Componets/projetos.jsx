import { Principal } from "./styles/main"
import { ProjetosContainer, Projeto, ProjetoInfos,BotãoDasLinguagens} from "./styles/projects"
import projetos from "../Projetos"
import { useEffect } from "react"


function Projetos({setAtivo}){

    const cores = {HTML5: "#F06529", CSS3: "#2965f1", JavaScript:"#F0DB4F", React: "#61DBFB"}

    const abrirProjeto = (projeto) =>{
        window.open(projeto, '_blank')
    }

    // Fiz isso em todos os componentes pq qd att a pag ele voltava para o inicio na header mas ficava na parte do componente q foi att
    useEffect( () =>{
        setAtivo("Projetos")
    }, [])


    return(
        <Principal>
            <ProjetosContainer>
                {projetos.map((projeto, index) =>(
                    <Projeto key={index}>
                       

                        <figure onClick={()=>{
                            abrirProjeto(projeto.link)
                        }}> 
                            <img src={projeto.imagem} alt= {`imagem do projeto ${projeto.nome}`}  />
                        </figure>

                        <ProjetoInfos>
                            {projeto.responsivo? <p>É responsivo ✅</p> : <p> Não é responsivo ainda ❌</p>}
                            <h2>{projeto.nome}</h2>
                            <p>{projeto.descrição}</p>
                            <p onClick={()=>{
                                abrirProjeto(projeto.linkCodigo)
                            }}>Link para o <span>CÓDIGO</span> </p>
                            <div>
                            {projeto.linguagensUsadas.map((linguagem, index)=>(
                            <BotãoDasLinguagens  key={index} cordefundo = {cores[linguagem]}
                            >{linguagem}</BotãoDasLinguagens>
                            ))}

                            </div>
                        </ProjetoInfos>
                    </Projeto>
                ))}
            </ProjetosContainer>
        </Principal>
    )
}

export default Projetos