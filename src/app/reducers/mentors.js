export default function mentors(state = [], action) {
  switch (action.type) {
    case 'GET_MENTORS_SAVE':
      return action.mentors;
    case 'GET_MENTOR_SAVE':
      var object = state.concat();
      object[action.mentor.id] = action.mentor;
      //console.log("reducer", object, action);
      return object;

    // initial state
    default:
      return state;
  }
}
