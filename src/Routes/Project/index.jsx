import React, { useEffect } from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProjects } from '../../Redux/actions/projectActions';

import CreateProject from './CreateProject';
import Columns from './Board/Column';

const Project = () => {
  const dispatch = useDispatch();
  let match = useRouteMatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);
  const projects = useSelector((store) => store.project.projects);
  return (
    <div>
      <h1>This is the project route</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {projects.map((project) => (
          <div
            style={{
              width: '150px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid red',
            }}
            key={project._id}
          >
            <Link to={`${match.url}/${project._id}`}>
              {project.projectname}
            </Link>
          </div>
        ))}
        <CreateProject />
      </div>
      <Switch>
        <Route exact path={`${match.url}/:projectId`}>
          {/* <ProjectBoard /> */}
          <Columns />
        </Route>
      </Switch>
    </div>
  );
};

export default Project;
