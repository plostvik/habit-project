import React, { Component } from 'react';
import Authentification from './components/Authentification/Authentification.js';
import Loginization from './components/Loginization/Loginization.js';
import Registration from './components/Registration/Registration.js';
import Profile from './components/Profile/Profile.js';
import HabitForm from './components/HabitsList/HabitForm';
import Container from './components/Shared/Container/Container';
import Logo from './components/Shared/Logo';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Authentification />
        <Loginization />
        <Registration />
        <Profile />
        <HabitForm />
      </Container>
    );
  }
}
