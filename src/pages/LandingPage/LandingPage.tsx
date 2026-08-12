import { useReveal } from '../../hooks/useReveal';
import { ArrowUpRight, ArrowDownToLine, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ResumeTemplate } from '../../components/ResumeTemplate/ResumeTemplate';

export function LandingPage() {
  useReveal();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!resumeRef.current || isGenerating) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(resumeRef.current, { 
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('Afolabi_Emmanuel_Resume.pdf');
    } catch (err) {
      console.error('Error generating PDF', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const featuredProjects = projects.slice(0, 2);

  const skills = [
    'UI/UX Design', 'Design Engineering', 'Mobile App Design', 'SaaS Interfaces',
    'HTML / CSS / JavaScript', 'React Native', 'Figma', 'Prototyping'
  ];

  const experience = [
    {
      title: 'Project Management Intern',
      company: 'International Energy Services Limited (IESL)',
      year: '2025',
      description: 'Worked within the Project Management & Project Controls team, supporting the planning and execution of engineering projects. Assisted with project scheduling, progress tracking, documentation, and reporting while collaborating with multidisciplinary teams to ensure project milestones were met.'
    },
    {
      title: 'IT Support Intern',
      company: 'International Energy Services Limited (IESL)',
      year: '2025',
      description: 'Provided technical support across the organization by troubleshooting hardware, software, and network-related issues. Assisted with system maintenance, user account management, printer and workstation setup, and general IT operations.'
    },
    {
      title: 'Founder & Product Designer',
      company: 'UniFlow',
      year: '2025 – Present',
      description: 'Leading the design and product vision for UniFlow, an AI-powered productivity platform built to help university students organize their academic lives. Responsible for product strategy, user interface design, design systems, and prototyping.'
    },
    {
      title: 'Concept Designer',
      company: 'Yetify',
      year: '2025',
      description: 'Created a comprehensive concept design for the product direction, branding, and user interface of Yetify, focusing on delivering a modern, intuitive, and visually polished digital experience.'
    },
    {
      title: 'Independent UI Designer',
      company: 'Freelance',
      year: '2024 – Present',
      description: 'Designed interfaces for personal projects and product concepts across mobile and web platforms. Focused on creating scalable design systems, responsive layouts, modern SaaS interfaces, and polished mobile applications.'
    },
    {
      title: 'B.Sc. Management Information Systems',
      company: 'Covenant University',
      year: '2022 – 2026',
      description: 'Studied Management Information Systems with a focus on technology, information systems, and digital product development. Combined academic knowledge with practical experience in UI design and software development.'
    }
  ];

  return (
    <div className={styles.landing}>
      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextRow}>
              <h1 className={`t-display ${styles.heroTitle} fade-in-up`}>I DESIGN<br/>DIGITAL<br/>EXPERIENCES.</h1>
            </div>
            <div className={`${styles.heroMetaRow} fade-in-up`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.heroDescription}>
                <p className="t-body" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  A visionary design engineer from Nigeria, focusing on mobile products, AI interfaces, and digital experiences that blend artistry with functional innovation.
                </p>
              </div>
              <div className={styles.heroTags}>
                <p className="t-caption">DESIGN ENGINEERING / AI / MOBILE / SAAS</p>
                <p className="t-caption">BASED IN NIGERIA &mdash; AVAILABLE WORLDWIDE</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.heroProfile} fade-in-up`} style={{ animationDelay: '0.3s' }}>
            <img src="/profilepic.png" alt="Afolabi" className={styles.profileImage} />
          </div>
        </div>
        
        <div className={`${styles.heroVisual} fade-in-up`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.heroComposition}>
            <img src="/Onboarding Page 1-portrait.png" alt="UniFlow Onboarding" className={`${styles.compImage} ${styles.compFarLeft}`} />
            <img src="/Plans-portrait.png" alt="UniFlow Plans" className={`${styles.compImage} ${styles.compFarRight}`} />
            
            <img src="/home w ruby.png" alt="UniFlow Home" className={`${styles.compImage} ${styles.compMain}`} />
            <img src="/Notes-portrait.png" alt="UniFlow Notes" className={`${styles.compImage} ${styles.compLeft}`} />
            <img src="/Task Overview-portrait.png" alt="UniFlow Tasks" className={`${styles.compImage} ${styles.compRight}`} />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className={`section container ${styles.projectsSection}`}>
        <div className={`reveal ${styles.sectionBreak}`}>
          <h2 className="t-display">THINGS<br/>I'VE BEEN<br/>BUILDING.</h2>
        </div>
        
        <div className={styles.projectList}>
          {featuredProjects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} className={`reveal ${styles.editorialProjectCard}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className={styles.editorialProjectMeta}>
                <span className="t-caption">0{index + 1} / {project.title}</span>
                <p className="t-subtitle" style={{ color: 'var(--text-primary)', marginTop: 'var(--space-md)' }}>{project.description}</p>
                <span className="t-caption" style={{ marginTop: 'var(--space-lg)', display: 'block' }}>{project.category} / {project.year}</span>
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

        <div className="reveal" style={{ marginTop: 'var(--space-3xl)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/projects" className={styles.viewAllBtn}>
            <span className="t-subtitle">VIEW ALL PROJECTS</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className={`section container ${styles.aboutSection}`}>
        <div className={styles.aboutWrapper}>
          <div className={`reveal ${styles.aboutText}`}>
            <h2 className="t-display" style={{ marginBottom: 'var(--space-2xl)' }}>A LITTLE<br/>ABOUT ME.</h2>
            <div className={styles.aboutContentRow}>
              <div className={styles.aboutParagraphs}>
                <p className="t-subtitle" style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>
                  I design interfaces that balance simplicity, emotion, and functionality.
                </p>
                <p className="t-body" style={{ marginBottom: 'var(--space-md)' }}>
                  I specialize in designing modern mobile apps, SaaS platforms, and AI-driven products. My approach focuses on thoughtful visual systems, consistent design languages, and interfaces that feel effortless to use.
                </p>
                <p className="t-body" style={{ marginBottom: 'var(--space-lg)' }}>
                  From establishing design systems to refining the smallest interaction, I enjoy transforming complex ideas into elegant, user-friendly experiences. Currently completing my BSc in Management Information System at Covenant University.
                </p>
                <div className={`reveal ${styles.resumeAction}`}>
                  <a href="#" onClick={handleDownloadResume} className={styles.downloadBtn}>
                    <ArrowDownToLine size={20} /> {isGenerating ? 'Generating PDF...' : 'Download Resume'}
                  </a>
                </div>
              </div>

              <div className={styles.skillsWrapper}>
                <h3 className="t-subtitle" style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>CURRENTLY INTO</h3>
                <div className={styles.skillsContainer}>
                  {skills.map((skill, i) => (
                    <div key={i} className={styles.skillEditorial}>{skill}</div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="t-section reveal" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>EXPERIENCE</h3>
            <div className={styles.editorialTimeline}>
              {experience.map((item, i) => (
                <div key={i} className={`reveal ${styles.editorialTimelineItem}`}>
                  <div className={styles.editorialTimelineHeader}>
                    <h4 className="t-subtitle" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <span className="t-body" style={{ fontWeight: 500 }}>{item.year}</span>
                  </div>
                  <div className={styles.editorialTimelineBody}>
                    <span className="t-caption" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>{item.company}</span>
                    <p className="t-body" style={{ maxWidth: '600px' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container reveal" style={{ textAlign: 'left' }}>
          <h2 className="t-display" style={{ marginBottom: 'var(--space-2xl)' }}>LET'S MAKE<br/>SOMETHING<br/>BEAUTIFUL.</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
            <p className="t-subtitle">Have a project in mind?</p>
            <a href="mailto:afolabiolufemi@icloud.com" className="t-subtitle" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)' }}>Let's talk &rarr;</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerLinks}>
            <a href="#work" className="t-caption">Work</a>
            <a href="#about" className="t-caption">About</a>
            <a href="mailto:afolabiolufemi@icloud.com" className="t-caption">Email</a>
          </div>
          <div className="t-caption">&copy; {new Date().getFullYear()} Afolabi Emmanuel. All rights reserved.</div>
        </div>
      </footer>

      {/* Hidden Resume Component for PDF Generation */}
      <div style={{ position: 'absolute', top: '-10000px', left: '-10000px', zIndex: -100 }}>
        <ResumeTemplate ref={resumeRef} />
      </div>
    </div>
  );
}
