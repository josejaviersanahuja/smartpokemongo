import React from 'react'
import useBusqueda from '../hooks/useBusqueda'
export default function Busqueda() {
    const {arrayBusqueda, keyword, handleSubmit, handleChange, setkeyword}= useBusqueda()
    return (
        <>
        <form id="buscar_pokemon " onSubmit={handleSubmit}>
            <fieldset>
            <legend>Busca por nombre</legend>
              <input
                  type="search"
                  placeholder="escribe el pokemon"
                  onChange={handleChange}
                  value={keyword}
                  list="pokemons"
              />
              <input type="submit" value="Buscar" />
             <p></p> {arrayBusqueda.length !== 0 ? <datalist id="pokemons" form="buscar_pokemon" name="filtrodebusqueda" >
              
                      {arrayBusqueda.map(e =>
                          <option
                              key={arrayBusqueda.indexOf(e)+e}
                              onClick={()=>setkeyword(e)}    
                          >
                                  {e}
                          </option>
                      ) }
                  
              </datalist>: null}
              </fieldset>
          </form>
      </>
    )
}
