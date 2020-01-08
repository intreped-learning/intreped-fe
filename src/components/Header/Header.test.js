import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import { Header } from './Header';

const mockStore = configureMockStore([thunk]);

describe('Header', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      teacher: 'Mr. Feeny',
      courses: {},
      modalOpen: true
    });
    const getWrapper = () => shallow(
        <Provider store={store}>
          <Header/>
        </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});