import React from 'react'

export default function AtaqueCargado({chargedAttack}) {
    return (
        <table className="details__eachattacks cargado">
            <caption>Belasteten Angriff</caption>
            <tbody>
            <tr>
                <th>Bezeichnung</th>
                <th>Energie</th>
                <th>Kraft</th>
                <th>Typ</th>
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
