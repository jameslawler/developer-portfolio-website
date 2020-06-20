import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import renderers from 'react-markdown-github-renderers';

const Projects = ({ content, headers, sectionsNavigation }) => (
  <div>
    <Head>
      <title>hello</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className="hero is-primary is-small">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">JAMES LAWLER</a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroB"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item">Home</a>
                <a className="navbar-item is-active">Projects</a>
                <a className="navbar-item">Snippets</a>
                <span className="navbar-item">
                  <a
                    className="button is-info is-inverted"
                    href="https://www.github.com/jameslawler"
                  >
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a
                    className="button is-info is-inverted"
                    href="https://www.twitter.com/jameslawlercom"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Twitter</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">react-native-rss-parser</p>
          <p className="subtitle">React Native compatible RSS parser</p>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed">
          <div className="container">
            <ul>
              {sectionsNavigation.map(navigation => (
                <li
                  key={navigation.label}
                  className={navigation.isActive ? 'is-active' : ''}
                >
                  <a href={navigation.url}>{navigation.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <div className="container is-desktop">
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={renderers}
      />
    </div>
  </div>
);

Projects.getInitialProps = async ({ query }) => {
  console.log('Building static page initial props', query);

  return {
    content: query.sectionContent,
    headers: {
      ...query.projectHeaders,
      ...query.sectionHeaders,
    },
    sectionsNavigation: (query.sectionsNavigation || []).map(navigation => ({
      ...navigation,
      isActive: query.fileName === navigation.id,
    })),
  };
};

Projects.propTypes = {
  content: PropTypes.string,
  headers: PropTypes.object,
  sectionsNavigation: PropTypes.array,
};

export default Projects;
