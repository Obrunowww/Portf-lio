import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navegação, Lista, HeaderContainer, BotãoContainer } from "./styles/header"
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

function Header({ escuro, setEscuro, ativo, setAtivo }) {



    const ativar = (ativador) => {
        if (ativador != ativo) {
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
                    <Lista onClick={() => {
                        ativar("Inicio")
                    }} ativo={ativo == 'Inicio' ? "true" : "false"}>
                        <Link to="/">
                            Inicio
                        </Link>
                    </Lista>
                    <Lista onClick={() => {
                        ativar("Sobre")
                    }} ativo={ativo == 'Sobre' ? "true" : "false"}>
                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </Lista>
                    <Lista onClick={() => {
                        ativar("Projetos")
                    }}
                        ativo={ativo == 'Projetos' ? "true" : "false"}>
                        <Link to="/projetos">
                            Projetos
                        </Link>
                    </Lista>
                </ul>



            </Navegação>

            <BotãoContainer modoEscuro={escuro ? "true" : "false"}>

                <button onClick={() => setEscuro(!escuro)}>

                    <div>

                        <IoMdSunny />
                    </div>
                    <div>
                        <FaMoon />

                    </div>

                </button>

            </BotãoContainer>

        </HeaderContainer>
    )
}

export default Header