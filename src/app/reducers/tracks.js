export default function tracks(state = [], action) {
  switch (action.type) {
    case 'GET_TRACKS_SAVE':
      return action.tracks;
    case 'TRACK_TOGGLE':
      console.log('reducer', action);
      state = state.map(track => {
        if (track.slug !== action.slug) {
          return Object.assign({}, track);
        } else {
          var obj = Object.assign({}, track);
          obj.open = !obj.open;
          return obj;
        }
      });
      console.log('state:', state);
      return state;

    // initial state
    default:
      return state;
  }
}
