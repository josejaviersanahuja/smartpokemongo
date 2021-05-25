import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import allPokemons from '../data/pokemons.json'

export default function useBusqueda(){
    const [arrayBusqueda, setarrayBusqueda] = useState([])
    const [keyword, setkeyword] = useState("")
    const history =useHistory()
    
    const allpokemons =allPokemons 
    const handleChange = (event) => {
                event.preventDefault()
        let result = []
        if (event.target.value.length > 2) {
            let filtro = allpokemons.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase()))
            result = filtro.map(p => p.name)
        }
        setarrayBusqueda(result)
        setkeyword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let pokemonfound=allpokemons.filter(e => e.name.toLowerCase()===keyword.toLowerCase())
        if(pokemonfound.length===1){
        setkeyword("")
        setarrayBusqueda([])
        history.push(`/pokemon/${pokemonfound[0].id}`)
        } else{
            alert("elige un pokemon válido")
        }
    }
    return {arrayBusqueda, keyword, handleSubmit, handleChange, setkeyword}
}