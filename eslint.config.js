// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Accept React and underscore-prefixed names for intentional "unused"
      // https://eslint.org/docs/latest/rules/no-unused-vars
      'no-unused-vars': ['error', {
        vars: 'all',
        varsIgnorePattern: '^(React|_)',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      }],

      // Vite enables allowConstantExport; keep it but disable in entry via override below
      // https://www.npmjs.com/package/eslint-plugin-react-refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Make apostrophes a warning (escape later at leisure)
      'react/no-unescaped-entities': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  },

  // Entry / service worker often need relaxed rules
  {
    files: ['src/main.jsx', 'public/sw.js'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': 'off',
    },
  },

  // Node/global JS
  {
    files: ['public/**/*.js', 'scripts/**/*.js'],
    languageOptions: { globals: globals.node },
  },
]
