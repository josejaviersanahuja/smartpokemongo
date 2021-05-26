import React from 'react'

export default function SelectFastMove({ fastCheck, handleChangeFast }) {
    return (
        <form onChange={handleChangeFast}>
                <ul>
                {Object.keys(fastCheck).map(e=> <li key={e}>{e}:  <input name="fast" type="radio" value={e}/></li>)}
                </ul>
            </form>
    )
}
