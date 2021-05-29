import React, { useState } from 'react'
import DetallesAvanzados from './DetallesAvanzados'
import Formas from './Formas'
import Stats from './Stats'
import useSEO from '../../../hooks/useSEO'

export default function DetallesBasicos({ datapok }) {
    const [indexFormas, setindexFormas] = useState(0)
    const title=`Smart analisis of ${datapok[0].name} || by ZitrojjDev`
    useSEO({title})
    
    return (
        <>
            
                {datapok[0].nodata ? <h3>Das Pokemon {datapok[0].name} hat keine bekannten Daten </h3> :
                    <>
                        <div className="detalles__basicos">
                        <Formas datapok={datapok} setindexFormas={setindexFormas} />
                        <Stats datapokByform={datapok[indexFormas]} />
                        </div>
                        <DetallesAvanzados datapokByform={datapok[indexFormas]} />
                    </>
                }
        </>
    )
}
