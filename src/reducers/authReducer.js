export const authReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_USER": {
      const { user, encodedToken } = action.payload;
      console.log(user);
      return {
        ...state,
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        encodedToken: encodedToken,
      };
    }
    default:
      return state;
  }
};
