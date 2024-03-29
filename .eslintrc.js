module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'personal-fsd-ako-plugin', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-syntax': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': ['warn', 'windows'],
    'import/no-unresolved': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'personal-fsd-ako-plugin/path-checker': ['error', {
      alias: '@'
    }],
    'personal-fsd-ako-plugin/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/storeProvider', '**/testing']
    }],
    'personal-fsd-ako-plugin/public-api-imports': ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/StoreDecorator.tsx', '**/*.story.*']
    }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['as', 'target', 'border', 'role', 'data-testid', 'to', 'direction', 'gap', 'align', 'justify']
    }],
    'no-undef': 'off',
    indent: [2, 2],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
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
      ignoreComments: true
    }],
    'object-curly-newline': 'warn',
    quotes: [1, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'react/no-array-index-key': 'warn',
    'max-len': ['warn', {
      ignoreComments: true,
      code: 100
    }],
    'no-param-reassign': 'off'
  },
  globals: {
    __IS__DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    }
  }]
};