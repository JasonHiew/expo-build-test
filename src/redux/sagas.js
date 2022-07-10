import { call, put, takeLatest, select, takeEvery } from "redux-saga/effects";
import * as constants from "../constants/constants";
import * as actions from "../redux/actions";
import { getData } from "../services/services";
import {
  BATCH_SIZE,
  MAX_CATALOGUE_LENGTH,
  ORGANIZATION,
} from "../constants/constants";

// fetchOrgSaga: Fetch the organisation's details

function* fetchOrgSaga({ type }) {
  try {
    const org = yield call(
      getData,
      `https://api.github.com/orgs/${ORGANIZATION}`
    );

    if (type === constants.GET_ORG) {
      yield put(actions.getOrgSuccess(org));
    }
  } catch (error) {
    if (type === constants.GET_ORG) {
      yield put(actions.getOrgFailure());
    }
  }
}

// fetchSpecificRepoSaga: Fetch a specific organization's details

function* fetchSpecificRepoSaga({ type }) {
  try {
    const { name } = yield select((state) => state.repoDetails);
    const repoDetails = yield call(
      getData,
      `https://api.github.com/repos/${ORGANIZATION}/${name}`
    );

    if (type === constants.GET_SPECIFIC_REPO) {
      yield put(actions.getSpecificRepoSuccess(repoDetails));
      //   yield put(push(`/details/${name}`)); //Redirects to the repo details page after fetching the repo details
    }
  } catch (error) {
    if (type === constants.GET_SPECIFIC_REPO) {
      yield put(actions.getSpecificRepoFailure());
    }
  }
}

// fetchReposSaga: Fetch all the organisation's repos
// getNextReposBatch: Fetch the next batch of repos

function* fetchReposSaga({ type }) {
  try {
    const { currentPage, isEndOfCatalogue } = yield select(
      (state) => state.repos
    );

    if (isEndOfCatalogue) {
      const itemsReminder = MAX_CATALOGUE_LENGTH % BATCH_SIZE;
      if (itemsReminder === 0) {
        return;
      }

      const repos = yield call(
        getData,
        `https://api.github.com/orgs/${ORGANIZATION}/repos?per_page=${BATCH_SIZE}&page=${currentPage}`
      );

      yield put(actions.getReposSuccess(repos));
    }

    const repos = yield call(
      getData,
      `https://api.github.com/orgs/${ORGANIZATION}/repos?per_page=${BATCH_SIZE}&page=${currentPage}`
    );

    if (type === constants.GET_REPOS) {
      yield put(actions.getReposSuccess(repos));
    } else {
      yield put(actions.getNextReposBatchSuccess(repos));
    }

    if (type === constants.GET_REPOS) {
      yield put(actions.getNextReposBatch());
    }
  } catch (error) {
    if (type === constants.GET_REPOS) {
      yield put(actions.getReposFailure());
    } else {
      yield put(actions.getNextReposBatchFailure());
    }
  }
}

// searchRepoSaga: Search for a specific repository by name

function* searchRepoSaga({ type }) {
  try {
    const { searchedName } = yield select((state) => state.searchRepos);

    const repos = yield call(
      getData,
      `https://api.github.com/search/repositories?q=${searchedName}+in:name+org:${ORGANIZATION}`
    );

    if (type === constants.SEARCH_REPO) {
      yield put(actions.searchRepoSuccess(repos));
    }
  } catch (error) {
    if (type === constants.SEARCH_REPO) {
      yield put(actions.searchRepoFailure());
    }
  }
}

// clearSearchRepoSaga: Clear the search results

function* clearSearchRepoSaga({ type }) {
  try {
    if (type === constants.CLEAR_SEARCH_REPO) {
      yield put(actions.clearSearchRepoSuccess());
    }
  } catch (error) {
    if (type === constants.CLEAR_SEARCH_REPO) {
      yield put(actions.clearSearchRepoFailure());
    }
  }
}

// rootSaga: Root saga

export default function* rootSaga() {
  yield takeLatest(constants.GET_ORG, fetchOrgSaga);
  yield takeLatest(constants.GET_SPECIFIC_REPO, fetchSpecificRepoSaga);
  yield takeEvery(
    [constants.GET_REPOS, constants.GET_NEXT_REPOS_BATCH],
    fetchReposSaga
  );
  yield takeEvery(constants.SEARCH_REPO, searchRepoSaga);
  yield takeEvery(constants.CLEAR_SEARCH_REPO, clearSearchRepoSaga);
}
