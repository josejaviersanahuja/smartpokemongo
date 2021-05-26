import React from 'react'

export default function TablaMejorAtaqueRapido({mejorComboRapido}) {
    return (<>
       <tr>
                    <th rowSpan='2'>Best Fast Combo</th>
                    <td>{mejorComboRapido.namefast}</td>
                    <td>{mejorComboRapido.powerfast}</td>
                    <td>{mejorComboRapido.turn} turns</td>
                    <td>{mejorComboRapido.turn * 0.5} seg</td>
                    <td>{mejorComboRapido.typeFast}</td>
                </tr>
                <tr>
                    
                    <td>{mejorComboRapido.namecharged}</td>
                    <td>{mejorComboRapido.powercharged}</td>
                    <td>{mejorComboRapido.howlongtocharge} seg</td>
                    <td>{mejorComboRapido.howmanypunches} punches </td>
                    <td>{mejorComboRapido.typeFast}</td>
                </tr> 
    </>)
}
