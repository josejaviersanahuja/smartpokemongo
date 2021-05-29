import React from 'react'

export default function SelectChargedMove({chargedCheck, handleChangeCharged}) {
    return (
        <form onChange={handleChangeCharged}>
            <fieldset>
            <legend>Ataques cargados</legend>
            <ul>
                {Object.keys(chargedCheck).map(e=> <li key={e}>{e}:  <input name="charged" type="radio" value={e} /></li>)}
            </ul>
            </fieldset>
        </form>
    )
}
