import { ADD_FILES, REMOVE_All_FILES, REMOVE_FILE } from "../utils/constants"

const initialState = {
  selectedFiles: [],
}

export const selectedFilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILES:
      return {
        selectedFiles: state.selectedFiles.concat([...action.payload]).filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.path === value.path)))
      }

    case REMOVE_All_FILES:
      return {
        selectedFiles: action.payload
      }

    case REMOVE_FILE:
      return {
        selectedFiles: state.selectedFiles.filter((currentFile) => currentFile.path !== action.payload)
      }

    default:
      return state;
  }
}
