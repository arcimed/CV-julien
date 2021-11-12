import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/competence" component={Knowledges}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route component={NotFound}></Route>
    </BrowserRouter>
     <div>
      <h3>Coucou</h3>
    </div>
    </>
   
  )
}

export default App;
