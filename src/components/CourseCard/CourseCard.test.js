import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import CourseCard from './CourseCard';

const mockStore = configureMockStore([thunk]);

describe('CourseCard', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      teacher: 'Mr. Feeny',
      courses: {},
      modalOpen: true
    });
    const getWrapper = () => mount(
      <Router>
        <Provider store={store}>
          <CourseCard/>
        </Provider>
      </Router>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});