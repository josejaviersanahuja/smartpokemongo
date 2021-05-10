import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import CampeonesPVP from "./paginas/CampeonesPVP";
import Home from "./paginas/Home";
import PVPsmart from "./paginas/PVPsmart";

function App() {
  return (
    <Router>
      <header>
        <h1 className="titleA">Disfruta de </h1>
        <h1 className="titleB">Smart APP</h1>
      </header>
      <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/PVP" ><PVPsmart /></Route>
          <Route path="/CampeonesPVP" ><CampeonesPVP /></Route>
        </Switch>
      <footer>
        Espero que te guste José Manuel
      </footer>
    </Router>
  );
}

export default App;
