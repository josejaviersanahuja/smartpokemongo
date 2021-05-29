import React from 'react'
import SelectChargedMove from './SelectChargedMove'
import SelectFastMove from './SelectFastMove'
import useDetails from '../../../hooks/useDetails'
import DetallesAtaques from './DetallesAtaques'
import MejoresAtaques from './MejoresAtaques'

export default function DetallesAvanzados({ datapokByform }) {
    const { fastCheck, chargedCheck, handleChangeFast, handleChangeCharged, findTrueElement } = useDetails({ datapokByform })
    const { fastTrue, chargedTrue } = findTrueElement()
    const isSmeargle = datapokByform.id === 235
    const areBothSelected = fastTrue.length > 0 && chargedTrue.length > 0

    return (
        <>
            <div className="attackselection">
            <SelectFastMove handleChangeFast={handleChangeFast} fastCheck={fastCheck} />
            <SelectChargedMove handleChangeCharged={handleChangeCharged} chargedCheck={chargedCheck} />
            </div>
            <div className="caja__translate">
            {areBothSelected ? <DetallesAtaques fastTrue={fastTrue} chargedTrue={chargedTrue} /> : isSmeargle ? <p className="details__p">Smeargle hat keine Angriffe</p> : <p className="details__p">Willst du jeden Angriff einzeln durchgehen? Wählen Sie die Angriffe aus, die Sie kombinieren möchten</p>}
            </div>
            <MejoresAtaques datapokByform={datapokByform}/>
        </>
    )
}
