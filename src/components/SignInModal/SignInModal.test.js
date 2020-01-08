import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignInModal from './SignInModal';
import { rootReducer } from '../../reducers';

describe('SignInModal', () => {
  it('should match snapshot', () => {
    const mockStore = createStore(rootReducer, {
      teacher: 'Mr. Feeny',
      courses: {},
      modalOpen: true
    })
    const getWrapper = () => mount(
      <Provider store={mockStore}>
        <SignInModal/>
      </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  })
});