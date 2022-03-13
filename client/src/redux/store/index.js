import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const middleware = [thunk];
let composeEnhancers;
if (process.env.NODE_ENV === "production") {
	composeEnhancers = compose;
} else {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
const initialState = {}

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware)),
);

export default store