import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={styles.about} id="about-section">
      <div className={styles.header}>
        <SectionHeader title="About." />
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="/assets/profile.png" alt="Colin Moinard" className={styles.profileImage} />
          <div className={styles.text}>
            <p className={styles.description}>
              I'm Colin Moinard, a freelance product designer. I built these tools to solve my own problems with overcomplicated software. If they help you, share them with other designers.
            </p>
          </div>
          <a 
            href="https://colinmoinard.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            View my portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
