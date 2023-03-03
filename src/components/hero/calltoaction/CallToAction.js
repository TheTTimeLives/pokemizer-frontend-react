import React, { useState } from 'react';
import styles from './calltoaction.module.css';

function CallToAction() {
  const callToAction = [
    {
      header: "Tired of group selfies?",
      subHeader: "Attack your friends with Homey-mon Showdown"
    },
    {
      header: "Put your friendships to the test",
      subHeader: "See who would survive a boosted Hydro Pump"
    },
    {
      header: "It's like tag",
      subHeader: "But your friends get killed by bolts of lightning"
    },
    {
      header: "This is your new gym membership",
      subHeader: "The Pewter City gym specifically"
    }
  ];

  const [randomCallToAction] = useState(callToAction[Math.floor(Math.random() * callToAction.length)]);

  return (
    <>
      <h1 id="header">{randomCallToAction.header}</h1>
      <h2 id="subHeader">{randomCallToAction.subHeader}</h2>
    </>
  );
}

export default CallToAction;
