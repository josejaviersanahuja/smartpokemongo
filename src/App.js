import {  Switch, Route, useParams } from "react-router-dom";
import './css/main.css';
import Menu from "./components/Menu";
import Page from "./paginas/Page";
import Details from './paginas/Details'
import React, {useContext, useEffect, useState} from 'react'
import getAPI from './services/getAPI'
import Busqueda from "./components/Busqueda";
import Home from './paginas/Home'
import About from './paginas/About'
import LanguageContext from './context/LanguageContext'
import AreYouLost from './paginas/AreYouLost'

function App() {
  const {language, setlanguage}= useContext(LanguageContext)
  
  return (
    <>
      
      <header>
        <Menu language={language} setlanguage= {setlanguage}/>
      </header>
      <nav>
        <Busqueda language={language}/>
      </nav>
      <Switch>
      
          <Route exact path="/" ><Home language={language} /></Route>
         <Route path="/page/:pag" children={<Page language={language} />}/> 
          <Route path="/pokemon/:id" language={language} children={<Child language={language} />}></Route>
         <Route path="/about" language={language} children={<About language={language} />}/>
          {<Route language={language} children={<AreYouLost language={language} />}/>}
        </Switch>
      <footer>
        Espero que te guste José Manuel
      </footer>
      
    </>
  );
}

export default App;

function Child({language}) {
  let {id}=useParams()
  const [datapok, setdatapok] = useState([])
    const [loading, setloading] = useState(true)
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
  return <Details id={id} datapok={datapok} loading={loading} language={language} />
}