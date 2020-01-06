import React from 'react';
import './CourseCard.scss';
import YouTube from 'react-youtube';

const CourseCard = ({ id, category, title, description, image }) => {
  const opts = {
    height: '135',
    width: '240',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div className="coursecard">
      <img src={image} alt={title} className="thumbnail"/>
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

export default CourseCard;