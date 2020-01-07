import React from 'react';
import './CourseDetail.scss';
import YouTube from 'react-youtube';

const CourseDetail = ({ id, courses }) => {
  const currentCourse = courses.find(course => {
    return course.id === parseInt(id)
  });
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div className="course-detail">
      <YouTube
        videoId={id}
        opts={opts}
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