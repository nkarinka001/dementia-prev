import React from 'react';
import styles from './Home.module.scss';
import Header from '../../Header/Header';
import StartGame from '../StartGame/StartGame';
import CreateGame from '../CreateGame/CreateGame';
import Guide from '../Guide/Guide';
import Choose from '../Choose/Choose';
import MidGame from '../MidGame/MidGame';
import EndGame from '../EndGame/EndGame';

function Home() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <StartGame />
    </div>
  )
}

export default Home;