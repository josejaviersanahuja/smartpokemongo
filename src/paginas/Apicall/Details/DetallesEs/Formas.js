import React from 'react'

export default function Formas({datapok, setindexFormas}) {
    return (
        <>
                <h3>Pokemon {datapok[0].name} </h3>
                {datapok.map(e=>
                <button 
                        key={e+ datapok.indexOf(e)} 
                        onClick={()=>setindexFormas(datapok.indexOf(e))}> 
                        {e.form} 
                </button>)}
            </>
    )
}
