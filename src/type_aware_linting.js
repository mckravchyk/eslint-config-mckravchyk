/**
 * Sets up @typescript-eslint/parser and enables extra type-aware linting rules.
 *
 * @param parserOptions See https://typescript-eslint.io/linting/typed-linting/
 * @param rules Extra type-aware rules to override config's defaults.
 *
 * (This cannot be a part of the base config since it requires configuration specific to the
 * project.)
 */
function typeAwareLinting(parserOptions, rules = { }) {
  return {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    files: [
      '**/*.ts',
      '**/*.tsx',
      // FIXME: For some reason parser options project (which is required for type-aware linting)
      // will break Eslint in all .svelte files - so it's disabled.
      // https://github.com/sveltejs/eslint-plugin-svelte3/issues/133
      // '**/*.svelte',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions,
    // Currently all other rules are disabled as they add up to compilation times.
    // extends: [
    //   'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // ],
    rules: {
      '@typescript-eslint/no-floating-promises': ['error'],
      ...rules,
    },
  };
}

module.exports = typeAwareLinting;
