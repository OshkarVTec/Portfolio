import {Link} from "react-router-dom"
import classes from "./NotFound.module.css"
function NotFound() {
  return (
    <main>
      <h1 className={classes.title}>The page you were looking for doesn't exist</h1>
      <p className={classes.text}>404 Not Found</p>
      <Link to="/" className={classes.btn}>
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
