import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  teacher: 'Mr. Feeny',
  courses: [],
  modalOpen: true
});
const getCourses = jest.fn();
const useEffect = jest.fn().mockImplementation(() => getCourses())
const getWrapper = () => mount(
  <Router>
    <Provider store={store}>
      <App useEffect={useEffect}/>
    </Provider>
  </Router>
);
const wrapper = getWrapper();

describe('App', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

