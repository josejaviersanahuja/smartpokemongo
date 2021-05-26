import React, { useState } from 'react'
import DetallesAvanzados from './DetallesAvanzados'
import Formas from './Formas'
import Stats from './Stats'

export default function DetallesBasicos({ datapok }) {
    const [indexFormas, setindexFormas] = useState(0)
    
    return (
        <>
            <div>
                {datapok[0].nodata ? <h3>Pokemon {datapok[0].name} no details known </h3> :
                    <>
                        <Formas datapok={datapok} setindexFormas={setindexFormas} />
                        <Stats datapokByform={datapok[indexFormas]} />
                        <DetallesAvanzados datapokByform={datapok[indexFormas]} />
                    </>
                }
            </div>
        </>
    )
}
