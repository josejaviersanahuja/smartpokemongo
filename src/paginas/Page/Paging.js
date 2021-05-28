import React from 'react'
import {Link} from 'react-router-dom'
import pokemons from '../../data/pokemons.json'
export default function Paging({pag}) {
    let listaPokemon=[]
  if (pag<43){
  listaPokemon= pokemons.slice([pag*20],[pag*20+20])
  }
  if (Number(pag)===43) {
    listaPokemon=pokemons.slice([880],[889])
  }
  const numberToString = (id)=> {
    if (id>99) {
      return id.toString()
    }
    if (id>9) {
      return ("0"+id.toString())
    }
    if (id<10) {
      return ("00"+id.toString())
    }
  }
    return (
        <ol>
        {listaPokemon.map(e => (
        <li key={e.id}>
          <span>ID: {e.id}.</span> 
          <Link to={`/pokemon/${e.id}`}>
            <img  
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberToString(e.id)}.png`} 
                alt={e.name} 
            />
          </Link>
        </li>))}
      </ol>
    )
}
