import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import { Header } from './Header';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  teacher: {
    username: '',
    id: null
  },
  courses: [],
  modalOpen: true
});

store.dispatch = jest.fn().mockImplementation(action => action)
const handleLogOut = jest.fn()
const clickFn = store.getState().teacher.id ? handleLogOut : store.dispatch
const getWrapper = () => mount(
  <Router>
    <Provider store={store}>
      <Header onClick={clickFn}/>
    </Provider>
  </Router>
);
const wrapper = getWrapper();

describe('Header', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle modal on click', () => {
    wrapper.find('.sign-in-btn').simulate('click')
    expect(store.dispatch).toHaveBeenCalled()
  })

  it('should call handleLogOut on click', () => {
    // wrapper.find('.sign-out-btn').simulate('click')
    // expect(store.dispatch).toHaveBeenCalled()
  })
});