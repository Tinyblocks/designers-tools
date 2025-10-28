import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.brand}>BrandName</h2>
        <p className={styles.copyright}>© 2025 Colin Moinard</p>
      </div>
      <div className={styles.right}>
        <button onClick={() => scrollToSection('tools-section')} className={styles.navLink}>
          Tools
        </button>
        <button onClick={() => scrollToSection('notion-section')} className={styles.navLink}>
          Notion
        </button>
        <button onClick={() => scrollToSection('about-section')} className={styles.navLink}>
          About
        </button>
      </div>
    </footer>
  );
}

export default Footer;

