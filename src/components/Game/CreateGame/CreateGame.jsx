import React from 'react';
import styles from './CreateGame.module.scss';

function CreateGame() {
  return (
    <div className={styles['create-container']}>
      <div className={styles['photos-container']}>
        <label className={styles['photos-label']}>
          Upload photos
        </label>
        <div className={styles['photos-input']}>
          <input type='textbox' className={styles['photo-upload']} />
          <input type='textbox' className={styles['photo-upload']} />
          <input type='textbox' className={styles['photo-upload']} />
        </div>
        <button className={styles['create-button']}>
          Publish
        </button>
      </div>
    </div>
  )
}

export default CreateGame;
