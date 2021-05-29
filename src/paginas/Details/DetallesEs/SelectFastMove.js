import React from 'react'

export default function SelectFastMove({ fastCheck, handleChangeFast }) {
    return (
        
        <form onChange={handleChangeFast}>
            <fieldset>
            <legend>Movimientos rápidos</legend>
                <ul>
                {Object.keys(fastCheck).map(e=> <li key={e}>{e}:  <input name="fast" type="radio" value={e}/></li>)}
                </ul>
            </fieldset>
        </form>
    )
}
