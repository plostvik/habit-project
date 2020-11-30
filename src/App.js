import React, { Component } from 'react';
import Authentification from './components/Authentification/Authentification.js';
import Loginization from './components/Loginization/Loginization.js';
import Registration from './components/Registration/Registration.js';
import Profile from './components/Profile/Profile.js';
import HabitForm from './components/HabitsList/HabitForm';
import Container from './components/Shared/Container/Container';
import Logo from './components/Shared/Logo';
import Section from './components/Shared/Section';
import Modal from './components/Modal';
import HabitList from './components/HabitsList';

export default class App extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <>
        <header>
          <Container>
            <Logo />
          </Container>
        </header>
        <main>
          <Container>
            <Authentification />
          </Container>
        </main>
        <footer></footer>
        <Loginization />
        <Registration />
        <Profile />
        <HabitList
          modalToggle={this.modalToggle}
          showModal={this.state.showModal}
        />
      </>
    );
  }
}
