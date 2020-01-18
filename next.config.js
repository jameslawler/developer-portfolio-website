const fs = require('fs');
const matter = require('gray-matter');

const BASE_PROJECTS_PATH = 'data/projects';

const getProjects = () => {
  const projectFiles = fs.readdirSync(BASE_PROJECTS_PATH);
  return projectFiles.map(file => {
    const name = file.replace('.md', '');
    const content = fs.readFileSync(`${BASE_PROJECTS_PATH}/${file}`, 'utf8');
    const { data } = matter(content);

    return {
      name,
      headers: data,
    };
  });
};

// eslint-disable-next-line no-undef
module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  exportPathMap: async function() {
    const projects = getProjects();
    return {
      '/': {
        page: '/',
        query: {
          projects: projects.map(project => ({
            name: project.name,
            headers: project.headers,
          })),
        },
      },
      ...projects.reduce(
        (acc, project) => ({
          ...acc,
          [`/projects/${project.name}`]: {
            page: '/project',
            query: {
              name: project.name,
            },
          },
        }),
        {},
      ),
    };
  },
};
