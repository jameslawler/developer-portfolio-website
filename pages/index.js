import React from 'react';
import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
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
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Projects</a>
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
        <div className="container is-desktop has-text-centered">
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <figure className="image is-128x128">
                <img className="is-rounded" src="/assets/james-lawler.jpg" />
              </figure>
            </div>
          </div>
        </div>
        <div className="container has-text-centered">
          <p className="title">James Lawler</p>
          <p className="subtitle">Software Developer</p>
        </div>
      </div>
    </section>

    <div className="container is-desktop">
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p className="subtitle">Jeff Atwood</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p className="subtitle">Jeff Atwood</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
