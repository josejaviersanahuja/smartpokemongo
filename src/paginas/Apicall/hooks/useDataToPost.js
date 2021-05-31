import { useState, useEffect } from "react"
import getAPI from '../../../services/getAPI'


export default function useDataToPost() {

    const [datapok, setdatapok] = useState([])
    const [loading, setloading] = useState(true)
    const [id, setid] = useState(1)  
    
      useEffect(() => {
          getAPI({id:id})
              .then(pok => {
                  setdatapok(pok)
                  setloading(false)
              })
          
          return () => {
              setloading(true)
          }
      }, [id])

      const handleChange = (event) => {
        event.preventDefault()
        setid(event.target.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        console.log(id, '---submit');
      
        if(id>0 && id<891){
            
       
        } else{
            alert("elige un pokemon válido")
        }
    }




    return {datapok, id, setid, handleSubmit, handleChange, loading}
}
