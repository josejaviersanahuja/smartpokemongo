import React from 'react'

export default function AtaqueCargado({chargedAttack}) {
    return (
        <table>
            <caption>Charged attack</caption>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Energy</th>
                <th>Power</th>
                <th>Type</th>
            </tr>
            <tr>
                <td>{chargedAttack.name}</td>
                <td>{chargedAttack.energy_delta}</td>
                <td>{chargedAttack.power}</td>
                <td>{chargedAttack.type}</td>
            </tr>
            </tbody>
        </table>
    )
}
