import './css/App.css';
import PredictionView from "./components/PredictionView";
import NavBar from './components/NavBar';
import { Routes, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const history = createMemoryHistory();

  let content = (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/"
        element= {<PredictionView />}/>
        <Route path="/prediction"
        element= {<PredictionView />}/>
        <Route path="about"
        element= {<PredictionView />}/>
        <Route path="help"
        element= {<PredictionView />}/>
      </Routes>
    </div>
  );

  return (
    <Router location={history.location} navigator={history}>
      {content}
    </Router>
  );
}

export default App;
