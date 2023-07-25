import { Outlet } from "react-router-dom";

import ProjectList from "../components/Projects/ProjectList";
import SkillList from "../components/Skills/SkillList";
import About from "../components/About/About.jsx";
import ContactList from "../components/Contact/ContactList.jsx";
import classes from "./Content.module.css";

function Content() {
  return (
    <>
      <Outlet />
      <main>
        <section id="About" className={classes.about}>
          <About />
        </section>
        <section id="Projects">
          <h2>My projects</h2>
          <ProjectList />
        </section>
        <section id="Skills">
          <h2>My skills</h2>
          <SkillList />
        </section>
        <section id="Contact">
          <h2>Contact</h2>
          <ContactList />
        </section>
      </main>
    </>
  );
}

export default Content;
