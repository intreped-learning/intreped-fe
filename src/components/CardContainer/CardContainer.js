import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../CourseCard/CourseCard';
import './CardContainer.scss';

const CardContainer = () => {
  const dispatch = useDispatch();
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
    let filteredCourses = determineCourses().filter(course => course.title.toLowerCase().includes(currentSearch.toLowerCase()) || course.description.toLowerCase().includes(currentSearch.toLowerCase()));
    if (filteredCourses.length === 0 ) {
        dispatch({
          type: 'CREATE_ERROR_MESSAGE',
          payload: ` Could not find any videos related to your search of ${currentSearch}`
        })
        return []
    } else {
      return filteredCourses;
    }
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