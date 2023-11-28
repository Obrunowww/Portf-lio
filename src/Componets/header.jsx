import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Navegação, Lista, HeaderContainer} from "./styles/header"



function Header({escuro, setEscuro, ativo, setAtivo}) {
    
    

    const ativar = (ativador) =>{
        if(ativador != ativo){
            setAtivo(ativador)
        }

    }

   
    return (
        <HeaderContainer>
            <div>
                <div> Bn </div>
            </div>
            <Navegação>
                <ul>
                    <Lista onClick={() =>{
                        ativar("Inicio")
                    }} ativo ={ativo == 'Inicio'? "true": "false"}>
                        <Link to="/">
                            Inicio
                        </Link>
                    </Lista>
                    <Lista onClick={() =>{
                        ativar("Sobre")
                    }}  ativo ={ativo == 'Sobre'? "true": "false"}>
                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </Lista>
                    <Lista onClick={() =>{
                        ativar("Projetos")
                    }} 
                    ativo ={ativo == 'Projetos'? "true": "false"}>
                        <Link to="/projetos">
                            Projetos
                        </Link>
                    </Lista>
                </ul>

                

            </Navegação>

            <div>
           <button onClick={()=> setEscuro(!escuro)}> alterar</button>

            </div>
               
        </HeaderContainer>
    )
}

export default Header