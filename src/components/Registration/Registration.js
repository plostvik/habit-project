import React, { Component } from 'react';
import styles from './Registration.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addUser } from '../../redux/habbits/actions/userActions';
import { addUserOperation } from '../../redux/habbits/operators/userOperator.js';
import { getUserId } from '../../redux/habbits/HabbitSelectors/HabbitSelectors.js';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const { id, history } = this.props;
      history.push({
        pathname: `/profile/${id}`,
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, surname, tel } = this.state;
    const { addUserOperation } = this.props;
    addUserOperation(name, surname, tel);
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

const mapStateToProps = state => ({
  id: getUserId(state),
});

const mapDispatchToProps = {
  addUserOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
