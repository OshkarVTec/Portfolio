import { Outlet } from 'react-router-dom';

import ProjectList from '../components/ProjectList';

function Content() {
  return (
    <>
      <Outlet />
      <main>
        <ProjectList />
      </main>
    </>
  );
}

export default Content;