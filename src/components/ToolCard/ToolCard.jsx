import React from 'react';
import styles from './ToolCard.module.css';

function ToolCard({ icon, title, description, link, buttonText }) {
  const isComingSoon = link === '#';
  
  return (
    <div className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''}`}>
      {!isComingSoon && icon && (
        <div className={styles.icon}>
          <img src={icon} alt={title} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {!isComingSoon && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.button}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

export default ToolCard;

