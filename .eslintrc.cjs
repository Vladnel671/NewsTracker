module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/newline-after-import': 'error',
  },
}
