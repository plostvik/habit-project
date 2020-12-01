import React, { Component } from 'react';
import styles from './Registration.module.css';
import { NavLink } from 'react-router-dom';

class Registration extends Component {
  state = {
    name: '',
    surname: '',
    tel: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
    this.props.history.push({
      pathname: '/profile',
    });
  };

  render() {
    const { name, surname, tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          {/* <button type="button">Назад</button> */}
          <NavLink to="/">Назад</NavLink>
        </div>
        <form
          action="submit"
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="surname">Фамилия</label>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
          />
          <label htmlFor="tel">Номер телефона</label>
          <input
            type="tel"
            name="tel"
            placeholder="+380"
            value={tel}
            onChange={this.handleChange}
          />
          <input type="submit" value="Дальше" />
        </form>
      </>
    );
  }
}

export default Registration;
