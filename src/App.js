import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu";
import CampeonesPVP from "./paginas/CampeonesPVP";
import Home from "./paginas/Home";
import PVPsmart from "./paginas/PVPsmart";
import homeimg from './images/home.png'
import pvpimg from'./images/pvp.png'
import statsimg from './images/stats.png'
import Apicall from "./paginas/Apicall";

function App() {
  return (
    <Router>
      
      <header>
        <Menu/>
      </header>
      <nav>
        <span><Link to="/"><img src={homeimg} alt="home" width='125' height='100' /></Link></span>
        <span><Link to="/CampeonesPVP"><img src={pvpimg} alt="campeones" width='125' height='100'/></Link></span>
        <span><Link to="/PVP"><img src={statsimg} alt="stats" width='125' height='100'/></Link></span>
      </nav>
      <Switch>
      
          <Route exact path="/" ><Home /></Route>
          <Route path="/PVP" ><PVPsmart /></Route>
          <Route path="/CampeonesPVP" ><CampeonesPVP /></Route>
          <Route path="/apicall" ><Apicall/></Route>
        </Switch>
      <footer>
        Espero que te guste José Manuel
      </footer>
    </Router>
  );
}

export default App;
