import React, { Component } from 'react';
import Authentification from './components/Authentification/Authentification.js';
import Loginization from './components/Loginization/Loginization.js';
import Registration from './components/Registration/Registration.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Authentification />
        <Loginization />
        <Registration />
      </>
    );
  }
}
