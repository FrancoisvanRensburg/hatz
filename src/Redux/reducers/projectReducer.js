import {
  GET_PROJECTS,
  GET_PROJECT,
  GET_COLUMNS,
  PROJECT_ERROR,
  COLUMN_ERROR,
  DRAG_HAPPENED,
  MOVE_TASK,
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  columns: {},
  column: null,
  tasks: [],
  task: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case GET_COLUMNS:
      return {
        ...state,
        columns: payload,
        loading: false,
      };
    case MOVE_TASK:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case DRAG_HAPPENED:
      const { destination, source, index, droppableId } = payload;

      // in the same list

      return {
        ...state,
      };
    case COLUMN_ERROR:
      return {
        ...state,
        columns: null,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        projects: [],
        project: null,
        loading: false,
      };
    default:
      return state;
  }
}
