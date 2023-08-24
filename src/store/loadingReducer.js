import { IS_LOADING } from "../utils/constants";

const initialState = {
  isLoading: false,
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: action.payload
      }

    default:
      return state;
  }
}
