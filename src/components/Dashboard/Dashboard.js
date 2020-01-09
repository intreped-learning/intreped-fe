import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector, useDispatch } from 'react-redux';
import { addTeacherBadge, teacherSignIn } from '../../utils/apiCalls';
import Classroom from '../../images/classroom-management-center.png';
import Culturally from '../../images/culturally-responsive-teaching.png';
import Data from '../../images/data-driven-ddi-badge.png';
import Engagement from '../../images/engagement-strategies-es.png';
import Effective from '../../images/lesson-planning.png';



const Dashboard = () => {
  const { courses, teacher, badgeProgress } = useSelector(state => state);
  const [badgesAwarded, setBadgesAwarded] = useState([]);
  const dispatch = useDispatch();
  
  const filterCompleted = teacher.teacher_courses.filter(course => course.is_complete === true);

  const filterWatchList = teacher.teacher_courses.filter(course => course.is_complete === false);

  useEffect(() => {
    checkBadgeProgress();
    checkForBadgeAward();
  }, [])
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

  const checkBadgeProgress = () => {
    completedCourses.forEach(course => {
      const shortHand = course.category.split(' ')[0];
      const courseUpdate = {
        ...badgeProgress,
        [shortHand]: [...badgeProgress[shortHand], course.id]
      };
      if (!badgeProgress[shortHand].includes(course.id)) {
        dispatch({
          type: 'FINISH_COURSE',
          payload: courseUpdate
        })
      }
    })
  }

  const checkForBadgeAward = () => {
    const categories = Object.keys(badgeProgress);
    const badgeIds = { Engagement: 1, Classroom: 2, Culturally: 3, Effective: 4, Data: 5 };
    categories.forEach(async category => {
      if (badgeProgress[category].length >= 5) {
        if (!teacher.teacher_badges.includes(badgeIds[category])) {
          await addTeacherBadge(teacher.id, badgeIds[category], '0s');
          const teacherUpdate = await teacherSignIn(teacher.username, teacher.password);
          dispatch({
            type: 'LOGIN',
            payload: teacherUpdate[0]
          });
        };  
      };
    });
    determineBadges(badgeIds)
  };

  const determineBadges = (options) => {
    const icons = [Engagement, Classroom, Culturally, Effective, Data]
    const badges = Object.keys(options);
    const earnedBadges = teacher.teacher_badges.map(teacherBadge => badges.findIndex(badge => {
      const results = options[badge] === teacherBadge.badge_id
      return results
    }));
    const earnedBadgeIds = earnedBadges.map(badge => {
      const index = [options[badges[badge]]]
      badgesAwarded.push(icons[index[0]-1])
    });
  };

  const icons = badgesAwarded.map(badge => {
    return (
      <img className='badge-icons-won' src={badge} alt={badge}/>
    )
  })

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
        {badgesAwarded.length && icons}
      </section>
    </main>
  )
}


export default Dashboard;
