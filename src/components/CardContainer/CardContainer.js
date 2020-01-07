import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../CourseCard/CourseCard';
import './CardContainer.scss';

const CardContainer = () => {
  const { courses, currentCategory, currentSearch } = useSelector(state => state);
  let determineCourses = () => {
    if (currentCategory === "All Categories" ) {
      return courses
    }
      else {
      return courses.filter(course => course.category === currentCategory);
    }
  }
  let searchCourses = () => {
    return determineCourses().filter(course => course.title.toLowerCase().includes(currentSearch.toLowerCase()) || course.description.toLowerCase().includes(currentSearch.toLowerCase()));
  }


  const courseCards = searchCourses().map(course => {
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