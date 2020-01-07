import ReactModal from 'react-modal';
import { userState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignInModal.scss';


const SignInModal = () => {
  const { modal } = useSelector(state => state);
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modal}
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
      contentLabel="SignIn Form"
      className="SignInFormModal"
      overlayClassName="SignInFormOverlay"
    >
      <form className="sign-in-form">
        <label className='username-label' htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          className='username-input'

        />
      </form>
    </ReactModal>
  )
}


export default SignInModal;
