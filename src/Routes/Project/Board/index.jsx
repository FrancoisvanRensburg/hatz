import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProject } from '../../../Redux/actions/projectActions';

import Board from './Board';

const ProjectBoard = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(projectId));
  }, [dispatch]);
  const project = useSelector((store) => store.project.project);

  return (
    <div>
      <h1>{project === null ? 'Loading...' : project.projectname}</h1>
      {project !== null && <Board data={project.columns} project={project} />}
    </div>
  );
};

export default ProjectBoard;
