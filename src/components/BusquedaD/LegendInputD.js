import React from 'react'

export default function LegendInputD({keyword, handleChange}) {
    return (
        <>
          <legend>Suche nach Namen</legend>
              <input
                  type="search"
                  placeholder="Schreibe den Namen hier"
                  onChange={handleChange}
                  value={keyword}
                  list="pokemons"
                  className="buscar__text"
              />  
              <input type="submit" value="Suchen" className="buscar__boton"/>
        </>
    )
}
