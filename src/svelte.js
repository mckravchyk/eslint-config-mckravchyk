/* eslint-disable global-require */

module.exports = {
  extends: ['./index.js'],
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  settings: {
    'import/core-modules': ['typescript', 'svelte'],
    'svelte3/typescript': () => require('typescript'),
    'svelte3/ignore-warnings': ({ code }) => ['missing-declaration'].indexOf(code) !== -1,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/first': 'off',
      },
    },
  ],
};
