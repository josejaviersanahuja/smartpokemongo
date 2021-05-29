import React from 'react'

export default function TablaMejorAtaqueCargado({mejorComboPoder}) {
    return (
        <>
            <tr>
                    <th rowSpan='2'>Beste Macht-Kombo</th>
                    <td>{mejorComboPoder.namefast}</td>
                    <td>{mejorComboPoder.powerfast}</td>
                    <td>{mejorComboPoder.turn} Schichten</td>
                    <td>{mejorComboPoder.turn * 0.5} seg</td>
                    <td>{mejorComboPoder.typeFast}</td>
                </tr>
                <tr>
                    
                    <td>{mejorComboPoder.namecharged}</td>
                    <td>{mejorComboPoder.powercharged}</td>
                    <td className="time">{mejorComboPoder.howlongtocharge} seg</td>
                    <td>{mejorComboPoder.howmanypunches} Schläge </td>
                    <td>{mejorComboPoder.typeFast}</td>
                </tr>
        </>
    )
}
