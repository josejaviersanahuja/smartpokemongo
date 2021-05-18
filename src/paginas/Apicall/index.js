import React, { useState, useEffect } from 'react'
import allpokemons_ataques from '../../data/pokemons_ataques.json'
import allpokemons from '../../data/pokemons.json'
//import allataques_rapidos from '../../data/ataques_rapidos_PVP.json'
import BusquedaForm from '../../components/BusquedaForm'
import getAPI from '../../services/getAPI'
import DetallesPokemon2 from './DetallesPokemon2'
import DetallesPokemon from '../PVPsmart/DetallesPokemon'



const listPokemonsYataques =  allpokemons.map(e => {
    let ataques = allpokemons_ataques.filter(elem => e.id === elem.pokemon_id)

    let obj={
        id:e.id,
        name:e.name,
        ataques:ataques
        }
    
    return obj
})

export default function Apicall() {

    const [pokemon, setpokemon] = useState(listPokemonsYataques[0])
    const [datapok, setdatapok] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        getAPI({name:pokemon.name, id:pokemon.id})
            .then(pok => setdatapok(pok))
        setloading(false)
        return () => {
            
        }
    }, [pokemon])
    
    return (
        <>
            <section>
                <h2>Test de la api</h2>
              </section>
            <BusquedaForm listPokemonsYataques={listPokemonsYataques} setpokemon={setpokemon}  />
           {loading? <p>loading...</p>:<DetallesPokemon2 datapok={datapok} pokemon={pokemon}/>}
           <DetallesPokemon pokemon={pokemon}/>
        </>
    )
}
