import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const { courses, teacher } = useSelector(state => state);
  
  const filterCompleted = teacher.teacher_courses.filter(course => course.is_complete === true);

  const filterWatchList = teacher.teacher_courses.filter(course => course.is_complete === false);

  const getCourseInfo = (list) => {
    return list.map(course => courses.filter( e => e.id === course.course_id)[0]);
  }

  const formatCourseInfo = list => {
    return list.map(course => {
    const route = `courses/${course.id}`
      return (
        <Link to={route}>
          <div className='dashboard-course'>
            <h5 className='course-title'>{course.title}</h5>
            <img className='course-thumbnail' src={course.thumbnail} alt={course.title}/>
          </div>
        </Link>  
      )
    })
  }

  const watchlistCourses = getCourseInfo(filterWatchList)
  const completedCourses = getCourseInfo(filterCompleted)

  return (
    <main className='dashboard'>
      <h2>Completed Courses</h2>
      <h6>Click To Rewatch!</h6>
      <section className='courses-in-progress'>
        {formatCourseInfo(completedCourses)}
        {!completedCourses.length && <h2 className='blank-field-msg'>No Courses Started Yet!</h2>}
      </section>
      <h2>Watch List</h2>
      <section className='watch-list'>
        {formatCourseInfo(watchlistCourses)}
        {!watchlistCourses.length && <h2 className='blank-field-msg' >Add Some Courses To Your Watch List!</h2>}
      </section>
      <h2>Badges</h2>
      <section className='badges'>
        {!teacher.teacher_badges.length && <h2 className='blank-field-msg'>Complete Some Courses To Start Earning Badges!</h2>}
      </section>
    </main>
  )
}


export default Dashboard;
