module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'hexagonal-architecture'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:yml/standard',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^(_|ctx|req|res|next|err)' },
    ],
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    // An interface declaring no members is equivalent to its supertype
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/class-methods-use-this': 'off',
  },
  overrides: [
    {
      files: ['src/modules/*/{domain,application}/*/*.ts'],
      rules: {
        'hexagonal-architecture/enforce': ['error'],
      },
    },
  ],
};
