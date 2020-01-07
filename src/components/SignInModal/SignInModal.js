import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignInModal.scss';


const SignInModal = () => {
  const { modalOpen } = useSelector(state => state);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalOpen}
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
          value={username}
          onChange={handleChange}
        />
        <label className='password-label' htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          className='password-input'
          value={password}
          onChange={handleChange}
        />
      </form>
    </ReactModal>
  )
}


export default SignInModal;
