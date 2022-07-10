import * as actions from "../constants/constants";
// Fetch an organization's details.

/**
 * Get organization.
 *
 * @returns {Object} action
 */
export const getOrg = () => {
  return {
    type: actions.GET_ORG,
  };
};

/**
 *  Organization successfully received.
 *
 * @param {Object} org
 * @returns {Object} action
 */
export const getOrgSuccess = (org) => {
  return {
    type: actions.GET_ORG_SUCCESS,
    org,
  };
};

/**
 * Failed to get organization.
 *
 * @param {Object} errors
 * @returns {Object} action
 */
export const getOrgFailure = (errors) => {
  return {
    type: actions.GET_ORG_FAILURE,
    errors,
  };
};

// Fetch all repos for the organization.

/**
 * Get Repos.
 *
 * @returns {Object} action
 */
export const getRepos = () => {
  return {
    type: actions.GET_REPOS,
  };
};

/**
 *  Repos successfully received.
 *
 * @param {Object} repos
 * @returns {Object} action
 */
export const getReposSuccess = (repos) => {
  return {
    type: actions.GET_REPOS_SUCCESS,
    repos,
  };
};

/**
 * Failed to get repos.
 *
 * @param {Object} errors
 * @returns {Object} action
 */
export const getReposFailure = (errors) => {
  return {
    type: actions.GET_REPOS_FAILURE,
    errors,
  };
};

/**
 * Get Next Repos batch.
 *
 * @returns {Object} action
 */
export const getNextReposBatch = () => {
  return {
    type: actions.GET_NEXT_REPOS_BATCH,
  };
};

/**
 *  Next batch of Repos successfully received.
 *
 * @param {Object} repos
 * @returns {Object} action
 */
export const getNextReposBatchSuccess = (repos) => {
  return {
    type: actions.GET_NEXT_REPOS_BATCH_SUCCESS,
    repos,
  };
};

/**
 * Failed to get next repos batch.
 *
 * @param {Object} errors
 * @returns {Object} action
 */
export const getNextReposBatchFailure = (errors) => {
  return {
    type: actions.GET_NEXT_REPOS_BATCH_FAILURE,
    errors,
  };
};

/**
 * Add next items batch to items state.
 *
 * @returns {Object} action
 */
export const addNextReposBatch = () => {
  return {
    type: actions.ADD_NEXT_REPOS_BATCH,
  };
};

// Fetch only one repo.

/**
 * Get a specific repo.
 *
 * @param {String} name
 * @returns {Object} action
 */
export const getSpecificRepo = (name) => {
  return {
    type: actions.GET_SPECIFIC_REPO,
    name: name,
  };
};

/**
 *  Specific repo successfully received.
 *
 * @param {Object} repoDetails
 * @returns {Object} action
 */
export const getSpecificRepoSuccess = (repoDetails) => {
  return {
    type: actions.GET_SPECIFIC_REPO_SUCCESS,
    repoDetails,
  };
};

/**
 * Failed to get the specific repo.
 *
 * @param {Object} errors
 * @returns {Object} action
 */
export const getSpecificRepoFailure = (errors) => {
  return {
    type: actions.GET_SPECIFIC_REPO_FAILURE,
    errors,
  };
};

// Search for a repo.

/**
 * Search for a repo.
 *
 * @param {String} searchedName
 * @returns {Object} action
 */
export const searchRepo = (searchedName) => {
  return {
    type: actions.SEARCH_REPO,
    searchedName: searchedName,
  };
};

/**
 *  Specific repo successfully received.
 *
 * @param {Object} repos
 * @returns {Object} action
 */
export const searchRepoSuccess = (repos) => {
  return {
    type: actions.SEARCH_REPO_SUCCESS,
    repos,
  };
};

/**
 * Failed to get the specific repo.
 *
 * @param {Object} errors
 * @returns {Object} action
 */
export const searchRepoFailure = (errors) => {
  return {
    type: actions.SEARCH_REPO_FAILURE,
    errors,
  };
};

/**
 * Clear search repo state.
 *
 * @returns {Object} action
 */
export const clearSearchRepo = () => {
  return {
    type: actions.CLEAR_SEARCH_REPO,
  };
};

/**
 * Cleared search repo state.
 *
 * @returns {Object} action
 */
export const clearSearchRepoSuccess = () => {
  return {
    type: actions.CLEAR_SEARCH_REPO_SUCCESS,
  };
};

/**
 * Clear search repo state failed.
 *
 * @returns {Object} action
 */
export const clearSearchRepoFailure = () => {
  return {
    type: actions.CLEAR_SEARCH_REPO_FAILURE,
  };
};
