import ReactModal from 'react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Classroom from '../../images/classroom-management-center.png';
import Culturally from '../../images/culturally-responsive-teaching.png';
import Data from '../../images/data-driven-ddi-badge.png';
import Engagement from '../../images/engagement-strategies-es.png';
import Effective from '../../images/lesson-planning.png';
import './CourseCompletedModal.scss';


const CourseCompletedModal = ({modalState, toggleModal, category}) => {
  const dispatch = useDispatch();
  const { badgeProgress, teacher } = useSelector(state => state);

  const determineBadgeIcon = () => {
    if (category === 'Engagement') {
      return Engagement
    } else if (category === 'Classroom') {
      return Classroom
    } else if (category === 'Culturally') {
      return Culturally
    } else if (category === 'Data-Driven') {
      return Data
    } else {
      return Effective
    }
  }

  const determineBadgeProgress = () => {
    if(category === "Data-Driven") {
      category = "Data"
    }
    if (badgeProgress[category].length === []) {
      return 0;
    } else {
      return badgeProgress[category].length;
    }

  }

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalState}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
        content: {}
      }}
      contentLabel="CourseCompleted Form"
      className="CourseCompletedFormModal"
      overlayClassName="CourseCompletedFormOverlay"
    >
      <section className='course-complete-summary'>
        <h1>Congratulations!</h1>
        <p>You have completed {determineBadgeProgress()}/5 courses required for your next badge!</p>
        <img src={determineBadgeIcon()} alt={category}/>
        <button
          className='acknowlege-summary'
          onClick={toggleModal}
        >
          Ok
        </button>
      </section>
    </ReactModal>
  )
}


export default CourseCompletedModal;
