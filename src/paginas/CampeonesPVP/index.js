import React from 'react'
import { Link } from 'react-router-dom'
import {campeonesVelocidad} from '../../services/servicios'

export default function CampeonesPVP() {

    const campeones=campeonesVelocidad()

    console.log(campeones);
    
    return (
        <>
            <section>
                <h2>Aquí Analizamos los ataques de cada pokemon</h2>
                <Link to="/">Back to pokemons</Link>
            </section>
            
            <table>
            <caption><h3>Campeones en elocidad de ataque</h3></caption>
            <thead>
            <tr>
                <th>Pokemon Champion en PVP </th>
                <th>Movimientos</th>
                <th>Numero de turnos</th>
                <th>Tiempo</th>
            </tr>
           </thead>
            <tbody>
            {campeones.map(e=> <tr key={e.id + e.forma}><td>{e.id}. {e.name} y forma({e.forma})</td><td>{e.ataque_rapido + " + "+ e.ataque_cargado}</td><td>{e.numTurnos}</td><td>{e.tiempo}</td></tr>)}
            </tbody>
             
            
        </table>
        </>
    )
}
