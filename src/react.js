/* eslint-disable global-require */

module.exports = {
  extends: [
    'airbnb',
    './index.js',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],

    'react/prefer-stateless-function': 'off',

    'react/destructuring-assignment': 'off',

    'react/static-property-placement': 'off',

    'react/require-default-props': 'off',

    'react/sort-comp': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/core-modules': ['typescript', 'react'],
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],
      rules: {
        // This rule does not work well for React class components, i.e. it's perfectly valid to
        // not use `this` in the `render` method.
        'class-methods-use-this': 'off',
      },
    },
  ],
};
