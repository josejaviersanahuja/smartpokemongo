import React from 'react'

export default function TablaMejorAtaqueRapido({mejorComboRapido}) {
    return (<>
       <tr>
                    <th rowSpan='2'>Mejor Combo Rapido</th>
                    <td>{mejorComboRapido.namefast}</td>
                    <td>{mejorComboRapido.powerfast}</td>
                    <td>{mejorComboRapido.turn} turnos</td>
                    <td>{mejorComboRapido.turn * 0.5} seg</td>
                    <td>{mejorComboRapido.typeFast}</td>
                </tr>
                <tr>
                    
                    <td>{mejorComboRapido.namecharged}</td>
                    <td>{mejorComboRapido.powercharged}</td>
                    <td>{mejorComboRapido.howlongtocharge} seg</td>
                    <td>{mejorComboRapido.howmanypunches} golpes </td>
                    <td>{mejorComboRapido.typeFast}</td>
                </tr> 
    </>)
}
