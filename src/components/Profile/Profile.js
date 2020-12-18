import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserOperation } from '../../redux/habbits/operators/userOperator';
import {
  getUserAvatar,
  getUserHeight,
  getUserWeight,
  getUserBirthDate,
} from '../../redux/habbits/HabbitSelectors/HabbitSelectors';

class Profile extends Component {
  state = {
    avatar:
      'https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg',
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
    const { updateUser } = this.props;
    const id = this.props.match.params.id;
    const { avatar, height, weight, birthDate } = this.state;
    updateUser(id, avatar, height, weight, birthDate);
  };

  render() {
    const { height, weight, birthDate } = this.state;

    return (
      <>
        <NavLink to="/">Выход на главную</NavLink>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Сменить фото
            <input type="file" onChange={this.handleChange} name="avatar" />
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
          <input type="submit" value="Добавить данные" />
        </form>
        <NavLink to="/profile/habitlist">Перейти к привычкам</NavLink>
      </>
    );
  }
}

const mapStateToProps = state => ({
  avatar: getUserAvatar(state),
  height: getUserHeight(state),
  weight: getUserWeight(state),
  birthDate: getUserBirthDate(state),
});

const mapDispatchToProps = {
  updateUser: updateUserOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
