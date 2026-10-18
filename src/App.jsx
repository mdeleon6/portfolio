import { profile, projects, experience } from "./data.js";
import "./App.css";

function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p className="question">{project.question}</p>
      <p>{project.answer}</p>
      {project.highlights.length > 0 && (
        <ul>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="tags">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="links">
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live app</a>}
        <a href={project.code} target="_blank" rel="noreferrer">Code &amp; write-up</a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p>{profile.intro}</p>
        <nav className="links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </nav>
      </header>

      <section>
        <h2>Projects</h2>
        <p className="muted">Each one starts with a question and answers it.</p>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </section>

      <section>
        <h2>Skills map</h2>
        <p>
          An interactive map of my data analytics and AI engineering skills, where every score links to
          the project that proves it.
        </p>
        <a className="button" href={profile.links.skillsMap} target="_blank" rel="noreferrer">
          Open the skills map
        </a>
      </section>

      <section>
        <h2>Experience</h2>
        <ul className="timeline">
          {experience.map((e) => (
            <li key={e.role + e.org}>
              <strong>{e.role}</strong>, {e.org} <span className="muted">· {e.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="muted">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}