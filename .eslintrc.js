module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'no-only-tests'],
  extends: [
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    project: `./tsconfig.alt.json`
  },
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['/dist'],
  rules: {
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.test.tsx',
          'jest/*.ts',
          './*.js',
          'src/utils/testUtils.ts'
        ]
      }
    ],
    'global-require': 'off',
    'no-only-tests/no-only-tests': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  overrides: [
    {
      files: ['src/**/*.test.@(ts|tsx)', 'jest/*'],
      plugins: ['react', 'prettier', 'eslint-plugin-jest'],
      env: {
        browser: true,
        node: true,
        jest: true
      }
    }
  ]
};
