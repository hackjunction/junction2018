import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { posts, mediumPosts } from './posts';
import challenges from './challenges';
import calendarEvents from './calendarEvents';
import tracks from './tracks';
import events from './events';
import jobs from './jobs';
import faqs from './faqs';
import partners from './partners';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts: posts,
  mediumPosts: mediumPosts,
  challenges: challenges,
  tracks: tracks,
  events: events,
  jobs: jobs,
  faqs: faqs,
  partners: partners,
  calendarEvents: calendarEvents
});

export default reducers;
