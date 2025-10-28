import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';

function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.brandContainer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="PixelKit Logo" className={styles.logo} />
          </div>
          <div className={styles.brandText}>
            <h2 className={styles.brand}>PixelKit</h2>
            <p className={styles.copyright}>© 2025 Colin Moinard</p>
          </div>
        </div>
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

