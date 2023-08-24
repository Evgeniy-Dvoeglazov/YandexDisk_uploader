import { IS_SERVER_ERROR } from "../utils/constants";

const initialState = {
  isServerError: false,
}

export const serverErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SERVER_ERROR:
      return {
        isServerError: action.payload
      }

    default:
      return state;
  }
}
