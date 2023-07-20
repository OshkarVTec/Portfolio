import Modal from "../components/Projects/Modal";
import { useParams } from "react-router-dom";

import { ProjectData } from "../data/projects.js";
import classes from "./ProjectDetails.module.css";

function ProjectDetails() {
  const routeId = useParams().projectId;
  const project = ProjectData.filter((currProject) => {
    return currProject.id == routeId;
  })[0];
  console.log(project);
  return (
    <Modal>
      <main className={classes.details}>
        <h1 className={classes.title}>{project.title}</h1>
        <div className={classes.imageContainer}>
          <img className={classes.photo} src={project.image} />u
        </div>
        <p className={classes.body}>{project.body}</p>
      </main>
    </Modal>
  );
}

export default ProjectDetails;
