import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import renderers from 'react-markdown-github-renderers';

import Header from '../components/header';

import githubService from '../services/github-service';

import styles from './project.module.css';

const Project = ({ content, headers, githubData }) => (
  <div className={styles.Project}>
    <Head>
      <title>{githubData.name}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.Header}>
      <Header
        color={headers.color}
        title={githubData.name}
        description={githubData.description}
        githubUrl={githubData.html_url}
        githubStars={githubData.watchers}
        githubForks={githubData.forks}
      />
    </div>
    <ReactMarkdown
      source={content}
      className={styles.Markdown}
      escapeHtml={false}
      renderers={renderers}
    />
  </div>
);

Project.getInitialProps = async ({ query }) => {
  const { default: projectContent } = await import(
    `../data/projects/${query.name}.md`
  );
  const { content, data } = matter(projectContent);
  const githubData = await githubService.getRepository(data.repository);
  return {
    content,
    headers: data,
    githubData: {
      name: githubData.name,
      html_url: githubData.html_url,
      description: githubData.description,
      created_at: githubData.created_at,
      updated_at: githubData.updated_at,
      watchers: githubData.watchers,
      forks: githubData.forks,
      open_issues: githubData.open_issues,
      language: githubData.language,
    },
  };
};

Project.propTypes = {
  content: PropTypes.string,
  headers: PropTypes.object,
  githubData: PropTypes.object,
};

export default Project;
