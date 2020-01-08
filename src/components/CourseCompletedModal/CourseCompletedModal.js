import ReactModal from 'react-modal';
import React from 'react';
import { useDispatch } from 'react-redux';
import './CourseCompletedModal.scss';


const CourseCompletedModal = ({modalState, toggleModal}) => {
  const dispatch = useDispatch();

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
