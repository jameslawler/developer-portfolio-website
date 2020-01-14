import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import githubService from '../services/github-service';

const Portfolio = ({ content, data, githubData }) => (
  <div>
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ReactMarkdown source={content} />
    <div>{JSON.stringify(data)}</div>
    {githubData && (
      <div>
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
    };
  }

  return { content, data };
};

Portfolio.propTypes = {
  content: PropTypes.string,
  data: PropTypes.object,
  githubData: PropTypes.object,
};

export default Portfolio;
