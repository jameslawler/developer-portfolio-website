const fs = require('fs');

const BASE_PORTFOLIO_PATH = 'data/portfolio';

// eslint-disable-next-line no-undef
module.exports = {
  exportPathMap: async function() {
    const portfolioFiles = fs.readdirSync(BASE_PORTFOLIO_PATH);
    return {
      '/': { page: '/' },
      ...portfolioFiles.reduce(
        (acc, file) => ({
          ...acc,
          [`/portfolio/${file.replace('.md', '')}`]: {
            page: '/portfolio',
            query: {
              content: fs.readFileSync(
                `${BASE_PORTFOLIO_PATH}/${file}`,
                'utf8',
              ),
            },
          },
        }),
        {},
      ),
    };
  },
};
