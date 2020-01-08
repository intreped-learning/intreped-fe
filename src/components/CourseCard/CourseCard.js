import React from 'react';
import './CourseCard.scss';
import { Link } from 'react-router-dom';
import { addToTeacherCourses } from '../../utils/apiCalls';

const CourseCard = ({ id, category, title, description, thumbnail, badge }) => {
  const route = `courses/${id}`

  const addToMyList = (e) => {
    e.preventDefault();
    addToTeacherCourses(id)
      .then(teacherCourse => console.log(teacherCourse));
  }

  const categoryCheck = () => {
    if(category === "Culturally Responsive Teaching") {
      return "CLDE"
    } else {
      return category
    }
  }

  return (
    <Link to={route}>
      <div className="coursecard">
        <img src={thumbnail} alt={title} className="thumbnail"/>
        <div className="course-info">
          <img src={badge} alt="badge" width="50px" className="badge-icon"/>
          <h3 className="category">{categoryCheck()}</h3>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="card-buttons">
            <button className="add-to-list-btn" onClick={(e) => addToMyList(e)}>Add To My List</button>
            <button className="begin-course-btn">Begin Course</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;