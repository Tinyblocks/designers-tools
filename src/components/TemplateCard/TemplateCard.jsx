import React from 'react';
import styles from './TemplateCard.module.css';

function TemplateCard({ image, title, price, description, link, buttonText }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {price && price !== 'Free' && <span className={styles.price}>{price}</span>}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.button}
      >
        {buttonText}
      </a>
    </div>
  );
}

export default TemplateCard;

