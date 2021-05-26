import React from 'react'

export default function AtaqueRapido({fastAttack}) {
    return (
        <table>
            <caption>Ataque Rápido</caption>
            <tbody>
            <tr>
                <th>Bezeichnung</th>
                <th>Energie</th>
                <th>Kraft</th>
                <th>Dauer</th>
                <th>Typ</th>
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
