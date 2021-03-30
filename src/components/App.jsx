import './App.css'
import React from 'react'
import Primeiro from './Primeiro'
import ComParametro from './ComParametro'
import ComFilhos from './ComFilhos'
import Card from './layout/Card'
import Repeat from './Repeat'
import Conditional from './Conditional'
export default props =>
    <div className="App">
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="Primeiro Componente">
            <ComParametro Titulo="Com Passagem"
            Subtitulo="Sub-Titulo"/>*
        </Card>
        <Card titulo="Segundo">
            <ComFilhos>
                <ul>
                <li>Willian</li>
                <li>Carlos</li>
                <li>Soares</li>
                <li>Pereira</li> 
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Laço For">
           <Repeat/>
        </Card>
        <Card titulo="Condicional">
           <Conditional numero={11}/>
        </Card>
    </div>
