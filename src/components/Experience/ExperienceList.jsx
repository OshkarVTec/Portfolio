import ExperienceDetails from "./ExperienceDetails";
import { ExperienceData } from "../../data/experience";
import classes from "./ExperienceList.module.css";

function ExperienceList() {
	return (
		<ul className={classes.list}>
			{ExperienceData.map((experience) => (
				<ExperienceDetails
					key={experience.name}
					name={experience.name}
					position={experience.position}
					date={experience.date}
					bullets={experience.bullets}
					description={experience.description}
				/>
			))}
		</ul>
	);
}

export default ExperienceList;
