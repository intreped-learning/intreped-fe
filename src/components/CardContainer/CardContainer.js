import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../CourseCard/CourseCard';
import './CardContainer.scss';

const CardContainer = () => {
  const { courses, currentCategory } = useSelector(state => state);
  let determineCourses = () => {
    if (currentCategory === "all") {
      return courses
    } else {
      return courses.filter(course => course.category === currentCategory)
    }
  }
    

  const courseCards = determineCourses().map(course => {
    return (
      <CourseCard
        key={course.id}
        id={course.id}
        category={course.category}
        title={course.title}
        description={course.description}
        thumbnail = {course.thumbnail}
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