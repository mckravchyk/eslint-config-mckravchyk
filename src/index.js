/* eslint-disable global-require */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    //
    // Style
    //

    'no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],

    'no-mixed-operators': 'off',

    'prefer-destructuring': 'off',

    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

    curly: ['error', 'all'],

    'no-underscore-dangle': 'off',

    'no-void': ['error', { allowAsStatement: true }],

    'no-nested-ternary': 'off',

    //
    // TypeScript
    //

    // This is required for function-type definitions.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/no-empty-interface': 'off',

    //
    // Imports
    //

    'import/prefer-default-export': 'off',

    'import/no-default-export': 'error',

    // TypeScript will resolve the imports so there's no need for Eslint to check it. Also,
    // Eslint will not work with absolute paths (without extra configuration).
    'import/no-unresolved': 'off',

    // This is another rule that does not work well with absolute  paths (probably because Eslint
    // is not configured to resolve them). This rule only takes effect for .js/.ts files. TypeScript
    // will enforce that .ts files should not end with an extension, so this rule is also not
    // required.
    'import/extensions': 'off',

    //
    // Loops
    //

    'no-await-in-loop': 'off',

    'no-continue': 'off',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // {
      //   selector: 'ForOfStatement',
      //   message: '',
      // },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    //
    // Miscellaneous
    //

    'no-use-before-define': 'off', // Disable the regular rule which the ts rule extends
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
      allowNamedExports: false,
    }],

    // 'no-param-reassign' cannot enforce immutability (e.g. array.push) while blocking legitimate
    // uses like modifying a string that has been passed as the parameter.
    'no-param-reassign': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
    'import/core-modules': ['typescript'],
  },
  overrides: [
    // TypeScript-specific rules
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.svelte'],
      rules: {
        // This rule does not work when defining variables in the globals.d.ts and is redundant in
        // TypeScript files, as TSC will detect undefined variables by itself.
        'no-undef': 'off',
      },
    },
    {
      files: [
        '**/*.test.ts',
      ],
      env: {
        // now **/*.test.js files' env has both es6 *and* jest
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/no-conditional-expect': 'off',
      },
    },
  ],
};
