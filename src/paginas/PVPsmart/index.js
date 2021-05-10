import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import allpokemons_ataques from '../../data/pokemons_ataques.json'
import allpokemons from '../../data/pokemons.json'
//import allataques_rapidos from '../../data/ataques_rapidos_PVP.json'
import BusquedaForm from '../../components/BusquedaForm'
import DetallesPokemon from './DetallesPokemon'


const listPokemonsYataques =  allpokemons.map(e => {
    let ataques = allpokemons_ataques.filter(elem => e.id === elem.pokemon_id)

    let obj={
        id:e.id,
        name:e.name,
        ataques:ataques
        }
    
    return obj
})

export default function PVPsmart() {

    const [pokemon, setpokemon] = useState(listPokemonsYataques[0])

    return (
        <>
            <section>
                <h2>Aquí Analizamos los ataques de cada pokemon</h2>
                <Link to="/">Back to pokemons</Link>
            </section>
            <BusquedaForm listPokemonsYataques={listPokemonsYataques} setpokemon={setpokemon}  />
            <DetallesPokemon pokemon={pokemon} />
        </>
    )
}
