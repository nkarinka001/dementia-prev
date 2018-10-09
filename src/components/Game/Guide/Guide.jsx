import React from 'react';

import styles from './Guide.module.scss';

function Guide() {
  return (
    <div className={styles['guide']}>
      <div>
        <div className={styles['guide-container']}>
          <div className={styles['guide-text']}>
            Show this to your elderly friend
        </div>
        </div>
        <button className={styles['guide-btn']}>
          Start
      </button>
      </div>
    </div>
  )
}

export default Guide;
