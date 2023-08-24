import { AUTH_ERROR } from "../utils/constants";

const initialState = {
  isAuthError: false,
}

export const authErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        isAuthError: action.payload
      }

    default:
      return state;
  }
}
