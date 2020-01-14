import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import githubService from '../services/github-service';

const Portfolio = ({ content, data, githubData, githubReadme }) => (
  <div>
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <p>Portfolio Markdown:</p>
    <ReactMarkdown source={content} />
    <p>Portfolio Data:</p>
    <div>{JSON.stringify(data)}</div>
    {githubReadme && (
      <div>
        <p>Github Readme:</p>
        <ReactMarkdown source={githubReadme} />
      </div>
    )}
    {githubData && (
      <div>
        <p>Github Data:</p>
        <span>{JSON.stringify(githubData)}</span>
      </div>
    )}
  </div>
);

Portfolio.getInitialProps = async ({ query }) => {
  const { content, data } = matter(query.content);
  if (data.source === 'GitHub') {
    const {
      name,
      html_url,
      description,
      created_at,
      updated_at,
      watchers,
      forks,
      open_issues,
      language,
    } = await githubService.getRepository(data.repository);
    const readme = await githubService.getReadme(data.repository);
    return {
      content,
      data,
      githubData: {
        name,
        html_url,
        description,
        created_at,
        updated_at,
        watchers,
        forks,
        open_issues,
        language,
      },
      githubReadme: readme,
    };
  }

  return { content, data };
};

Portfolio.propTypes = {
  content: PropTypes.string,
  data: PropTypes.object,
  githubData: PropTypes.object,
  githubReadme: PropTypes.string,
};

export default Portfolio;
