import { createAction } from '@reduxjs/toolkit';

// const addUser = createAction('ADD_USER', (name, surname, phone) => ({
//   payload: {
//     name,
//     surname,
//     phone,
//   },
// }));

const updateUser = createAction(
  'UPDATE_USER',
  (avatar, height, weight, birthDate) => ({
    payload: {
      avatar,
      height,
      weight,
      birthDate,
    },
  }),
);
// export { addUser, updateUser };

const addUserRequest = createAction('ADD_USER_REQUEST');
const addUserSuccess = createAction('ADD_USER_SUCCESS');
const addUserErorr = createAction('ADD_USER_ERORR');

const updateUserRequest = createAction('UPDATE_USER_REQUEST');
const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
const updateUserErorr = createAction('UPDATE_USER_ERORR');

const setUserToDefault = createAction('SET_USER_TO_DEFAULT');

export {
  addUserRequest,
  addUserSuccess,
  addUserErorr,
  updateUser,
  updateUserRequest,
  updateUserSuccess,
  updateUserErorr,
  setUserToDefault,
};
