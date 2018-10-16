import React from 'react';
import styles from './StartGame.module.scss';

function StartGame() {
  return (
    <div className={styles['start-game']}>
      <div className={styles['start-title']}>
        Choose game
      </div>
      <div className={styles['btn-container']}>
        <Link to="/start-game">
            <button className={styles['game-button']}>
              Default game
            </button>
        </Link>
        <button className={styles['game-button']}>
          Custom game
        </button>
      </div>
    </div>
  )
}

export default StartGame;