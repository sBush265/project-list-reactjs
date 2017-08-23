import { SET_PROJECT } from '../constants';

export function setProjects(projects) {
  const action = {
    type: SET_PROJECT,
    projects
  }
  return action;
}
