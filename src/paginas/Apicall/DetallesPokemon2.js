import React, {useState} from 'react'
import DetallesAtaques2 from './DetallesAtaques2'

export default function DetallesPokemon2({pokemon, datapok}) {
    const [indexFormas, setindexFormas] = useState(0)
   console.log(datapok);
    return (
        <>
        <table>
            { datapok.length>0 ? <>
            <caption><h3>Pokemon {pokemon.name} </h3>{datapok.map(e=><button key={e+ datapok.indexOf(e)} onClick={()=>setindexFormas(datapok.indexOf(e))}> {e.form} </button>)}</caption>
            <DetallesAtaques2 datapokForma={datapok[indexFormas]}/>
            </> 
            : <caption><h3>Pokemon {pokemon.name} </h3> no tiene datos conocidos</caption> }
        </table>
        </>
    )
}
