interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

function ProjectComponent({ image, title, description, link }: ProjectProps) {
  return (
    <>
      <div className="project-component-div">
        <img src={image} className="projectImage"></img>
        <div className="project-component-text-div">
          <h1 className="danfo-font project-title">{title}</h1>
          <p className="open-sans-font project-desc">{description}</p>
          <a href={link} target="_blank" className="open-sans-font project-btn">
            Check it out here
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectComponent;
