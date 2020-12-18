import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Container from './components/Shared/Container/Container';
import Logo from './components/Shared/Logo';

import HabitList from './components/HabitsList';
import AppRoute from './routes.js';
import ErrorBoundry from './components/ErrorBoundary';
import HabitProfile from './components/HabitsList/HabitProfile';

// import Context from './context/Context.js';шаг №1
import UserContext from './context/Context.js';

class App extends Component {
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

  modalToggle = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <>
        {/* <Context.Provider value={fetchedUser}> */}
        <UserContext>
          <header>
            <Container>
              <Logo />
            </Container>
          </header>
          <Container>
            <ErrorBoundry>
              <Suspense fallback={<h2>Loading...</h2>}>
                {AppRoute.map((route, index) => {
                  return <Route key={index} {...route} />;
                })}
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
                <Route
                  path="/profile/habitlist/:id"
                  exact
                  render={props => (
                    <HabitProfile
                      {...props}
                      modalToggle={this.modalToggle}
                      showModal={this.state.showModal}
                    />
                  )}
                />
              </Suspense>
            </ErrorBoundry>
          </Container>
        </UserContext>
      </>
    );
  }
}

export default App;
