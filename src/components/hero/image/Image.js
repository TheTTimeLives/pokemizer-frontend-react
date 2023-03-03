import React, { useState, useEffect } from 'react';
import styles from './image.module.css';


function HeroImage() {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const images = [
      "hero/trainerF2.png",
      "hero/trainerM2.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <img src={`${process.env.PUBLIC_URL}/assets/images/${randomImage}`} className={styles['hero']} />
  );
}

export default HeroImage;
