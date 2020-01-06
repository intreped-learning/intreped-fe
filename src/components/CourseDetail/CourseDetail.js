import React from 'react';
import './CourseDetail.scss';
import YouTube from 'react-youtube';

const CourseDetail = ({ id, category, title, description }) => {
  console.log(category)
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
          <h3 className="category">{category}</h3>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="card-buttons">
            <button>Add To My List</button>
            <button>Begin Course</button>
          </div>
        </div>
      </div>
  );
};

export default CourseDetail;