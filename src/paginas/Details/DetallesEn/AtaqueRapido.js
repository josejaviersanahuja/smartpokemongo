import React from 'react'

export default function AtaqueRapido({fastAttack}) {
    return (
        <table className="details__eachattacks rapido">
            <caption>Fast attack</caption>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Energy</th>
                <th>Power</th>
                <th>Time</th>
                <th>Type</th>
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
