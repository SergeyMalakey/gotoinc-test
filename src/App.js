

import React, {useState} from "react";
import ColorPicker from "./components/ColorPicker";
import FirstPage from "./components/FirstPage";
import {Router, Route, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";


const App =()=> {
  return (
      <Router history = {createHistory()}>
          <div className="App">
              <Route path="/" component={FirstPage}exact />
              <Route path="/colorPicker" component={ColorPicker} />

          </div>
      </Router>
  )
}
export default App;
