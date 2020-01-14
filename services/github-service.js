import fetch from 'isomorphic-unfetch';

const GITHUB_BASE_URL = 'https://api.github.com';
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com';

const getUser = username =>
  fetch(`${GITHUB_BASE_URL}/users/${username}`).then(result => result.json());

const getRepository = repository =>
  fetch(`${GITHUB_BASE_URL}/repos/${repository}`).then(result => result.json());

const getReadme = repository =>
  fetch(`${GITHUB_RAW_URL}/${repository}/master/README.md`).then(result =>
    result.text(),
  );

export default {
  getUser,
  getRepository,
  getReadme,
};
