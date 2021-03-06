module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false,
          },
        ],
      ],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['babel-plugin-styled-components'],
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false,
          },
        ],
      ],
    },
  },
};
