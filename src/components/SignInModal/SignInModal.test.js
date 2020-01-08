import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SignInModal from './SignInModal';

const mockStore = configureMockStore([thunk]);

describe('SignInModal', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      teacher: 'Mr. Feeny',
      courses: {},
      modalOpen: true
    });
    const getWrapper = () => mount(
      <Provider store={store}>
        <SignInModal/>
      </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});