const fs = require('fs');
const matter = require('gray-matter');

const DATA_PATH = 'data';

const getMarkdownFiles = path =>
  fs
    .readdirSync(path, {
      withFileTypes: true,
    })
    .filter(file => !file.isDirectory())
    .map(file => file.name)
    .filter(fileName => fileName.endsWith('.md'));

const getFolders = path =>
  fs
    .readdirSync(path, {
      withFileTypes: true,
    })
    .filter(directory => directory.isDirectory())
    .map(directory => directory.name);

const extractNameFromPath = name => name.substring(3).replace('.md', '');

const createUrl = (folder, entryName, sectionName, sectionIndex) =>
  sectionIndex === 0
    ? `/${folder}/${entryName}`
    : `/${folder}/${entryName}/${sectionName}`;

const getRoutes = () => {
  const routes = [];
  const folders = getFolders(DATA_PATH);

  folders.forEach(folder => {
    const entries = getFolders(`${DATA_PATH}/${folder}`);
    entries.forEach(entry => {
      const entryName = extractNameFromPath(entry);
      const sections = getMarkdownFiles(`${DATA_PATH}/${folder}/${entry}`);
      let projectHeaders = {};

      const sectionsNavigation = sections.map((section, sectionIndex) => {
        const sectionName = extractNameFromPath(section);
        const url = createUrl(folder, entryName, sectionName, sectionIndex);
        const filePath = `${DATA_PATH}/${folder}/${entry}/${section}`;
        const sectionHeaders = matter(fs.readFileSync(filePath, 'utf8')).data;

        if (sectionIndex === 0) {
          projectHeaders = { ...sectionHeaders };
        }

        return {
          id: section,
          label: sectionHeaders.name,
          url,
        };
      });
      sections.forEach((section, sectionIndex) => {
        const sectionName = extractNameFromPath(section);
        const url = createUrl(folder, entryName, sectionName, sectionIndex);
        const filePath = `${DATA_PATH}/${folder}/${entry}/${section}`;
        const sectionMatter = matter(fs.readFileSync(filePath, 'utf8'));

        console.log(`Adding route (${url})`, sectionsNavigation);

        routes.push({
          url,
          page: `/${folder}`,
          fileName: section,
          filePath: `${DATA_PATH}/${folder}/${entry}/${section}`,
          sectionContent: sectionMatter.content,
          sectionHeaders: sectionMatter.data,
          sectionsNavigation,
          projectHeaders,
        });
      });
    });
  });

  return routes;
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
    const routes = getRoutes();

    const staticRoutes = {
      '/': {
        page: '/',
      },
      ...routes.reduce(
        (acc, route) => ({
          ...acc,
          [`${route.url}`]: {
            page: route.page,
            query: route,
          },
        }),
        {},
      ),
    };

    console.log('Static Routes', staticRoutes);

    return staticRoutes;
  },
};
