
import './App.css'

const projects = [
  {
    number: '01',
    name: 'Tunely',
    category: 'NATURAL LANGUAGE PROCESSING',
    description:
      'A lyrics-based music recommendation application that uses TF-IDF vectorisation and cosine similarity to recommend songs with similar lyrics.',
    tools: ['Python', 'Streamlit', 'NLTK', 'scikit-learn'],
    status: 'Built',
    github: 'https://github.com/Sharon244/Tunely',
  },
  {
    number: '02',
    name: 'Movie Recommendation System',
    category: 'MACHINE LEARNING',
    description:
      'A recommendation system exploring content-based, collaborative and hybrid approaches to suggest films using movie information and ratings.',
    tools: ['Python', 'Pandas', 'scikit-learn'],
    status: 'Built',
    github: 'https://github.com/Sharon244',
  },
  {
    number: '03',
    name: 'Generative Adversarial Network',
    category: 'GENERATIVE AI',
    description:
      'Trained and evaluated a GAN using a downloaded dataset to explore synthetic data generation and adversarial learning.',
    tools: ['Python', 'Deep Learning', 'GANs'],
    status: 'Built',
    github: 'https://github.com/Sharon244',
  },
  {
    number: '04',
    name: 'AI Housing Platform',
    category: 'AI PRODUCT DEVELOPMENT',
    description:
      'An in-development platform concept focused on helping people discover housing that better matches their needs.',
    tools: ['AI', 'Web Development', 'Product Design'],
    status: 'In development',
    github: 'https://github.com/Sharon244',
  },
  {
    number: '05',
    name: 'AI Financial Advisor',
    category: 'FULL-STACK & AI',
    description:
      'An in-development financial application concept exploring transaction categorisation, budgeting insights and an AI assistant grounded in financial data.',
    tools: ['React', 'TypeScript', 'Node.js', 'SQLite'],
    status: 'In development',
    github: 'https://github.com/Sharon244',
  },
]

const skillGroups = [
  {
    title: 'Programming languages',
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'HTML', 'CSS'],
  },
  {
    title: 'Data & artificial intelligence',
    skills: [
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Natural Language Processing',
      'Machine Learning',
      'Recommendation Systems',
    ],
  },
  {
    title: 'Development & tools',
    skills: [
      'React',
      'Streamlit',
      'Git',
      'GitHub',
      'SQL',
      'Jupyter Notebook',
    ],
  },
]

function SectionHeading({ number, label, title, accent }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} / {label}
      </p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </div>
  )
}

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a className="logo" href="#home" aria-label="Sharon Ayanbeku home">
          SA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              COMPUTER SCIENCE × ARTIFICIAL INTELLIGENCE
            </p>

            <h1>
              Hi, I&apos;m <span>Sharon Ayanbeku.</span>
            </h1>

            <p className="hero-description">
              A Computer Science with Artificial Intelligence student at the
              University of York, passionate about building intelligent
              software and meaningful digital experiences.
            </p>

            <div className="actions">
              <a className="primary-btn" href="#projects">
                Explore my work ↗
              </a>

              <a className="secondary-btn" href="#contact">
                Get in touch
              </a>

              <a
                className="secondary-btn"
                href="/Sharon-Ayanbeku-CV.pdf"
                download="Sharon-Ayanbeku-CV.pdf"
              >
                Download CV ↓
              </a>
            </div>

            <p className="hero-location">
              Based in London, United Kingdom
            </p>
          </div>

          <div className="hero-art">
            <div className="profile-card">
              <div className="profile-icon">SA</div>

              <p className="profile-label">CURRENT FOCUS</p>

              <h3>Building with intelligence.</h3>

              <div className="profile-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>React</span>
                <span>NLP</span>
              </div>

              <div className="profile-footer">
                <span className="status-dot" />
                Seeking technology internship opportunities
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <SectionHeading
            number="01"
            label="ABOUT ME"
            title="Curious mind."
            accent="Creative solutions."
          />

          <p className="section-intro">
            I&apos;m a second-year Computer Science with Artificial
            Intelligence student at the University of York. I enjoy exploring
            how software, data and AI can be used to solve real-world problems.
            Through academic work and independent projects, I&apos;ve explored
            recommendation algorithms, natural language processing and
            generative AI.
          </p>

          <div className="info-grid">
            <article className="panel">
              <p className="panel-label">EDUCATION</p>
              <h3>University of York</h3>
              <p>BSc Computer Science with Artificial Intelligence</p>
              <p className="muted">2025–2028 · Expected graduation</p>
            </article>

            <article className="panel">
              <p className="panel-label">AREAS OF INTEREST</p>
              <h3>Technology with purpose</h3>
              <p>
                Software engineering, machine learning, data science,
                intelligent applications and user-centred technology.
              </p>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <SectionHeading
            number="02"
            label="SELECTED WORK"
            title="Projects I&apos;ve"
            accent="worked on."
          />

          <p className="section-intro">
            A selection of projects where I&apos;ve applied programming,
            analytical thinking and AI concepts. Projects marked
            &quot;In development&quot; are still being developed.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>

                  <span
                    className={
                      project.status === 'Built'
                        ? 'status'
                        : 'status status-progress'
                    }
                  >
                    {project.status}
                  </span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tags">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>

          <a
            className="text-link"
            href="https://github.com/Sharon244"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub profile ↗
          </a>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionHeading
            number="03"
            label="TECHNICAL SKILLS"
            title="My"
            accent="toolkit."
          />

          <div className="info-grid">
            {skillGroups.map((group) => (
              <article className="panel" key={group.title}>
                <h3>{group.title}</h3>

                <div className="tags skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionHeading
            number="04"
            label="EXPERIENCE"
            title="Beyond"
            accent="the code."
          />

          <div className="timeline">
            <article className="timeline-item">
              <h3>Student Ambassador</h3>
              <p className="muted">
                University of York · September 2025–Present
              </p>
              <p>
                Support university open days and speak with prospective
                students about university life and studying Computer Science.
                Participate in project exhibitions.
              </p>
            </article>

            <article className="timeline-item">
              <h3>Remote AI Task Contributor</h3>
              <p className="muted">Outlier &amp; Mercor · Current</p>
              <p>
                Undertake remote AI-related tasks, following task-specific
                instructions and applying attention to detail.
              </p>
            </article>

            <article className="timeline-item">
              <h3>Sales Assistant</h3>
              <p className="muted">Zara · September 2026–Present</p>
              <p>
                Support customers and daily store operations while developing
                communication, teamwork and prioritisation skills.
              </p>
            </article>

            <article className="timeline-item">
              <h3>Sales Assistant</h3>
              <p className="muted">
                Pull &amp; Bear · October 2024–September 2026
              </p>
              <p>
                Worked across the shop floor, fitting room, self-checkout,
                tills, stockroom and delivery operations.
              </p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>
            Let&apos;s build <span>something meaningful.</span>
          </h2>

          <p>
            I&apos;m interested in technology internships, collaborative
            projects and opportunities to keep learning and growing in tech.
          </p>

          <a
            className="primary-btn"
            href="mailto:ifeoluwaayanbeku@gmail.com"
          >
            Email me ↗
          </a>

          <div className="contact-details">
            <a href="mailto:ifeoluwaayanbeku@gmail.com">
              ifeoluwaayanbeku@gmail.com
            </a>

            <a href="tel:+447542993093">
              07542 993093
            </a>

            <span>London, United Kingdom</span>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/Sharon244"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sharon-ayanbeku-b22793325"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sharon Ayanbeku</span>
        <span>Designed &amp; built with React</span>
      </footer>
    </div>
  )
}

export default App
