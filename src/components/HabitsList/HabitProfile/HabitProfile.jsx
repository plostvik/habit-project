import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal';
import HabitForm from '../HabitForm';

export default class HabitProfile extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <header>
          <NavLink to={'profile/habitlist/'}>Назад</NavLink>
          <h2>Title</h2>
          <button type="button" onClick={this.props.modalToggle}>
            Править
          </button>
        </header>

        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabbit={this.toAddHabbit}
            />
          </Modal>
        )}
        <button to>Удалить привычку</button>
      </>
    );
  }
}
