import React from 'react';
import './Dashboard.scss';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const { teacher } = useSelector(state => state);
  const filterInProgress = teacher.teacher_courses.filter(course => course.is_in_progress === true);
  const coursesInProgress = filterInProgress.map(course => {
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
    <main className='dashboard'>
      <section className='courses-in-progress'>
        {coursesInProgress}
      </section>
      <section className='watch-list'>

      </section>
      <section className='badges'>

      </section>
    </main>
  )
}


export default Dashboard;
