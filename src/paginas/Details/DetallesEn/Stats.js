import React from 'react'

export default function Stats({datapokByform}) {
    return (
        <div>
            <h4>Basic stadistics</h4>
            <ul>
               {<li>Type: {datapokByform.type.map(e=> e + " ")}</li>}
                <li>Form: {datapokByform.form} </li>
                <li>Attack: {datapokByform.base_attack} </li>
                <li>Defense: {datapokByform.base_defense} </li>
                <li>Stamina: {datapokByform.base_stamina} </li>
            </ul>
        </div>
    )
}
