import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CourseCard.scss';
import { Link } from 'react-router-dom';
import { addToTeacherCourses, teacherSignIn } from '../../utils/apiCalls';

const CourseCard = ({ id, category, title, description, thumbnail, badge }) => {
  const route = `courses/${id}`
  const { teacher } = useSelector(state => state);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');

  const addToMyList = async (e) => {
    e.preventDefault();
    try {
      const res = await addToTeacherCourses(id)
      setFeedback('Success! Course Added!')
      updateTeacher();
    } catch (error) {
        setError('Course is already in your lists!')
    }
  }

  const updateTeacher = async () => {
    const teacherUpdate = await teacherSignIn(teacher.username, teacher.password);
    dispatch({
      type: 'LOGIN',
      payload: teacherUpdate[0]
    });
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
          {error && <p>{error}</p>}
          {feedback && <p>{feedback}</p>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;