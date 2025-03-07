import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slice/Slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
