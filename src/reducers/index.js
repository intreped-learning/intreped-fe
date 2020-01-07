import { combineReducers } from 'redux';
import { teacher } from './teacher';
import { courses } from './courses';
import { modalOpen } from './modalOpen'

export const rootReducer = combineReducers({
  teacher,
  courses,
  modalOpen
});