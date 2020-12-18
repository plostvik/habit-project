import React, { Component } from 'react';
import HabitItem from './HabitItem';
import Modal from '../Modal';
import HabitForm from './HabitForm';
import { NavLink, Link } from 'react-router-dom';

import withContext from '../hoc/withContext.js';
import { connect } from 'react-redux';

class HabitsList extends Component {
  state = {
    habits: [],
  };

  componentDidMount() {
    const parsedLs = JSON.parse(localStorage.getItem('habits')) || [];
    this.setState({ habits: parsedLs });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.habits !== this.state.habits) {
      localStorage.setItem('habits', JSON.stringify(this.state.habits));
    }
  }

  toAddHabbit = habit => {
    this.setState(prevState => ({
      habits: [...prevState.habits, habit],
    }));
  };

  toChangeProgress = id => {
    this.setState(prevState => {
      const obj = prevState.habits.find(habit => habit.id === id);
      obj.progress = this.toSetProgress(obj.startDate);
      return obj;
    });
  };

  render() {
    const { user } = this.props;
    return (
      // <UserContext.Consumer>
      //   {({ user }) => {
      //     return (
      <>
        <header>
          <div>My accaunt</div>
          <img src={user.avatar} alt={user.name} />
          <NavLink to="/profile">Назад</NavLink>
        </header>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabbit={this.toAddHabbit}
            />
          </Modal>
        )}
        <div>календарь</div>
        <h1>Мои привычки</h1>
        {user.habits.length ? (
          <ul>
            {user.habits.map(habit => {
              return (
                <Link key={habit.id} to={`/profile/habitlist/${habit.id}`}>
                  <HabitItem progress={habit.progress} title={habit.title} />
                </Link>
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нет привычек...</p>
        )}

        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
      // );
      //   }}
      // </UserContext.Consumer>
    );
  }
}

export default withContext(HabitsList);
