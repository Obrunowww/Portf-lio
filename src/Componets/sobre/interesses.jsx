import { InteressesContainer, ListaPersonalizada } from "../styles/sobre"
import { useState } from "react"

function Interesses() {
    const [menus, setMenus] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
    })


    return (
        <InteressesContainer>
            <div>
                <ul>
                    <ListaPersonalizada aberto={menus.menu1 ? "true" : "false"} >
                        <h2 onClick={() => {
                            setMenus({ ...menus, menu1: !menus.menu1 })
                        }}>React</h2>

                        <div>
                            <p>Em React, tenho o desejo de aprofundar meu conhecimento em algumas bibliotecas e explorar outras. Atualmente, meu foco está em aprender Redux e aprimorar minhas habilidades no React Router e Styled Components.</p>
                        </div>
                    </ListaPersonalizada>
                    <ListaPersonalizada aberto={menus.menu2 ? "true" : "false"} >
                        <h2 onClick={() => {
                            setMenus({ ...menus, menu2: !menus.menu2 })
                        }}>Ciencia da Computação</h2>

                        <div>
                            <p>Além de concluir o CC50, estou ansioso para iniciar uma graduação em Ciência da Computação. Quero aprofundar meus conhecimentos na área e expandir minha compreensão sobre os fundamentos e aplicações da computação.</p>
                        </div>
                    </ListaPersonalizada>
                    <ListaPersonalizada aberto={menus.menu3 ? "true" : "false"}>
                        <h2 onClick={() => {
                            setMenus({ ...menus, menu3: !menus.menu3 })
                        }}>Python, C++</h2>

                        <div>

                            <div>
                                <p>Em relação ao Python, meu objetivo é ir além do básico e aprofundar meu conhecimento na linguagem. No futuro, pretendo estudar mais a fundo. Quanto ao C++, estou interessado em aprender, especialmente porque tenho planos de criar um jogo na Unreal, que utiliza C++. Portanto, estou me preparando para esse propósito específico.</p>
                            </div>
                        </div>
                    </ListaPersonalizada>
                </ul>
            </div>

            {menus.menu1 || menus.menu2 || menus.menu3? null : <div className="info"> <h2>Clique em um dos topicos para ver a informação</h2></div>}
        </InteressesContainer>
    )
}
export default Interesses