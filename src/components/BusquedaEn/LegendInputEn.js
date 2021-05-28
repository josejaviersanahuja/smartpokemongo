import React from 'react'

export default function LegendInputEn({keyword, handleChange}) {
    return (
        <>
          <legend>Search by name</legend>
              <input
                  type="search"
                  placeholder="write the name here"
                  onChange={handleChange}
                  value={keyword}
                  list="pokemons"
                  className="buscar__text"
              /> 
              <input type="submit" value="Search" className="buscar__boton"/> 
        </>
    )
}
