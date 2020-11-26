import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem';

export default class HabitsList extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    habits: [
      {
        id: '1',
        title: 'Зарядка',
        startDate: '',
        progress: '',
      },
    ],
  };

  toSetProgress = startDate => {
    // (currDate - StartDate * 100) /21
    const currendDate = Date.now();
    const progress =
      ((currendDate - startDate) * 100) / (21 * 24 * 60 * 60 * 1000);
    return progress;
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
        <div>календарь</div>
        <h1>Мои привычки</h1>
        {this.state.habits.length ? (
          <ul>
            {habits.map(habit => {
              return (
                <HabitItem
                  key={habit.id}
                  progress={() => {
                    this.toChangeProgress(habit.id);
                  }}
                  title={habit.title}
                />
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нет привычек...</p>
        )}
        <button type="button">+</button>
      </>
    );
  }
}
