import React, { useState } from 'react'
import DetallesAvanzados from './DetallesAvanzados'
import Formas from './Formas'
import Stats from './Stats'
import useSEO from '../../../../hooks/useSEO'
import PostNoData from '../../PostNoData'
/*
datapok= [{
    id
    name
    nodata
}] || [...{
    id
    name
    form
    fast_moves
    charged_moves
    defense
    attack
    .
    .
    .
    
}...]

*/
export default function DetallesBasicos({ datapok }) {
    const [indexFormas, setindexFormas] = useState(0)
    const title=`Smart analisis of ${datapok[0].name} || by ZitrojjDev`
    useSEO({title})
   
    return (
        <>
            
                {datapok[0].nodata ? <PostNoData datapok={datapok}  />:
                    <>
                        <div className="detalles__basicos">
                        <Formas datapok={datapok} setindexFormas={setindexFormas} />
                        <Stats datapokByform={datapok[indexFormas]} />
                        </div>
                        <DetallesAvanzados datapokByform={datapok[indexFormas]}  datapok={datapok}/>
                    </>
                }
        </>
    )
}
