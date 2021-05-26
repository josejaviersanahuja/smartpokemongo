import React from 'react'
import { useHistory, useParams } from 'react-router'
import Paging from './Page'

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
    
    <>
      <section>
        <h2>Listado of Pokemos</h2>
      </section>
      {Number(pag)>0? <button onClick={handleClickminu}>Página Previa</button>: null} 
      {Number(pag)<=43? <button onClick={handleClickplus}>Siguiente Página</button>:null}
      <Paging pag={pag} />  
    </>
  )
}
