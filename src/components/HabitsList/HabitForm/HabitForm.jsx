import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HabitForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

class HabitForm extends Component {
  static propTypes = {};

  closeId = null;

  state = {
    title: '',
    comment: '',
    repeat: '',
    color: '#390093',
    remind: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, comment, color, remind } = this.state;
    const habit = {
      id: uuidv4(),
      title,
      comment,
      color,
      remind,
      startDate: Date.now(),
      progress: this.toSetProgress(Date.now()),
    };

    this.props.addHabbit(habit);
    this.setState({
      title: '',
      comment: '',
      repeat: '',
      color: '#390093',
      remind: true,
    });
    alert(`New habit ${title} added`);
    this.closeId = setTimeout(this.props.modalToggle, 2000);
  };

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  componentWillUnmount() {
    clearTimeout(this.closeId);
  }

  toSetProgress = startDate => {
    // (currDate - StartDate * 100) /21
    const currendDate = Date.now();
    const progress = Math.round(
      ((currendDate - startDate) * 100) / (21 * 24 * 60 * 60 * 1000),
    );
    return progress;
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          className={styles.header}
          style={{ backgroundColor: this.state.color }}
        >
          <button type="button" onClick={this.props.modalToggle}>
            X
          </button>
          <h2>Новая привычка</h2>
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <label htmlFor="comment"></label>
        <input
          type="textarea"
          name="comment"
          value={comment}
          onChange={this.handleChange}
        />
        <label htmlFor="repeat"></label>
        <select name="repeat" value={repeat} onChange={this.handleChange}>
          <option value="" disabled>
            ...
          </option>
          <option value="1">Каждый час &#5171;</option>
          <option value="2">Каждые два часа &#5171;</option>
        </select>
        <label htmlFor="color"></label>
        <input
          type="color"
          name="color"
          value={color}
          onChange={this.handleChange}
        />
        <label htmlFor="remind">Напомнить мне</label>
        <input
          type="checkbox"
          name="remind"
          checked={remind}
          onChange={this.handleChange}
        />
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   addHabbit: obj => dispatch(habitActions.addHabbit(obj)),
// });

// const mapStateToProps = ({ user }) => ({
//   habits: user.habits,
// });

export default HabitForm;
