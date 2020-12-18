import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import { addUser, updateUser } from './actions/userActions';
import {
  addUserRequest,
  addUserSuccess,
  addUserErorr,
  updateUser,
  updateUserRequest,
  updateUserSuccess,
  updateUserErorr,
  setUserToDefault,
} from './actions/userActions';

const initialState = {
  name: '',
  surname: '',
  phone: '',
  avatar:
    'https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg',
  height: '',
  weight: '',
  birthDate: '',
  habits: [],
};

const addUserFn = (state, action) => ({ ...state, ...action.payload });
const updateUserFn = (state, action) => ({ ...state, ...action.payload });

const habbitReduser = createReducer(initialState, {
  [addUserSuccess]: addUserFn,
  [updateUserSuccess]: updateUserFn,
  [setUserToDefault]: () => ({ ...initialState }),
});

export default habbitReduser;

// const todosReducer = createReducer(initialState.todos, {
//   [addToDoSuccess]: addToDoItem,
//   [fetchTasksSuccess]: (_, action) => action.payload,
//   [deleteTaskSuccess]: removeToDoItem,
// });
