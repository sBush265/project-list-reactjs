import { SET_PROJECT } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_PROJECT:
      const { projects } = action;
      return projects;
    default:
      return state;
  }
}
