import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import CalculatorApp from './CalculatorApp'
import Queue from './Queue'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink className="li" to="/">
                  My Calculator
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="liQue"
                  to="/Queue"
                  activeStyle={{color: 'rgba(82, 64, 164, 0.6)'}}
                >
                  My Queue App
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Queue">
              <Queue />
            </Route>
            <Route path="/">
              <CalculatorApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
