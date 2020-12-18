import React, { Component, createContext } from 'react';

const Context = createContext();

const fetchedUser = {
  id: 1,
  email: 'mango@gmail.com',
  name: 'Mango',
  phone: '123456789',
  avatar:
    'https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg',
  habits: [
    {
      id: 1,
      title: 'Зарядка',
      comment: 'Не будь свиньей!',
      repeat: 'Каждый день',
      color: '#390093',
      remind: true,
      progress: '10%',
    },
  ],
};

export default class UserContext extends Component {
  static Consumer = Context.Consumer;

  handleLogIn = () => {
    this.setState({ user: fetchedUser, isLogIn: true });
  };

  handleLogOut = () => {
    this.setState({ user: null, isLogIn: false });
  };

  state = {
    user: fetchedUser,
    isLogIn: false,
    handleLogIn: this.handleLogIn,
    handleLogOut: this.handleLogOut,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
