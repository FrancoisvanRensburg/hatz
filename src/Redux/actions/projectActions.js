import axios from 'axios';

import {
  GET_PROJECTS,
  GET_PROJECT,
  GET_COLUMNS,
  PROJECT_ERROR,
  COLUMN_ERROR,
  MOVE_TASK,
} from './types';

export const getAllProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/projects');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

export const getProject = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/projects/${projectId}`
    );

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

export const getProjectColumns = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/projects/columns/${projectId}`
    );

    dispatch({
      type: GET_COLUMNS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COLUMN_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

export const moveTask = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `http://localhost:5000/api/tasks/moveTask`,
      values,
      config
    );

    dispatch({
      type: MOVE_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Frontend manipuation
export const taskMoved = () => async (dispatch) => {
  console.log('task has been moved');
};
