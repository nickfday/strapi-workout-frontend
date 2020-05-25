// import './mockNextRouter';

// module.exports = {
//   stories: ['../src/**/stories.[tj]s[x]'],
//   addons: ['@storybook/addon-knobs/register']
// };

module.exports = {
  stories: ['../src/**/stories.[tj]s'],
  // addons: ['@storybook/addon-knobs/register'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx', 'js');
    return config;
  },
};
