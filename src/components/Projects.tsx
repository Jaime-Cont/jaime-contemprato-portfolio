import ProjectComponent from "./ProjectComponent";

function Projects() {
  return (
    <>
      <div className="project-div" id="Projects">
        <h1 className="danfo-font header-text">My Projects</h1>
        <ProjectComponent
          image="https://raw.githubusercontent.com/Jaime-Cont/responsive-age-calculator/refs/heads/main/screenshots/Desktop_Output.PNG"
          title="Responsive Age Calculator"
          description="A Responsive Age Calculator made using HTML, CSS and JavaScript"
          link="https://jaime-cont.github.io/responsive-age-calculator/"
        />
        <ProjectComponent
          image="https://raw.githubusercontent.com/Jaime-Cont/space-tourism-website/refs/heads/main/screenshots/Homepage_Desktop.PNG"
          title="Space Tourism Website"
          description="A Multi-page Space Tourism Website made using HTML, CSS and JavaScript"
          link="https://jaime-cont.github.io/space-tourism-website/"
        />
      </div>
      <hr></hr>
    </>
  );
}

export default Projects;
