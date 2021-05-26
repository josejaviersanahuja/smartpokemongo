import React from 'react'
import useMejoresAtaques from '../../../hooks/useMejoresAtaques'
import TablaMejorAtaqueCargado from './TablaMejorAtaqueCargado'
import TablaMejorAtaqueRapido from './TablaMejorAtaqueRapido'
/* ambos estados tienen esta forma
mejorCombo={
    addEnergyAmount: 9
    addEnergySpeed: 9
    energyrequired: -40
    howlongtocharge: 5
    howmanypunches: 5
    namecharged: "Fire Punch"
    namefast: "Psycho Cut"
    powercharged: 55
    powerfast: 3
    turn: 2
    typeFast: "Psychic"
    typecharged: "Fire"
}
*/
export default function MejoresAtaques({datapokByform}) {
    const { mejorComboPoder, mejorComboRapido}= useMejoresAtaques({fast_moves:datapokByform.fast_moves, charged_moves:datapokByform.charged_moves})

    return (
        <table>
            <caption> Best attacks: </caption>
            {mejorComboPoder && mejorComboRapido?
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Power</th>
                    <th>Time per punch / Time until charged</th>
                    <th>Punches per sec/Punches before charged </th>
                    <th>Type</th>
                </tr>
            </thead> : null }
            <tbody>    
                {mejorComboRapido? <TablaMejorAtaqueRapido mejorComboRapido={mejorComboRapido}/> : null}
                {mejorComboPoder? <TablaMejorAtaqueCargado mejorComboPoder={mejorComboPoder} />: null}
            </tbody>
        </table>
    )
}
