import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory } from 'react-router-dom';


import Omdb from './js/OMDB/omdb';
import Some from './js/Some/index';
import Contact from './js/Contact/Contact';
import SingIn from './js/SingIn/index';
import SingUp from './js/SingUp/index';
import Codedojo from './js/Codedojo/index';
import Anim from './js/Anim/Anim';
import NotFound from './js/components/NotFound.jsx';
import Lurity from './js/Lurity/index';


import {firebaseApp} from './firebase';

import fetch from './fetch';
import config from './config';



firebaseApp.auth().onAuthStateChanged(user => {
   if(user) {
       // console.log('good');
   } else {
       // console.log('nogood');
   }
});


ReactDOM.render(
  <Router history={browserHistory}>
      <div>

          <ul>
              <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/contact">Contact</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/some">Some</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/singup">Singup</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/dojo">dojo</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/anim">anim</NavLink></li>
              <li><NavLink  activeClassName="selected" to="/lur">Lurity</NavLink></li>
          </ul>

        <Switch>
            <Route path="/" exact component={Omdb}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/some" component={Some}/>
            <Route path="/singup" component={SingUp}/>
            <Route path="/dojo" component={Codedojo}/>
            <Route path="/lur" component={Lurity} />
            <Route path="/anim" component={Anim} />
            <Route path="*" component={NotFound} />

        </Switch>
      </div>
  </Router>,
  document.getElementById('app')
);