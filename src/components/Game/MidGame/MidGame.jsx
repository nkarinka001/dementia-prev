import React from 'react';
import styles from './MidGame.module.scss';

function MidGame() {
  return (
    <div className={styles['midgame']}>
      <div className={styles['midgame-content']}>
        <div className={styles['midgame-title']}>
          Is this...
        </div>
        <div className={styles['midgame-container']}>
          <div className={styles['image-container']}>
            <img
              className={styles['image']}
              src='https://image.flaticon.com/icons/png/512/23/23228.png' />
          </div>
          <div className={styles['midgame-text']}>
            Mr John?
          </div>
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['midgame-btn-yes']}>Yes</button>
          <button className={styles['midgame-btn-no']}>No</button>
        </div>
      </div>
    </div>
  )
}

export default MidGame;