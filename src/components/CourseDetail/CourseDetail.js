import React from 'react';
import './CourseDetail.scss';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const CourseDetail = ({ id }) => {
  const { courses } = useSelector(state => state);
  const currentCourse = courses.find(course => course.id === parseInt(id));
  const videoId = currentCourse.url.split('?v=')[1];
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
        videoId={videoId}
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