import { Link } from "react-router-dom";

import classes from "./Project.module.css";

function Post({ id, title, image }) {
  return (
    <div className={classes.card} background-image={image}>
      <Link to={id}>
        <img src={image} className={classes.photo} />
        <h3 className={classes.title}>{title}</h3>
      </Link>
    </div>
  );
}

export default Post;
