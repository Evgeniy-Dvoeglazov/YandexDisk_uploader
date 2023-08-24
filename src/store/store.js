import { legacy_createStore as createStore, combineReducers } from 'redux';
import { selectedFilesReducer } from './selectedFilesReducer';
import { maxFilesReducer } from './maxFilesReduser';
import { loadingReducer } from './loadingReducer';
import { uploadSuccessReducer } from './uploadSuccessReducer';
import { serverErrorReducer } from './serverErrorReducer';
import { authReducer } from './authReducer';
import { tokenReducer } from './tokenReducer';
import { authErrorReducer } from './authErrorReducer';

const rootReducer = combineReducers({
  selectedFiles: selectedFilesReducer,
  maxFiles: maxFilesReducer,
  loading: loadingReducer,
  uploadSuccess: uploadSuccessReducer,
  serverError: serverErrorReducer,
  auth: authReducer,
  authError: authErrorReducer,
  token: tokenReducer
})

export const store = createStore(rootReducer);
