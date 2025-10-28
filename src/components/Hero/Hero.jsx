import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  const scrollToTools = () => {
    document.getElementById('tools-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Design Tools and Notion Templates for <span className={styles.highlight}>Designers</span>
        </h1>
        <p className={styles.subtitle}>
          Built by a designer, for designers.
        </p>
      </div>
      <button className={styles.scrollButton} onClick={scrollToTools}>
        <img src="/assets/icons/down-arrow.svg" alt="Scroll down" className={styles.arrow} />
      </button>
    </section>
  );
}

export default Hero;

