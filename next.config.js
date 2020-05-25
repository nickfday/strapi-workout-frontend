const path = require('path');

require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, 'src');
    const { dir } = options;
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    });
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
};
