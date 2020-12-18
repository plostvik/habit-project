import axios from 'axios';

import {
  addUserRequest,
  addUserSuccess,
  addUserErorr,
  updateUserRequest,
  updateUserSuccess,
  updateUserErorr,
} from '../actions/userActions';

const addUserOperation = (name, surname, phone) => dispatch => {
  dispatch(addUserRequest());
  axios
    .post('http://localhost:2000/users', { name, surname, phone })
    .then(response => {
      dispatch(addUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(addUserErorr(error));
    });
};

const updateUserOperation = (
  id,
  avatar,
  height,
  weight,
  birthDate,
) => dispatch => {
  dispatch(updateUserRequest());
  axios
    .patch(`http://localhost:2000/users/${id}`, {
      avatar,
      height,
      weight,
      birthDate,
    })
    .then(response => {
      dispatch(updateUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(updateUserErorr(error));
    });
};

const getUserOperation = (name, surname, phone) => dispatch => {
  dispatch(addUserRequest());
  axios
    .post('http://localhost:2000/users', { name, surname, phone })
    .then(response => {
      dispatch(addUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(addUserErorr(error));
    });
};

export { addUserOperation, updateUserOperation };
