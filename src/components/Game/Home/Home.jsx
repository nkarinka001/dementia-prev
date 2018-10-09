import React from 'react';
import styles from './Home.module.scss';
import Header from '../../Header/Header';
import StartGame from '../StartGame/StartGame';
import CreateGame from '../CreateGame/CreateGame';

function Home() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <StartGame />
      <CreateGame />
    </div>
  )
}

export default Home;