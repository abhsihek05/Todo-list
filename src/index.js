import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from './Components/Login';
import Crud from './Components/Crud';
import APPP from './Components/APPP';
import newCrud from './Components/newCrud';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/log" component={Login} />
      <Route exact path="/" component={newCrud} />

      
    </Switch>
    {/* <APPP /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
