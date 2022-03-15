import React from 'react';
import styles from './Card.module.css';

export default function Card({name, email, img}) {
  const src = "/img/" + img;
  const mailto = "mailto:" + email;
  return (
    <div className={styles.card}>
      <div>
      <img alt={name} className={styles.avatar} src={src}></img>
      </div>
      <div>
        <p className={styles.name}>{name}</p>
        <a href={mailto} target="_blank" rel="noopener noreferrer">{email}</a>
        </div>
    </div>
  );
}
