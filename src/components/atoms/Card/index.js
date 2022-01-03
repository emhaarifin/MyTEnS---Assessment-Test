import React from 'react';
import styles from './styles.module.css';
const Card = ({ name, url }) => {
  return (
    <section className={styles.card}>
      <p className='text--max-1-line'>{name}</p>
      <a href={url}>Visit Project</a>
    </section>
  );
};

export default Card;
