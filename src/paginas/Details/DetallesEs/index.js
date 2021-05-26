import React from 'react'
import DetallesBasicos from './DetallesBasicos'
import Spinner from '../../../components/Spinner'

export default function index({id, datapok, loading}) {
    
    return (<>
        <section>
             <h2>Pokemon id {id}</h2>
             {loading? <Spinner/>: <DetallesBasicos datapok={datapok} />}
         </section>
   </>)
}
