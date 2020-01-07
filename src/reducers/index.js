import { combineReducers } from 'redux';
import { teacher } from './teacher';
import { courses } from './courses';

export const rootReducer = combineReducers({
  teacher,
  courses
});