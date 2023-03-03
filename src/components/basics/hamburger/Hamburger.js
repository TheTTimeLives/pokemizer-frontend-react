import React from 'react';
import styles from './hamburger.module.css';

function Hamburger() {
  return (
    <label className={styles['wrapper']}>
      <span className={styles['wrapper-span']}></span>
      <span className={styles['wrapper-span']}></span>
      <span className={styles['wrapper-span']}></span>
    </label>
  );
}

export default Hamburger;
