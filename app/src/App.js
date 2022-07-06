import './css/App.css';
import PredictionView from "./components/prediction/PredictionView";
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "semantic-ui-css/semantic.min.css";
import AboutView from './components/about/AboutView';
import Aos from "aos";
import { React, Suspense, useEffect } from 'react';
import HelpView from './components/help/HelpView';
import Logo from "./img/logo-lse.png";


const Loader = () => (
  <div className="loader">
    <img src={Logo} className="logo" alt="logo" />
    <div>loading---</div>
  </div>
);

export default function App() {
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
    <Suspense fallback={<Loader />}>
      <BrowserRouter location={history.location} navigator={history}>
        {content}
      </BrowserRouter>
    </Suspense>
  );
}
