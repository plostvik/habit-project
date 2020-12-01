import React, { Component } from 'react';
import Authentication from './components/Authentication/Authentication.js';
import Loginization from './components/Loginization/Loginization.js';
import Registration from './components/Registration/Registration.js';
import Profile from './components/Profile/Profile.js';
// import HabitForm from './components/HabitsList/HabitForm';
import Container from './components/Shared/Container/Container';
import Logo from './components/Shared/Logo';
// import Section from './components/Shared/Section';
// import Modal from './components/Modal';
import HabitList from './components/HabitsList';
import { Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    showModal: false,
    user: [
      {
        email: '',
        name: '',
        phone: '',
      },
    ],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

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
            <Route path="/" exact component={Authentication} />
            <Route path="/login" exact component={Registration} />
            <Route path="/register" exact component={Loginization} />
            <Route path="/profile" exact component={Profile} />
            <Route
              path="/profile/habitlist"
              exact
              render={props => (
                <HabitList
                  {...props}
                  modalToggle={this.modalToggle}
                  showModal={this.state.showModal}
                />
              )}
            />
            {/* <HabitList
              modalToggle={this.modalToggle}
              showModal={this.state.showModal}
            /> */}
          </Container>
        </main>
        {/* 
        <footer></footer> */}
      </>
    );
  }
}
