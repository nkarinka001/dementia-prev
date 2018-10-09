import React from 'react';

import styles from './EndGame.module.scss';

function EndGame () {
  return (
    <div className={styles['endgame']}>
      <div>
        <div className={styles['endgame-container']}>
          <div className={styles['endgame-text']}>
            Congratulations! You got 10 out of 10 correct
        </div>
        </div>
        <button className={styles['endgame-btn']}>
          Next
      </button>
      </div>
    </div>
  )
}

export default EndGame;
