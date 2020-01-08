import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const { courses, teacher } = useSelector(state => state);
  
  const filterInProgress = teacher.teacher_courses.filter(course => course.is_in_progress === true);

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
            <h3 className='course-title'>{course.title}</h3>
            <img src={course.thumbnail} alt={course.title}/>
          </div>
        </Link>  
      )
    })
  }

  const watchlistCourses = getCourseInfo(filterWatchList)
  const inProgressCourses = getCourseInfo(filterInProgress)

  return (
    <main className='dashboard'>
      {console.log("watchList", watchlistCourses)}
      {console.log('inProgess', inProgressCourses)
      }
      <section className='courses-in-progress'>
        <h2>In Progress</h2>
        {formatCourseInfo(inProgressCourses)}
      </section>
      <section className='watch-list'>
        <h2>Watch List</h2>
        {formatCourseInfo(watchlistCourses)}
      </section>
      <section className='badges'>
        <h2>Badges</h2>
      </section>
    </main>
  )
}


export default Dashboard;
