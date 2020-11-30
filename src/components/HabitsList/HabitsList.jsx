import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem';
import Modal from '../Modal';
import HabitForm from './HabitForm';

export default class HabitsList extends Component {
  state = {
    habits: [
      {
        id: '1',
        title: 'Зарядка',
        startDate: '',
        progress: '',
      },
      {
        id: '2',
        title: 'Зарядка',
        startDate: '',
        progress: '',
      },
    ],
  };

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
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>My accaunt</div>
          <button type="button"></button>
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
        {habits.length ? (
          <ul>
            {habits.map(habit => {
              return (
                <HabitItem
                  key={habit.id}
                  progress={habit.progress}
                  title={habit.title}
                />
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
    );
  }
}
