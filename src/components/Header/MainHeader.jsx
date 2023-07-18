import { HiCode } from 'react-icons/hi';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <HiCode size={25}/>
        Portfolio - Oskar Villa
      </h1>
      <nav>
        <a to="" className={classes.button} >
          Projects
        </a>
        <a to="" className={classes.button} >
          Skills
        </a>
        <a to="" className={classes.button} >
          About me
        </a>
        <a to="" className={classes.button} >
          Contact me
        </a>
      </nav>
    </header>
  );
}

export default MainHeader;
