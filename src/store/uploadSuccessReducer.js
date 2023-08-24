import { IS_UPLOAD_SUCCESS } from "../utils/constants";

const initialState = {
  isUploadSuccess: false,
}

export const uploadSuccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_UPLOAD_SUCCESS:
      return {
        isUploadSuccess: action.payload
      }

    default:
      return state;
  }
}
