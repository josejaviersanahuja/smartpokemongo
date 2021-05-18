import React from 'react'
import {detallesFastMovesPVP, detallesChargedMovesPVP, bestFastMoveToCharge, fastestChargedMoves} from '../../services/servicios'

export default function DetallesAtaques2({datapokForma}) {
    
    let fast_moves=[]
    if (datapokForma.fast_moves.length > 0) {
        fast_moves=detallesFastMovesPVP(datapokForma.fast_moves)
    } 
    let charged_moves=[]
    if (datapokForma.charged_moves) {
        charged_moves=detallesChargedMovesPVP(datapokForma.charged_moves)
        
    } 
    const bestToCharge=bestFastMoveToCharge(fast_moves)
    const fastestCharged=fastestChargedMoves(charged_moves)
    console.log(bestToCharge, fastestCharged);
    return (
        <>
          <thead>
            <tr>
                <th>Forma </th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Stamina</th>
                <th>Movimientos Rápidos</th>
                <th>Movimientos Cargados</th>
            </tr>
          
            </thead>
            <tbody>
            <tr>
                <td>{datapokForma.form} </td>
                <td>{datapokForma.base_attack} </td>
                <td>{datapokForma.base_defense} </td>
                <td>{datapokForma.base_stamina} </td>
                <td>{datapokForma.fast_moves.map(e=> <a href key={e + datapokForma.fast_moves.indexOf(e) }>{e + " "} </a>)} </td>
                <td>{datapokForma.charged_moves.map(e=> <a href key={e + datapokForma.charged_moves.indexOf(e)}>{e + " "} </a>)} </td>
            
            </tr>
           
            </tbody>
           
        </>
    )
}
