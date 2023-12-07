import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Componets/header"
import Projetos from './Componets/projetos'
import Main from './Componets/main'
import Sobre from './Componets/sobre'
import { ThemeProvider } from 'styled-components'
import { temas } from './Componets/styles/tema'
import Reset from './Componets/styles/reset'


function App() {

  const [escuro, setEscuro] = useState(true)
  const [ativo, setAtivo] = useState("Inicio")

  return (
    <>
      <ThemeProvider theme={escuro? temas.escuro: temas.claro}>
        <Reset/>
        <BrowserRouter>
        
          <Header escuro= {escuro} setEscuro = {setEscuro} ativo={ativo} setAtivo={setAtivo}/>

          <Routes>
            <Route path='' element={<Main setAtivo = {setAtivo}/>} ></Route>
            <Route path='/sobre' element={<Sobre setAtivo = {setAtivo} />}></Route>
            <Route path='/projetos' element={<Projetos setAtivo = {setAtivo}/>}></Route>

          </Routes>

        </BrowserRouter>

      </ThemeProvider>
    </>
  )
}

export default App
