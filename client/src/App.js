import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import Home from './components/Home';
import Game from './components/Game';
import AddCategory from './components/AddCategory';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to={'/'}>Home</Link><br/>
            <Link to={'/add-categories'}>Add Category</Link>
          </div>
          <div>
            <Route exact path='/' component={Home}/> 
            <Route exact path='/add-categories' component={AddCategory}/> 
            <Route exact path='/game/:gameId' component={Game}/> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
