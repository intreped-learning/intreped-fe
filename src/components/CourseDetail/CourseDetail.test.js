import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import CourseDetail from './CourseDetail';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  teacher:
      {
          "id": 1,
          "name": "Jason Bourne",
          "username": "top_assassin",
          "email": "jbourne@email.com",
          "password": "password",
          "teacher_courses": [
              {
                  "id": 1,
                  "teacher_id": 1,
                  "course_id": 1,
                  "current_time_marker": "3m6s",
                  "is_favorite": true,
                  "is_complete": false,
                  "is_in_progress": true
              }
          ],
          "teacher_badges": []
      },
      courses: [
        {
            "id": 1,
            "title": "Improve Your Audience Connection",
            "description": "How to engage your target audience",
            "url": "something.com/slfsaldfhk",
            "thumbnail": "something.com/salkdfhkjfh",
            "category": "Engagement Strategies",
            "duration": "14m5s"
        },
        {
            "id": 2,
            "title": "Example",
            "description": "This is an example",
            "url": "fakeurl.com",
            "thumbnail": "fakeimage.jpg",
            "category": "Different Category",
            "duration": "4m47s"
        }
    ],
    badgeProgress: {
      Engagement: [1, 6, 8],
      Classroom: [2, 4],
      Culturally: [9],
      Effective: [11, 13],
      Data: [5]
    }    
})
const getWrapper = () => mount(
  <Router>
    <Provider store={store}>
      <CourseDetail id={1}/>
    </Provider>
  </Router>
);
const wrapper = getWrapper();

describe('CourseDetail', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});