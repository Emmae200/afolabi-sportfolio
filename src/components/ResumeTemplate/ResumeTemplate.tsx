import { forwardRef } from 'react';
import styles from './ResumeTemplate.module.css';

export const ResumeTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.resumeContainer}>
      <header className={styles.headerRow}>
        <div className={styles.nameBlock}>
          <div className={styles.name}>Afolabi Emmanuel</div>
          <div className={styles.contactInfo}>
            afolabiolufemi@icloud.com<br/>
            +2349029501826<br/>
            afolabiolufemi.com
          </div>
        </div>
        <div className={styles.roleBlock}>
          UI Designer<br/>
          Product Designer
        </div>
      </header>

      <div className={styles.titleRow}>
        <h1 className={styles.mainTitle}>Resume</h1>
        <img src="/profilepic.png" alt="Profile" className={styles.profileImage} />
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.separator}></div>
        
        <div className={styles.itemRow}>
          <div className={styles.itemLeft}>
            <div className={styles.itemTitle}>Founder & Product Designer</div>
            <div className={styles.itemSubtitle}>UniFlow — Led visual direction and product design of an AI-powered productivity platform for university students.</div>
          </div>
          <div className={styles.itemDate}>2025–Present</div>
        </div>

        <div className={styles.itemRow}>
          <div className={styles.itemLeft}>
            <div className={styles.itemTitle}>Concept Design</div>
            <div className={styles.itemSubtitle}>Yetify — Defined product's visual direction and interface from concept through high-fidelity execution.</div>
          </div>
          <div className={styles.itemDate}>2024</div>
        </div>

        <div className={styles.itemRow}>
          <div className={styles.itemLeft}>
            <div className={styles.itemTitle}>Project Management / Project Controls Intern</div>
            <div className={styles.itemSubtitle}>International Energy Services Limited (IESL) — Supported project planning, scheduling, and reporting.</div>
          </div>
          <div className={styles.itemDate}>Mar–May 2025</div>
        </div>

        <div className={styles.itemRow}>
          <div className={styles.itemLeft}>
            <div className={styles.itemTitle}>IT Support Intern</div>
            <div className={styles.itemSubtitle}>International Energy Services Limited (IESL) — Provided technical support for hardware, software, and networks.</div>
          </div>
          <div className={styles.itemDate}>May–Sep 2025</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.separator}></div>
        
        <div className={styles.itemRow}>
          <div className={styles.itemLeft}>
            <div className={styles.itemTitle}>B.Sc. Management Information Systems</div>
            <div className={styles.itemSubtitle}>Covenant University</div>
          </div>
          <div className={styles.itemDate}>2022–2026</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.separator}></div>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillsColumn}>
            <div className={styles.skillItem}>UI / Visual Design</div>
            <div className={styles.skillItem}>Design Systems</div>
            <div className={styles.skillItem}>High-Fidelity Prototyping</div>
            <div className={styles.skillItem}>Responsive Design</div>
            <div className={styles.skillItem}>Mobile & SaaS</div>
            <div className={styles.skillItem}>AI Interfaces</div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.skillItem}>Figma</div>
            <div className={styles.skillItem}>Canva</div>
            <div className={styles.skillItem}>Photoshop</div>
            <div className={styles.skillItem}>HTML / CSS / JavaScript</div>
            <div className={styles.skillItem}>Ionic React / TypeScript</div>
            <div className={styles.skillItem}>GitHub</div>
          </div>
        </div>
      </section>
    </div>
  );
});

ResumeTemplate.displayName = 'ResumeTemplate';
