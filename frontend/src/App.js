import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import DarkmodeToggle from './components/DarkmodeToggle';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <DarkmodeToggle />
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/projects' component={ProjectsScreen} />
            <Route exact path='/contact' component={ContactScreen} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
