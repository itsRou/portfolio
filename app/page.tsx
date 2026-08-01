import Image from "next/image";
import {
  profile,
  education,
  experience,
  skills,
  projects,
  certificates,
  volunteering,
} from "./data";

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-photo">
            <Image
              src="https://raw.githubusercontent.com/itsRou/portfolio/master/public/photo.jpeg"
              alt={profile.name}
              width={220}
              height={220}
              priority
              unoptimized
              className="photo"
            />
          </div>
          <div className="hero-text">
            <p className="eyebrow">Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.title}</p>
            <p className="location">{profile.location}</p>
            <p className="summary">{profile.summary}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a
                className="btn btn-outline"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-outline"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="subnav">
        <div className="container subnav-inner">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#volunteering">Volunteering</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="section" id="about">
          <div className="container">
            <h2>About</h2>
            <div className="card">
              <p>{profile.summary}</p>
              <div className="edu-row">
                <div>
                  <strong>{education.degree}</strong>
                  <p>{education.school}</p>
                </div>
                <div className="edu-meta">
                  <span>{education.grade}</span>
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <div className="container">
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.role} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-head">
                      <h3>{item.role}</h3>
                      <span className="period">{item.period}</span>
                    </div>
                    <p className="org">{item.org}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <h2>Project Highlights</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    <span className="period">{project.period}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.category} className="skill-card">
                  <h3>{group.category}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt">Certificates</h2>
            <ul className="cert-list">
              {certificates.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="volunteering">
          <div className="container">
            <h2>Volunteering & Leadership</h2>
            <div className="volunteer-grid">
              {volunteering.map((v) => (
                <div key={v.org + v.role} className="volunteer-card">
                  <h3>{v.org}</h3>
                  <p className="org">{v.role}</p>
                  <span className="period">{v.period}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container contact-inner">
            <h2>Let&apos;s work together</h2>
            <p>
              I&apos;m open to opportunities in data science, machine
              learning, and software engineering. The fastest way to reach me
              is email.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a
                className="btn btn-outline"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-outline"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            deployed on Vercel.
          </p>
        </div>
      </footer>
    </>
  );
}
