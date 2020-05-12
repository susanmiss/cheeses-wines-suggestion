import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage'
import SingleCheese from './components/SingleCheese'
import Navbar from './components/Navbar'
import CreateCheese from './components/CreateCheese'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/cheese/:id" component={SingleCheese}/>
          <Route path="/create" component={CreateCheese}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
