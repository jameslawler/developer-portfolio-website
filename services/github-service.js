import fetch from 'isomorphic-unfetch';

const GITHUB_BASE_URL = 'https://api.github.com';

const getUser = username =>
  fetch(`${GITHUB_BASE_URL}/users/${username}`).then(result => result.json());

const getRepository = repository =>
  fetch(`${GITHUB_BASE_URL}/repos/${repository}`).then(result => result.json());

export default {
  getUser,
  getRepository,
};
