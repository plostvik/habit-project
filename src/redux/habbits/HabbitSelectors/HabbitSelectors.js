const getUserId = state => state.user.id;

const getUserAvatar = state => state.user.avatar;
const getUserHeight = state => state.user.height;
const getUserWeight = state => state.user.weight;
const getUserBirthDate = state => state.user.birthDate;

export {
  getUserId,
  getUserAvatar,
  getUserHeight,
  getUserWeight,
  getUserBirthDate,
};
