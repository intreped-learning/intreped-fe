import React, { useState }  from 'react';
import './CourseCard.scss';
import { Link } from 'react-router-dom';
import { addToTeacherCourses } from '../../utils/apiCalls';

const CourseCard = ({ id, category, title, description, thumbnail }) => {
  const route = `courses/${id}`
  const [error, setError] = useState('');

  const addToMyList = async (e) => {
    e.preventDefault();
    try {
      const res = await addToTeacherCourses(id)
    } catch (error) {
        setError('Course is already in your lists!')
    }
  }

  return (
    <Link to={route}>
      <div className="coursecard">
        <img src={thumbnail} alt={title} className="thumbnail"/>
        <div className="course-info">
          <h3 className="category">{category}</h3>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="card-buttons">
            <button className="add-to-list-btn" onClick={(e) => addToMyList(e)}>Add To My List</button>
            <button className="begin-course-btn">Begin Course</button>
          </div>
          {error && <p>{error}</p>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;