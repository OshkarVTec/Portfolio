import classes from "./About.module.css";

function About() {
	return (
		<section className={classes.container}>
			<h1 className={classes.title}>Welcome to my portfolio!</h1>
			<div className={classes.text}>
				<p>
					I am Oskar, a Computer Science student who loves challenges and always
					gives a 100% effort in my projects.
				</p>
				<p>
					This portfolio showcases my passion for innovation and
					problem-solving. You will find different projects involving hardware
					and software, using different technologies and approaches.
				</p>
				<p>Thank you for visiting, I hope you like my work!</p>
			</div>
		</section>
	);
}

export default About;
