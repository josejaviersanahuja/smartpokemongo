import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu";
import Page from "./paginas/Page";
import Details from './paginas/Details'
import React, {useEffect, useState} from 'react'
import getAPI from './services/getAPI'
import Busqueda from "./components/Busqueda";
import Home from './paginas/Home'

function App() {
  return (
    <Router>
      
      <header>
        <Menu/>
      </header>
      <nav>
        <Busqueda/>
      </nav>
      <Switch>
      
          <Route exact path="/" ><Home /></Route>
          <Route path="/page/:pag" component={Page}/>
          <Route path="/pokemon/:id" children={<Child/>}></Route>
          {/* montar pagina 404 */}
        </Switch>
      <footer>
        Espero que te guste José Manuel
      </footer>
    </Router>
  );
}

export default App;

function Child() {
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
  return <Details id={id} datapok={datapok} loading={loading}/>
}