import classes from "./ContactList.module.css"
import {SocialData} from "../../data/social.jsx"

function Contact(){
   return(
      <ul className={classes.list}>
         {SocialData.map((social) => (
        <li key={social.name}>
            <a href={social.link}>{social.icon}</a>
            <h3>{social.platform}</h3>
        </li>
      ))}
      </ul>
   );
}

export default Contact;