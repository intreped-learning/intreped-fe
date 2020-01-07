import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CardContainer.scss';

const CardContainer = ({ courses }) => {
  const courseCards = courses.map(course => {
    return (
      <CourseCard
        key={course.id}
        id={course.id}
        category={course.category}
        title={course.title}
        description={course.description}
        image={course.thumbnail}
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