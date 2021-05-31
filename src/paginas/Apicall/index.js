import React, { useEffect } from 'react'
//import useMejoresAtaques from '../../hooks/useMejoresAtaques'
import Details from './Details'
import useDataToPost from './hooks/useDataToPost'


export default function Apicall() {

    const {datapok, id,  handleSubmit, handleChange, loading} = useDataToPost()
    
    useEffect(() => {
       if(datapok.length>0){

       }
       return () => {
           
    }
   }, [datapok])
    return (
        <div>
            En la Apicall
            <form onSubmit={handleSubmit}>
            <input
                  type="number"
                  placeholder="id del pokemon"
                  onChange={handleChange}
                  value={id}
                  className="buscar__text"
              />  
              <input type="submit" value="Intro" className="buscar__boton"/>
            </form>

            <Details id={id} datapok={datapok} loading={loading} language={"spanish"} />

        </div>
    )
}
