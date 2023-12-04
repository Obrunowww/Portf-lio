import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navegação, Lista, HeaderContainer, BotãoContainer, BotãoContainerMobile, NavegaçãoMobile, MenuMobile } from "./styles/header"
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

function Header({ escuro, setEscuro, ativo, setAtivo }) {

    const [menuMobileAberto, setMenuAberto] = useState(false)
    const [animaçãoMenu, setAnimaçãoMenu] = useState(true)


    const ativar = (ativador) => {
        if (ativador != ativo) {
            setAtivo(ativador)
        }

    }

    const Interagir = (local) => {
        if (local) {
            ativar(local)
        }

        setAnimaçãoMenu(false)
        setTimeout(() => {
            setMenuAberto(false)
            setAnimaçãoMenu(true)
        }, 900)
    }


    return (
        <HeaderContainer>
            <div>
                <h1> Bn.Portfólio=</h1>
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

            <NavegaçãoMobile>

                <button className='menu' onClick={() => setMenuAberto(!menuMobileAberto)}>
                    <CiMenuBurger />
                </button>

                {menuMobileAberto ?
                    <MenuMobile animaçãoMenu={animaçãoMenu == true ? "true" : "false"}>
                        <ul>
                            <Lista ativo={ativo == 'Inicio' ? "true" : "false"}>
                                <Link onClick={() => {
                                    Interagir("Inicio")
                                }} to="/">
                                    Inicio
                                </Link>
                            </Lista>
                            <Lista ativo={ativo == 'Sobre' ? "true" : "false"}>
                                <Link onClick={() => {
                                    Interagir("Sobre")
                                }} to="/sobre">
                                    Sobre
                                </Link>
                            </Lista>
                            <Lista
                                ativo={ativo == 'Projetos' ? "true" : "false"}>
                                <Link onClick={() => {
                                    Interagir("Projetos")
                                }} to="/projetos">
                                    Projetos
                                </Link>
                            </Lista>
                        </ul>


                        <BotãoContainerMobile modoEscuro={escuro ? "true" : "false"}>

                            <button onClick={() => setEscuro(!escuro)}>

                                <div>

                                    <IoMdSunny />
                                </div>
                                <div>
                                    <FaMoon />

                                </div>

                            </button>

                        </BotãoContainerMobile>

                        <div className='voltar' onClick={() => Interagir()}>Voltar</div>
                    </MenuMobile>
                    : null}

            </NavegaçãoMobile>


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