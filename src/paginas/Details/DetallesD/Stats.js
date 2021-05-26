import React from 'react'

export default function Stats({datapokByform}) {
    return (
        <div>
            <h4>Grundlegende Statistiken</h4>
            <ul>
               {<li>Typ: {datapokByform.type.map(e=> e + " ")}</li>}
                <li>Form: {datapokByform.form} </li>
                <li>Angriff: {datapokByform.base_attack} </li>
                <li>Verteidigung: {datapokByform.base_defense} </li>
                <li>Ausdauer: {datapokByform.base_stamina} </li>
            </ul>
        </div>
    )
}
