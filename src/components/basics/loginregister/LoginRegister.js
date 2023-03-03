import React, { useState } from 'react';
import styles from './loginregister.module.css';
import Modal from 'react-modal';

function LoginRegister() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jwt, setJwt] = useState('');

  function openModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  function login() {
    setJwt('TOKEN SET')
  }

  if (!loggedIn) {
    return (
      <div>
        <div>
        {/* Gonna make these route to sepereate components later */}
          <span onClick={openModal}>Login</span> or <span onClick={openModal}>Register</span>
        </div>
        <Modal isOpen={showModal} onRequestClose={closeModal} className={styles["content"]}>
          <h3>Login</h3>
          <p onClick={login}>Click Me and then you're Logged In! JWT: {jwt}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
  }

  return null;
}

export default LoginRegister;
