import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
 
import ShopPage from './pages/shop/shop.component.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>

      <Route exact path ='/' component = {HomePage}/>
      <Route path ='/shop' component={ShopPage} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
