import { Outlet } from "react-router-dom";

import ProjectList from "../components/Projects/ProjectList";
import classes from "./Content.module.css";

function Content() {
  return (
    <>
      <Outlet />
      <main>
        <section>
          <h2>My projects</h2>
          <ProjectList />
        </section>
        <section>
          <h2>My skills</h2>
        </section>
      </main>
    </>
  );
}

export default Content;
