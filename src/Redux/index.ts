  
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import ObjectiveInfoReducer from './ObjectiveInfoReducer';

const rootReducer = combineReducers({
  ObjectiveInfoReducer: ObjectiveInfoReducer,
});

export const store = createStore(rootReducer);