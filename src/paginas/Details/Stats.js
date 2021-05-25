import React from 'react'

export default function Stats({datapokByform}) {
    return (
        <div>
            <h4>Estadisticas básicas</h4>
            <ul>
               {<li>Tipo: {datapokByform.type.map(e=> e + " ")}</li>}
                <li>Forma: {datapokByform.form} </li>
                <li>Ataque: {datapokByform.base_attack} </li>
                <li>Defensa: {datapokByform.base_defense} </li>
                <li>Resistencia: {datapokByform.base_stamina} </li>
            </ul>
            
            
        </div>
    )
}
