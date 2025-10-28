import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader({ title, subtitle, opacity = 1 }) {
  return (
    <div className={styles.sectionHeader} style={{ opacity }}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <div className={styles.subtitleWrapper}>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      )}
    </div>
  );
}

export default SectionHeader;

