import React from 'react'

export default function Stats({datapokByform}) {
    return (
            <fieldset className="stats">
            <legend>Grundlegende Statistiken</legend>
            <ul>
               {<li>Typ: {datapokByform.type.map(e=> e + " ")}</li>}
                <li>Form: {datapokByform.form} </li>
                <li>Angriff: {datapokByform.base_attack} </li>
                <li>Verteidigung: {datapokByform.base_defense} </li>
                <li>Ausdauer: {datapokByform.base_stamina} </li>
            </ul>
            </fieldset>
    )
}
