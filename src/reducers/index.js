import { combineReducers } from 'redux';
import { teacher } from './teacher';
import { courses } from './courses';
import { modalOpen } from './modalOpen';
import { currentCategory } from './currentCategory'; 

export const rootReducer = combineReducers({
  teacher,
  courses,
  modalOpen,
  currentCategory
});