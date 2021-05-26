import React from 'react'

export default function LegendInputEs({keyword, handleChange}) {
    return (
        <>
          <legend>Busca por nombre</legend>
              <input
                  type="search"
                  placeholder="escribe el pokemon"
                  onChange={handleChange}
                  value={keyword}
                  list="pokemons"
              /> 
              <input type="submit" value="Buscar" /> 
        </>
    )
}
