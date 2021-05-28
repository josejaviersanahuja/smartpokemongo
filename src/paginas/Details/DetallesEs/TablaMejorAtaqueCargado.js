import React from 'react'

export default function TablaMejorAtaqueCargado({mejorComboPoder}) {
    return (
        <>
            <tr>
                    <th rowSpan='2'>Mejor Combo Poder</th>
                    <td>{mejorComboPoder.namefast}</td>
                    <td>{mejorComboPoder.powerfast}</td>
                    <td>{mejorComboPoder.turn} turnos</td>
                    <td>{mejorComboPoder.turn * 0.5} seg</td>
                    <td>{mejorComboPoder.typeFast}</td>
                </tr>
                <tr>
                    
                    <td>{mejorComboPoder.namecharged}</td>
                    <td>{mejorComboPoder.powercharged}</td>
                    <td className="time">{mejorComboPoder.howlongtocharge} seg</td>
                    <td>{mejorComboPoder.howmanypunches} golpes </td>
                    <td>{mejorComboPoder.typeFast}</td>
                </tr>
        </>
    )
}
