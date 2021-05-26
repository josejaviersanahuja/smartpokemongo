import React from 'react'

export default function AtaqueRapido({fastAttack}) {
    return (
        <table>
            <caption>Ataque Rápido</caption>
            <tbody>
            <tr>
                <th>Nombre</th>
                <th>Carga</th>
                <th>Daño</th>
                <th>Tiempo</th>
                <th>Tipo</th>
            </tr>
            <tr>
                <td>{fastAttack.name}</td>
                <td>{fastAttack.energy_delta}</td>
                <td>{fastAttack.power}</td>
                <td>{fastAttack.turn_duration*0.5} seg</td>
                <td>{fastAttack.type}</td>
            </tr>
            </tbody>
        </table>
    )
}
