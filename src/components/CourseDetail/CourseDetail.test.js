import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom';
import CourseDetail from './CourseDetail';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  teacher: {
    username: '',
    id: null,
    teacher_courses: [
      {
        "model": "intreped.course",
        "id": 1,
        "fields": {
          "title": "Kagan Cooperative Learning: Inside-Outside Circle & Talking Chips",
          "description": "Kagan structures are techniques and activities teachers can use in their classrooms to keep students engaged, active, and have fun while they are learning",
          "url": "https://www.youtube.com/watch?v=B-hTXzUTxf8",
          "thumbnail": "https://i.ytimg.com/vi/hTXzUTxf8/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "11m30s"
        }
      },
      {
        "model": "intreped.course",
        "id": 2,
        "fields": {
          "title": "Think Pair Share Explained",
          "description": "This video provides a succinct explanation for students about how to participate in THINK PAIR SHARE activities.",
          "url": "https://www.youtube.com/watch?v=wW87rihT38I",
          "thumbnail": "https://i.ytimg.com/vi/wW87rihT38I/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "1m35s"
        }
      }
    ]
  },
  courses: [
    {
      "model": "intreped.course",
      "id": 1,
      "fields": {
        "title": "Kagan Cooperative Learning: Inside-Outside Circle & Talking Chips",
        "description": "Kagan structures are techniques and activities teachers can use in their classrooms to keep students engaged, active, and have fun while they are learning",
        "url": "https://www.youtube.com/watch?v=B-hTXzUTxf8",
        "thumbnail": "https://i.ytimg.com/vi/hTXzUTxf8/mqdefault.jpg",
        "category": "Engagement Strategies",
        "duration": "11m30s"
      }
    },
    {
      "model": "intreped.course",
      "id": 2,
      "fields": {
        "title": "Think Pair Share Explained",
        "description": "This video provides a succinct explanation for students about how to participate in THINK PAIR SHARE activities.",
        "url": "https://www.youtube.com/watch?v=wW87rihT38I",
        "thumbnail": "https://i.ytimg.com/vi/wW87rihT38I/mqdefault.jpg",
        "category": "Engagement Strategies",
        "duration": "1m35s"
      }
    }
  ],
  modalOpen: true
});
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