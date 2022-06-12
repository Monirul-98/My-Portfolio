import Project from "../Project/Project";
import projects from "../../../projects";
import "./ProjectList.css";

const ProjectList = () => {
  return (
    <div className="pl bg-[#0a192f] text-[#64ffda]">
      <div className="pl-texts">
        <h1 className="text-4xl ">My Projects</h1>
        <p className="pl-desc">
          Some of my best projects. I'm still working on this projects to
          improve more.{" "}
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
