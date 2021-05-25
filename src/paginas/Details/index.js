import React from 'react'
import DetallesBasicos from './DetallesBasicos'

export default function index({id, datapok, loading}) {
    
    return (<>
        <section>
             <h2>Pokemon id {id}</h2>
             {loading? <p>cargando...</p>: <DetallesBasicos datapok={datapok} />}
         </section>
   </>)
}
