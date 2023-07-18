import classes from "./SkillCard.module.css";

function SkillCard({name, icon}){
   return (
      <li className={classes.card}>
         {icon}
         <h3 className={classes.name}>{name}</h3>
      </li>
   )
}

export default SkillCard;