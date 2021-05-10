import React, {useState} from 'react'
import {numeroDeFormas} from '../../services/servicios'
import DetallesAtaques from './DetallesAtaques'

export default function DetallesPokemon({pokemon}) {
    const [indexFormas, setindexFormas] = useState(0)
    const formas = numeroDeFormas(pokemon)
    

    return (
        
        <table>
            { formas.length>0 ? <>
            <caption><h3>Pokemon {pokemon.name} </h3>{formas.map(e=><button key={e} onClick={()=>setindexFormas(formas.indexOf(e))}> {e} </button>)}</caption>
            <DetallesAtaques index={indexFormas} pokemon={pokemon}/>
            </> 
            : <caption><h3>Pokemon {pokemon.name} </h3> no tiene ataques conocidos</caption> }
        </table>
    )
}
