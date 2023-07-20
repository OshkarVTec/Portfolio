import { Link } from "react-router-dom";

import classes from "./Project.module.css";

function Project({ id, title, image }) {
  return (
    <div className={classes.card}>
      <Link to={`project/${id}`}>
        <img src={image} className={classes.photo} />
        <h3 className={classes.title}>{title}</h3>
      </Link>
    </div>
  );
}

export default Project;
