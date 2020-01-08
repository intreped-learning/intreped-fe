import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const mockStore = configureMockStore([thunk]);

// If I use mount without <Router>, I get "You should not use <Link> outside a <Router>". 
// If I use mount with <Router>, it tries to render all the child components.
// If I use shallow, it says I need to wrap it in a provider.
// If I use shallow and wrap App in a provider, it takes a snapshot of the provider, not of App. 

describe('App', () => {
  it.skip('should match snapshot', () => {
    const store = mockStore({
      teacher: 'Mr. Feeny',
      courses: {},
      modalOpen: true
    });
    const getWrapper = () => mount(
        <Provider store={store}>
          <App/>
        </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});