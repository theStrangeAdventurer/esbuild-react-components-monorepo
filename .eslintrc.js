/** @type {import('eslint').ESLint.ConfigData} config */
const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: ".",
    project: [
        './tsconfig.json'
    ]
  },
  ignorePatterns: [
    'node_modules',
    '**/dist',
    '.eslintrc.js',
    'scripts'
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'warn',
  },
  overrides: []
}

module.exports = config;