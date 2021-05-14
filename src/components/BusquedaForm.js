import React, {useState} from 'react'

export default function BusquedaForm({listPokemonsYataques, setpokemon}) {

    const [arrayBusqueda, setarrayBusqueda] = useState([])
    const [keyword, setkeyword] = useState("")
    const handleChange = (event) => {
                event.preventDefault()
        let ret = []
        if (event.target.value.length > 2) {
            let temp = listPokemonsYataques.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase()))
            ret = temp.map(p => p.name)
        }
        setarrayBusqueda(ret)
        setkeyword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let temp=listPokemonsYataques.filter(e=> e.name.toLowerCase()===keyword.toLowerCase())
        if(temp.length===1){
        setpokemon(temp[0])
        setkeyword("")
        setarrayBusqueda([])
        } else{
            alert("elige un pokemon válido")
        }
    }

    return (
        <>
          <form id="buscar_pokemon " onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="escribe el pokemon"
                    onChange={handleChange}
                    value={keyword}
                />
                <input type="submit" value="Buscar"/>
               <p></p> {arrayBusqueda.length !== 0 ? <select form="buscar_pokemon" name="filtrodebusqueda" size="3" >
                
                        {arrayBusqueda.map(e =>
                            <option
                                key={arrayBusqueda.indexOf(e)+e}
                                onClick={()=>setkeyword(e)}    
                            >
                                    {e}
                            </option>
                        ) }
                    
                </select>: null}
            </form>
        </>
    )
}
