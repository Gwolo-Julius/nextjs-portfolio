export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/projects");
  const projects = await res.json();

  return { props: { projects } };
}

export default function Projects({ projects }) {
  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
