import React from 'react'
import SelectChargedMove from './SelectChargedMove'
import SelectFastMove from './SelectFastMove'
import useDetails from '../../../../hooks/useDetails'
import DetallesAtaques from './DetallesAtaques'
import MejoresAtaques from './MejoresAtaques'
import PostSmeargle from '../../PostSmeargle'

export default function DetallesAvanzados({ datapokByform, dataToPost, datapok}) {
    const { fastCheck, chargedCheck, handleChangeFast, handleChangeCharged, findTrueElement } = useDetails({ datapokByform })
    const { fastTrue, chargedTrue } = findTrueElement()
    const isSmeargle = datapokByform.id === 235
    const areBothSelected = fastTrue.length > 0 && chargedTrue.length > 0
    //console.log(dataToPost, datapokByform , 'detalles avanzado');
    
    return (
        <>
            <div className="attackselection">
            <SelectFastMove handleChangeFast={handleChangeFast} fastCheck={fastCheck} />
            <SelectChargedMove handleChangeCharged={handleChangeCharged} chargedCheck={chargedCheck} />
            </div>
            <div className="caja__translate">
           {areBothSelected ? <DetallesAtaques fastTrue={fastTrue} chargedTrue={chargedTrue} /> : isSmeargle ? <PostSmeargle datapokByform={datapokByform} />: <p className="details__p"> ¿Quieres revisar cada ataque uno por uno? selecciona los ataques que quieres combinar</p>}
           </div>
            <MejoresAtaques datapokByform={datapokByform} dataToPost={dataToPost} datapok={datapok}/>
        </>
    )
}
