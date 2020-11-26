import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HabitForm.module.css';

export default class HabitForm extends Component {
  static propTypes = {};

  state = {
    title: '',
    comment: '',
    repeat: '',
    color: '#390093',
    remind: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          className={styles.header}
          style={{ backgroundColor: this.state.color }}
        >
          <button type="button">X</button>
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
