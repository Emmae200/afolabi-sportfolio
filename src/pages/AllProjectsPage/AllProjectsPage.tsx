import { useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './AllProjectsPage.module.css';

export function AllProjectsPage() {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <header className={`${styles.header} fade-in-up`}>
          <h1 className="t-display">ALL<br/>PROJECTS.</h1>
          <p className="t-subtitle" style={{ marginTop: 'var(--space-md)', color: 'var(--text-secondary)' }}>
            A complete collection of my design work.
          </p>
        </header>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id} 
              className={`reveal ${styles.editorialProjectCard}`} 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.editorialProjectMeta}>
                <span className="t-caption">0{index + 1} / {project.title}</span>
                <p className="t-subtitle" style={{ color: 'var(--text-primary)', marginTop: 'var(--space-md)' }}>
                  {project.description}
                </p>
                <span className="t-caption" style={{ marginTop: 'var(--space-lg)', display: 'block' }}>
                  {project.category} / {project.year}
                </span>
              </div>
              
              <div className={styles.editorialProjectImageWrapper}>
                <img src={project.image} alt={project.title} className={styles.editorialProjectImage} />
                <div className={styles.projectHoverIndicator}>
                  <ArrowUpRight size={40} />
                  <span className="t-caption">VIEW PROJECT</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
