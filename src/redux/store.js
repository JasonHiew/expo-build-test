import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { org, repos, repoDetails, searchRepos } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  org: org,
  repos: repos,
  repoDetails: repoDetails,
  searchRepos: searchRepos,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
