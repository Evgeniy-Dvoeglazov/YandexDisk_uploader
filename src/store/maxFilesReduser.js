import { IS_MAX_FILES } from "../utils/constants";

const initialState = {
  isMaxFiles: false,
}

export const maxFilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MAX_FILES:
      return {
        isMaxFiles: action.payload
      }

    default:
      return state;
  }
}
