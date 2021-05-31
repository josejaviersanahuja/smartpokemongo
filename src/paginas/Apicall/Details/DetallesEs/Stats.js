import React from 'react'

export default function Stats({datapokByform}) {
    return (
            <fieldset className="stats">
            <legend>Estadisticas básicas</legend>
            <ul>
               {<li>Tipo: {datapokByform.type.map(e=> e + " ")} </li>}
                <li>Forma: {datapokByform.form} </li>
                <li>Ataque: {datapokByform.base_attack} </li>
                <li>Defensa: {datapokByform.base_defense} </li>
                <li>Resistencia: {datapokByform.base_stamina} </li>
            </ul>
            </fieldset>
    )
}
