import React, {useEffect} from 'react';
import TestingRequestorButton from '../../testing/testingrequestorbutton/TestingRequestorButton';
import Hamburger from '../../basics/hamburger/Hamburger';
import HeroImage from '../../hero/image/Image';
import CallToAction from '../../hero/calltoaction/CallToAction';
import LoginRegister from '../../basics/loginregister/LoginRegister';
import Background from '../../basics/background/Background';
import styles from './landingpage.module.css';
import { useSelector } from 'react-redux';
import loginSlice from '../../../redux/loginSlice';
import { Redirect } from 'react-router-dom';

function LandingPage() {
  // const history = useHistory()
  const wallpaper = {
    url: "wallpaper/pokeballs.jpg",
    left: "",
    top: ""
  };

  let loggedIn = useSelector((state) => state.loggedIn)
  if (loggedIn) {
    // history.push('/dashboard');
  }

  return (
    <>
      <TestingRequestorButton />
      <Hamburger />
      <HeroImage />
      <div className={styles["heroStatementsWrapper"]}>
        <CallToAction />
        <LoginRegister />
      </div>
      <Background
        imageUrl={`${process.env.PUBLIC_URL}/assets/images/${wallpaper.url}`}
        left={wallpaper.left}
        top={wallpaper.top}
      />
    </>
  );
}

export default LandingPage;
