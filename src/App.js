import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/store';

import Example from './components/Project';
import Project from './Routes/Project';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/projects' component={Project} />
            <Route path='/example' component={Example} />
            <Link to='/projects'>Projects</Link>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
