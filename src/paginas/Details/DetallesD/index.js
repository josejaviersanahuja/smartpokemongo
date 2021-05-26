import React from 'react'
import Spinner from '../../../components/Spinner'
import DetallesBasicos from './DetallesBasicos'

export default function index({id, datapok, loading}) {
    
    return (<>
        <section>
             <h2>Pokemon id {id}</h2>
             {loading? <Spinner/>: <DetallesBasicos datapok={datapok} />}
         </section>
   </>)
}
