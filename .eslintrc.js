module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint'],
  rules: {
    // add other overrides here...
    'no-warning-comments': [
      'error',
      { terms: ['todo', 'fixme'], location: 'anywhere' },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: { 'react/prop-types': 'off' },
    },
  ],
};
