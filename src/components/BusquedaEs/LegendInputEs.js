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
                  className="buscar__text"
              /> 
              <input type="submit" value="Buscar" className="buscar__boton" /> 
        </>
    )
}
