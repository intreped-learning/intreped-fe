import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should match snapshot', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      teacher: {
        username: '',
        id: null
      },
      courses: {},
      modalOpen: true
    });
    const getWrapper = () => mount(
      <Router>
        <Provider store={store}>
          <NavBar/>
        </Provider>
      </Router>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});