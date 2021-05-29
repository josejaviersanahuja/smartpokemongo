import React from 'react'

export default function TablaMejorAtaqueRapido({mejorComboRapido}) {
    return (<>
       <tr>
                     <th rowSpan='2' className="tabla__fila1">Beste schnelle Combo</th>
                    <td>{mejorComboRapido.namefast}</td>
                    <td>{mejorComboRapido.powerfast}</td>
                    <td>{mejorComboRapido.turn} Schichten</td>
                    <td>{mejorComboRapido.turn * 0.5} seg</td>
                    <td>{mejorComboRapido.typeFast}</td>
                </tr>
                <tr>
                    
                    <td className="tabla__fila1">{mejorComboRapido.namecharged}</td>
                    <td className="tabla__fila1">{mejorComboRapido.powercharged}</td>
                    <td className="tabla__fila1 time">{mejorComboRapido.howlongtocharge} seg</td>
                    <td className="tabla__fila1">{mejorComboRapido.howmanypunches} Schläge </td>
                    <td className="tabla__fila1">{mejorComboRapido.typeFast}</td>
                </tr> 
    </>)
}
