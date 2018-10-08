import React from 'react';
import styles from './Home.module.scss';
import Header from '../../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      Home component. This component is rendered first after user logs in.
    </div>
  )
}

export default Home;