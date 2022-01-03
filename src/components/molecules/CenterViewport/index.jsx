import React from 'react';
import style from './styles.module.css';
const CenterViewport = ({ children }) => {
  return <section className={style.center}>{children}</section>;
};

export default CenterViewport;
