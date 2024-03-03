import classes from "./ExperienceDetails.module.css";

function ExperienceDetails({ name, date, description, bullets, position }) {
	return (
		<li className={classes.container}>
			<div className={classes.titleContainer}>
				<h3 className={classes.title}>{position}</h3>
				<p className={classes.name}>{name}</p>
			</div>
			<p className={classes.date}>{date}</p>
			<p className={classes.description}>{description}</p>
			<ul className={classes.bullets}>
				{bullets.map((bullet) => (
					<li key={bullet}>
						<p>{bullet}</p>
					</li>
				))}
			</ul>
		</li>
	);
}

export default ExperienceDetails;
