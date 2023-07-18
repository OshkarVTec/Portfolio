import classes from "./SkillList.module.css";
import SkillCard from "./SkillCard.jsx";
import { SkillsData } from "../../data/skills.jsx";

function SkillList() {
  return (
    <ul className={classes.list}>
      {SkillsData.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </ul>
  );
}

export default SkillList;
