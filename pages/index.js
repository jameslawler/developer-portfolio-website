import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from './index.module.css';

const Home = ({ projects }) => (
  <div className={styles.Home}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>Welcome</div>

    {projects.map(project => (
      <div key={project.name}>
        {project.name} - {project.headers.category}
      </div>
    ))}
  </div>
);

Home.getInitialProps = async ({ query }) => {
  return { projects: query.projects };
};

Home.propTypes = {
  projects: PropTypes.array,
};

export default Home;
