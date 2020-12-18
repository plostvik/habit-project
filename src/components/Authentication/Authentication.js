import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Authentication.module.css';
import { addUser } from '../../redux/habbits/actions/habitActions';
import { connect } from 'react-redux';

// import Loginization from '../Loginization/Loginization.js';
// import Registration from '../Registration/Registration.js';

export default class Authentification extends Component {
  state = {
    users: [
      {
        name: 'Ostap',
        surname: 'Pluzhnik',
        phone: '+380934043239',
      },
    ],
  };

  // onBtnClick = e => {
  //   if (e.target.textContent === 'Вход') {
  //     console.log('логин');

  //     //   return <Loginization />;
  //   } else {
  //     console.log('рега');
  //     //   return <Registration />;
  //   }
  // };

  render() {
    return (
      <>
        <section>
          {/* <button type="button" onClick={this.onBtnClick}>
            Вход
          </button>
          <button type="button" onClick={this.onBtnClick}>
            Создать аккаунт
          </button> */}
          <NavLink to="/login" className="link">
            Вход
          </NavLink>
          <NavLink to="/register" className="link">
            Создать аккаунт
          </NavLink>
        </section>
      </>
    );
  }
}
