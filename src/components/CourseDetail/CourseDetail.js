import React from 'react';
import './CourseDetail.scss';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import { completeCourse, teacherSignIn } from '../../utils/apiCalls';

const CourseDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { courses, teacher } = useSelector(state => state);
  const currentCourse = courses.find(course => course.id === parseInt(id));
  const teacherCourse = teacher.teacher_courses.find(course => course.course_id === parseInt(id));
  const videoId = currentCourse.fields.url.split('?v=')[1];
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
    }
  };

  const sendCompletion = async () => {
    const updatedCourse = await completeCourse(teacherCourse.id, currentCourse.duration);
    const teacherCourseRes = await teacherSignIn(teacher.username, teacher.password)
    dispatch({
      type: 'LOGIN',
      payload: teacherCourseRes[0]
    })
  }

  return (
    
    <div className="course-detail">
      <YouTube
        videoId={videoId}
        opts={opts}
        onEnd={sendCompletion}
      />
      <div className="course-info">
          <h3 className="category">{currentCourse.category}</h3>
          <h3 className="title">{currentCourse.title}</h3>
          <p className="description">{currentCourse.description}</p>
        </div>
      </div>
  );
};

export default CourseDetail;