import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

class Profile extends Component {
  state = {
    avatar: '',
    height: '',
    weight: '',
    birthDate: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // updateUserProfile()
    alert(JSON.stringify(this.state, null, 2));
    // this.setState({
    //   avatar: '',
    //   height: '',
    //   weight: '',
    //   birthDate: '',
    // });
  };

  render() {
    const { avatar, height, weight, birthDate } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Сменить фото
          <input
            type="file"
            vlaue={avatar}
            onChange={this.handleChange}
            name="avatar"
          />
        </label>

        <label htmlFor="">
          Рост
          <input
            type="text"
            vlaue={height}
            onChange={this.handleChange}
            placeholder="170см"
            name="height"
          />
        </label>
        <label htmlFor="">
          Вес
          <input
            type="text"
            vlaue={weight}
            onChange={this.handleChange}
            placeholder="70кг"
            name="weight"
          />
        </label>
        <label htmlFor="">
          Дата Рождения
          <input
            type="date"
            vlaue={birthDate}
            onChange={this.handleChange}
            placeholder="01.01.1990"
            name="birthDate"
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Profile;
