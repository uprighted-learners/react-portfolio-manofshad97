import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Index from './pages';

/*Create a basic route for the home page */
function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/">
           <Index/>
       
        </Route>
      
      </Switch>

    </BrowserRouter>
  );
}

export default App;
