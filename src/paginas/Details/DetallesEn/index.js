import React from 'react'
import DetallesBasicos from './DetallesBasicos'
import Spinner from '../../../components/Spinner'

export default function index({id, datapok, loading}) {
    
    return (<>
        <div className="details">
             <h1 className="home__title">Pokemon id {id}</h1>
             {loading? <Spinner/>: <DetallesBasicos datapok={datapok} />}
         </div>
   </>)
}
