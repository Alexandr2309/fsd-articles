module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid'],
    }],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'warn',
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
      ignoreComments: true,
    }],
    'object-curly-newline': 'warn',
    quotes: [1, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'max-len': ['error', { ignoreComments: true }],
  },
  globals: {
    __IS__DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};