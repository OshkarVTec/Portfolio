import { Outlet } from "react-router-dom";

import ProjectList from "../components/Projects/ProjectList";
import SkillList from "../components/Skills/SkillList";
import classes from "./Content.module.css";

function Content() {
  return (
    <>
      <Outlet />
      <main>
        <section id="Projects">
          <h2>My projects</h2>
          <ProjectList />
        </section>
        <section id="Skills">
          <h2>My skills</h2>
          <SkillList />
        </section>
      </main>
    </>
  );
}

export default Content;
