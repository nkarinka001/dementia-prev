import React from 'react';
import styles from './StartGame.module.scss';
import { Button } from 'semantic-ui-react';

function StartGame() {
  return (
    <div className={styles['start-game']}>
      <div className={styles['btn-container']}>
        <Button className={styles['game-button']}>
          Default game
        </Button>
        <Button className={styles['game-button']}>
          Custom game
        </Button>
      </div>
    </div>
  )
}

export default StartGame;