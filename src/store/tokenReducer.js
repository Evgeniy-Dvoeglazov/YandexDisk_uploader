import { TOKEN } from "../utils/constants";

const initialState = {
  tokenInfo: {},
}

export const uploadSuccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        tokenInfo: action.payload
      }

    default:
      return state;
  }
}
