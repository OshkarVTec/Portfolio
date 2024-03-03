import { HiCode } from "react-icons/hi";
import { Link } from "react-scroll";

import classes from "./MainHeader.module.css";

function MainHeader() {
	return (
		<header className={classes.header}>
			<p className={classes.logo}>
				<HiCode size={25} />
				Portfolio - Oskar Villa
			</p>
			<nav>
				<Link
					smooth={true}
					spy={true}
					to="About"
					offset={-100}
					className={classes.button}
				>
					About me
				</Link>
				<Link
					smooth={true}
					spy={true}
					to="Experience"
					offset={-100}
					className={classes.button}
				>
					Experience
				</Link>
				<Link
					smooth={true}
					spy={true}
					to="Projects"
					offset={-100}
					className={classes.button}
				>
					Projects
				</Link>
				<Link
					smooth={true}
					spy={true}
					to="Skills"
					offset={-100}
					className={classes.button}
				>
					Skills
				</Link>
				<Link
					smooth={true}
					spy={true}
					to="Contact"
					offset={-100}
					className={classes.button}
				>
					Contact me
				</Link>
			</nav>
		</header>
	);
}

export default MainHeader;
