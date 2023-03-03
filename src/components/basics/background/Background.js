import React from 'react';
import styles from './background.module.css';

function Background({ imageUrl, left, top }) {
  const backgroundImageStyle = {
    background: `url(${imageUrl}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    left: left,
    top: top
  };

  return (
    <div className={styles['background-container']}>
      <div className={styles['background-image']} style={backgroundImageStyle} />
    </div>
  );
}

export default Background;