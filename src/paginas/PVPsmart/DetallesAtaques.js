import React from 'react'
import {detallesFastMovesPVP, detallesChargedMovesPVP, bestFastMoveToCharge, fastestChargedMoves} from '../../services/servicios'

export default function DetallesAtaques({pokemon, index}) {

    const fast_moves=detallesFastMovesPVP(pokemon.ataques[index].fast_moves)
    const charged_moves=detallesChargedMovesPVP(pokemon.ataques[index].charged_moves)
    const bestToCharge=bestFastMoveToCharge(fast_moves)
    const fastestCharged=fastestChargedMoves(charged_moves)

    return (
        <>
          <thead>
            <tr>
                <th>Movimientos Rápidos en PVP // forma {pokemon.ataques[index].form}</th>
                <th>carga</th>
                <th>daño</th>
                <th>velocidad</th>
            </tr>
            {fast_moves.map(e=><tr key={e.move_id}><td>{e.name}</td><td>{e.energy_delta}</td><td>{e.power}</td><td>{e.duration/1000} seg</td></tr>)}
            </thead>
            <tbody>
            <tr>
                <th>Movimientos Cargados en PVP // forma {pokemon.ataques[index].form}</th>
                <th>Energía</th>
                <th>daño</th>
                <th>Tipo</th>
            </tr>
            {charged_moves.map(e=><tr key={e.move_id}><td>{e.name}</td><td>{e.energy_delta}</td><td>{e.power}</td><td>{e.type}</td></tr>)}
            </tbody>
            <tfoot>
            <tr>
            <td colSpan='4'>
                El mejor ataque rápido para dar energía es {bestToCharge.name} con una velocidad de {bestToCharge.vel.toFixed(2)}
            </td>
            </tr>
            <tr>
            <td colSpan='4'>
                El ataque cargado más rápido es {fastestCharged.name} 
                y se carga en {Math.trunc((-fastestCharged.energy/bestToCharge.energy)+1)} turnos 
                y dura {Math.trunc(((-fastestCharged.energy/bestToCharge.energy))+1)*bestToCharge.duration/1000} segundos
            </td>
            </tr>
            </tfoot>
        </>
    )
}
