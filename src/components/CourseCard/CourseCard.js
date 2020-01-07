import React from 'react';
import './CourseCard.scss';
import { Link } from 'react-router-dom';
import { addToTeacherCourses } from '../../utils/apiCalls';

const CourseCard = ({ id, category, title, description, image }) => {
  const route = `courses/${id}`

  const addToMyList = (e) => {
    e.preventDefault();
    addToTeacherCourses(id)
      .then(teacherCourse => console.log(teacherCourse));
  }

  return (
    <Link to={route}>
      <div className="coursecard">
        <img src={image} alt={title} className="thumbnail"/>
        <div className="course-info">
          <h3 className="category">{category}</h3>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="card-buttons">
            <button onClick={(e) => addToMyList(e)}>Add To My List</button>
            <button>Begin Course</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;