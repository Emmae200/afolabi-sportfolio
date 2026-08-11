import { useParams, Link, Navigate } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { ArrowLeft } from 'lucide-react';
import { Carousel } from '../../components/Carousel/Carousel';
import { projects } from '../../data/projects';
import styles from './ProjectPage.module.css';
import { useEffect } from 'react';

export function ProjectPage() {
  useReveal();
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" />;
  }

  // Find next project for the footer link
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={styles.projectPage}>
      {/* Back Button */}
      <div className={`container ${styles.backNav}`}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <header className={`container ${styles.editorialHero}`}>
        <div className={`reveal ${styles.heroImageWrapper}`} style={{ marginBottom: 'var(--space-3xl)' }}>
          <Carousel images={project.carouselImages} />
        </div>

        <div className={`reveal ${styles.editorialHeroHeader}`}>
          <h1 className="t-display">{project.title}</h1>
          <p className="t-subtitle" style={{ maxWidth: '600px', color: 'var(--text-primary)', marginTop: 'var(--space-lg)' }}>{project.description}</p>
        </div>
        
        <div className={`reveal ${styles.editorialHeroMeta}`}>
          <div className={styles.metaItem}>
            <span className="t-caption">ROLE</span>
            <span className="t-body">{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className="t-caption">YEAR</span>
            <span className="t-body">{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className="t-caption">PLATFORM</span>
            <span className="t-body">{project.platform}</span>
          </div>
          <div className={styles.metaItem}>
            <span className="t-caption">TOOLS</span>
            <span className="t-body">{project.tools}</span>
          </div>
        </div>

      </header>

      {/* Project Overview */}
      <section className={`section container ${styles.overviewSection}`}>
        <div className={`reveal ${styles.overviewContent}`}>
          <h2 className="t-section">Overview</h2>
          <p className="t-body">{project.overview}</p>
        </div>
      </section>

      {/* Visual Identity */}
      <section className={`section ${styles.identitySection}`}>
        <div className="container">
          <h2 className="t-section reveal" style={{ marginBottom: 'var(--space-2xl)' }}>Visual Identity</h2>
          <div className={styles.identityGrid}>
            <div className={`reveal ${styles.colorPalette}`}>
              <div className={styles.colorSwatch} style={{ background: project.color1 }}></div>
              <div className={styles.colorSwatch} style={{ background: project.color2 }}></div>
              <div className={styles.colorSwatch} style={{ background: project.color3 }}></div>
            </div>
            <div className={`reveal ${styles.typographyCard}`}>
              <h3 className="t-subtitle">Typography</h3>
              <div className={styles.typeScale}>
                <span style={{ fontSize: '3rem', fontWeight: 600, fontFamily: project.typography === 'Playfair Display' ? '"Playfair Display", serif' : '"Nunito", sans-serif' }}>Aa</span>
                <span className="t-body"><strong>{project.typography}</strong> - {project.typographyDesc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Moments */}
      <section className="section container">
        <div className={`reveal ${styles.uiMomentsHeader}`}>
          <h2 className="t-display">DETAILS<br/>MATTER.</h2>
        </div>
        
        <div className={styles.uiMomentsGrid}>
          <div className={`reveal ${styles.uiMoment}`}>
             <div className={styles.momentCropWrapper}>
                <img src={project.feature1Image} className={styles.momentCropImgTop} alt="UI Detail 1" />
             </div>
             <p className="t-caption" style={{ marginTop: 'var(--space-sm)' }}>{project.feature1Label}</p>
          </div>
          
          <div className={`reveal ${styles.uiMoment}`}>
             <div className={styles.momentCropWrapper}>
                <img src={project.feature2Image} className={styles.momentCropImgCenter} alt="UI Detail 2" />
             </div>
             <p className="t-caption" style={{ marginTop: 'var(--space-sm)' }}>{project.feature2Label}</p>
          </div>
        </div>

        <div className={`reveal ${styles.featureRow}`} style={{ marginTop: 'var(--space-3xl)' }}>
          <div className={styles.featureText}>
            <h3 className="t-section">{project.featureRowTitle}</h3>
            <p className="t-body">{project.featureRowText}</p>
          </div>
          <div className={styles.featureImage}>
            <img src={project.featureRowImage || project.feature1Image} alt="Dashboard feature" />
          </div>
        </div>
      </section>



      {/* Next Project */}
      <section className={`section container ${styles.nextProject}`}>
        <div className="reveal">
          <span className="t-caption">Next Project</span>
          <Link to={`/project/${nextProject.id}`} className={styles.nextProjectLink}>
            <h2 className="t-hero">{nextProject.title}</h2>
            <div className={styles.nextArrow}>
              <ArrowLeft size={48} style={{ transform: 'rotate(180deg)' }} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
