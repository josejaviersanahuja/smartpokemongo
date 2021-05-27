import React from 'react'
import useBusqueda from '../hooks/useBusqueda'
import LegendInputEs from './BusquedaEs/LegendInputEs'
import LegendInputEn from './BusquedaEn/LegendInputEn'
import LegendInputD from './BusquedaD/LegendInputD'

export default function Busqueda({language}) {
    const {arrayBusqueda, keyword, handleSubmit, handleChange, setkeyword}= useBusqueda()


    const poliglota = {
        'english':<LegendInputEn keyword={keyword} handleChange={handleChange}/>,
        'spanish':<LegendInputEs keyword={keyword} handleChange={handleChange}/>,
        'german':<LegendInputD keyword={keyword} handleChange={handleChange}/>
    }
    return (
        <>
        <form id="buscar_pokemon " onSubmit={handleSubmit}>
            <fieldset>
            {poliglota[language]}
              
              {arrayBusqueda.length !== 0 ? <datalist id="pokemons" form="buscar_pokemon" name="filtrodebusqueda" >
              
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
