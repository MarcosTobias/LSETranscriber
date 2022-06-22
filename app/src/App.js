import './css/App.css';
import PredictionView from "./components/PredictionView";
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "semantic-ui-css/semantic.min.css";
import AboutView from './components/AboutView';
import Aos from "aos";
import { React, useEffect } from 'react';
import HelpView from './components/HelpView';



function App() {
  const history = createMemoryHistory();

  useEffect(() => {
    Aos.init();
  });

  let content = (
    <div className="App">
      <header>
        <NavBar />
      </header>
      

      <Routes>
        <Route path="/"
        element= {<PredictionView />}/>
        <Route path="/about"
        element= {<AboutView />}/>
        <Route path="/help"
        element= {<HelpView />}/>
      </Routes>
    </div>
  );

  return (
    <BrowserRouter location={history.location} navigator={history}>
      {content}
    </BrowserRouter>
  );
}

export default App;
