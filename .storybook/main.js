// import './mockNextRouter';

// module.exports = {
//   stories: ['../src/**/stories.[tj]s[x]'],
//   addons: ['@storybook/addon-knobs/register']
// };

module.exports = {
   stories: ['../src/**/stories.@(ts|tsx|js)'],
  // addons: ['@storybook/addon-knobs/register'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-knobs/register'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
