import React from 'react';
import styles from './styles.module.css';
const Loading = () => {
  return (
    <section className={styles.card}>
      <p className='skeleton' style={{ height: '16px' }}></p>
      <div className='skeleton' style={{ height: '16px' }}></div>
    </section>
  );
};

export default React.memo(Loading);
