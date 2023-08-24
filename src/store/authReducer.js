import { IS_AUTH } from "../utils/constants";

const initialState = {
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        isAuth: action.payload
      }

    default:
      return state;
  }
}
