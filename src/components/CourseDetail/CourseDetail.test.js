import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import CourseDetail from './CourseDetail';

const mockStore = configureMockStore([thunk]);

describe('CourseDetail', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      teacher: 'Mr. Feeny',
      courses: {
        course1: 'thing1'
      },
      modalOpen: true
    });
    const getWrapper = () => shallow(
      <Provider store={store}>
        <CourseDetail/>
      </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});