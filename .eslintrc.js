module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'import/no-cycle': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: false,
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 'off',
  },
};
