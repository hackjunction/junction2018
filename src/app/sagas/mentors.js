import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getAllMentors() {
  const mentors = yield call(ApiPosts.getMentors);
  // save the challenges in state
  yield put({
    type: 'GET_MENTORS_SAVE',
    mentors: mentors.data
  });
}
export function* getMentor(action) {
  const mentor = yield call(ApiPosts.getMentor, action.id);
  yield put({
    type: 'GET_MENTOR_SAVE',
    mentor: mentor.data
  });
}
