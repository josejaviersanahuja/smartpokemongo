import React from 'react'

export default function AtaqueCargado({chargedAttack}) {
    return (
        <table>
            <caption>Ataque Cargado</caption>
            <tbody>
            <tr>
                <th>Nombre</th>
                <th>Carga</th>
                <th>Daño</th>
                <th>Tipo</th>
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
