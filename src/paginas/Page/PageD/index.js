import React from 'react'
import { useHistory, useParams } from 'react-router'
import Paging from '../Paging'

export default function Page() {
const {pag}=useParams()
const history= useHistory()

const handleClickplus = () => {
  const newpage= Number(pag)+1
  history.push(`/page/${newpage}`)
}

const handleClickminu = () => {
  const newpage= Number(pag)-1
  history.push(`/page/${newpage}`)
}

  return (
    <div className="page">
      <h1 className="home__title">List auf Pokemons</h1>
      {Number(pag)>0? <button onClick={handleClickminu}>Página Previa</button>: null} 
      {Number(pag)<=43? <button onClick={handleClickplus}>Siguiente Página</button>:null}
      <Paging pag={pag} />  
    </div>
  )
}
