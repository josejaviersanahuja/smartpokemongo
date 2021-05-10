import React, {useState} from 'react'
import pokemons from '../../data/pokemons.json'
export default function Home() {
  
  const [pag, setpag] = useState(0)
  let listaPokemon=[]
  if (pag<29){
  listaPokemon= pokemons.slice([pag*30],[pag*30+30])
  }
  else{
    listaPokemon=pokemons.slice([870],[889])
  }
  return (
    
    <>
      <section>
        <h2>Listado de Pokemos</h2>
      </section>
      {pag!==0? <button onClick={()=>setpag(prev=>prev-1)}>Página Previa</button>: null} 
      <button onClick={()=>setpag(prev=>prev+1)}>Siguiente Página</button>
      <ol>
        {listaPokemon.map(e => <li key={e.id}><span>{e.id}.</span> { e.name}</li>)}
      </ol>
      
    </>
  )
}
