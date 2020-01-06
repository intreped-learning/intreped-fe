import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CardContainer.scss';

const CardContainer = ({ courses }) => {
  const courseCards = courses.map(course => {
    return (
      <CourseCard 
        id={course.id}
        category={course.courseCategory}
        title={course.snippet.title}
        description={course.snippet.description}
      />
    )
  })

  return (
    <div className="card-container">
      {courseCards}
    </div>
  )
}

export default CardContainer;