import React, { useState } from 'react';
import './CourseDetail.scss';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import { completeCourse, teacherSignIn } from '../../utils/apiCalls';
import CourseCompleteModal from '../CourseCompletedModal/CourseCompletedModal';

const CourseDetail = ({ id }) => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const { courses, teacher, badgeProgress } = useSelector(state => state);
  const currentCourse = courses.find(course => course.id === parseInt(id));
  const videoId = currentCourse.url.split('?v=')[1];
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
    const teacherCourse = teacher.teacher_courses.find(course => course.course_id === parseInt(id));
    await completeCourse(teacherCourse.id, currentCourse.duration);
    const teacherCourseRes = await teacherSignIn(teacher.username, teacher.password)
    dispatch({
      type: 'LOGIN',
      payload: teacherCourseRes[0]
    })
    updateBadges()
  }

  const updateBadges = async () => {
    const shortHandCategory = currentCourse.category.split(' ')[0]
    const updatedBadges = {
      ...badgeProgress,
      [shortHandCategory]:[...badgeProgress[shortHandCategory], currentCourse.id]
    };
    if (!badgeProgress[shortHandCategory].includes(currentCourse.id)) {
      dispatch({
        type: 'FINISH_COURSE',
        payload: updatedBadges
      })
    }
    toggleModal();
  }


  const toggleModal = () => {
    setModalState(!modalState);
  }

  return (
    <div className="course-detail">
      <YouTube
        videoId={videoId}
        opts={opts}
        onEnd={teacher.id && sendCompletion}
      />
      <div className="course-info">
          <h3 className="category">{currentCourse.category}</h3>
          <h3 className="title">{currentCourse.title}</h3>
          <p className="description">{currentCourse.description}</p>
      </div>
      <CourseCompleteModal
        modalState={modalState}
        toggleModal={toggleModal}
        category={currentCourse.category.split(' ')[0]} />
    </div>
  );
};

export default CourseDetail;