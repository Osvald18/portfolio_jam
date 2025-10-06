export default function Section({ id, title, content, projects }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {projects ? (
        <div className="projects">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank">
                View Project
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="section-content">{content}</div>
      )}
    </section>
  );
}
