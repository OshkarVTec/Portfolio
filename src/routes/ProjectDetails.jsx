import { useParams, Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiFillGithub } from "react-icons/ai";

import Modal from "../components/Projects/Modal";
import { ProjectData } from "../data/projects.js";
import classes from "./ProjectDetails.module.css";

function ProjectDetails() {
  const routeId = useParams().projectId;
  const project = ProjectData.filter((currProject) => {
    return currProject.id == routeId;
  })[0];
  if (project) {
    return (
      <Modal>
        <main className={classes.details}>
          <div className={classes.titleContainer}>
            <h1 className={classes.title}>{project.title}</h1>
            <div>
              <Link to=".." >
                <AiOutlineCloseCircle color="#333333" size="30" />
              </Link>
            </div>
          </div>
          <div className={classes.centeredContainer}>
            <img className={classes.photo} src={project.image} />
          </div>
          <p className={classes.body}>{project.body}</p>
          <h2>Tags</h2>
          <ul className={classes.list}>
            {project.tags.map((tag) => (
              <li className={classes.tag}>{tag}</li>
            ))}
          </ul>
          <div className={classes.linkContainer}>
            <h2>Link to project</h2>
            <div className={classes.centeredContainer}>
              <a href={project.github} className={classes.link}>
                <AiFillGithub size="50" />
              </a>
            </div>
          </div>
        </main>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <main className={classes.details}>
          <h2>Could not find project</h2>
          <p className={classes.body}>Unfortunately, the requested project could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
}
export default ProjectDetails;
