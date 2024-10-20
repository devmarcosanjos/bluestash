// @ts-check
import {fixupConfigRules} from '@eslint/compat'
import {FlatCompat} from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import path from 'node:path'
import {fileURLToPath} from 'node:url'

// import pluginReact from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
  allConfig: eslintJs.configs.all,
})
const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')])

const config = [
  {
    ignores: [
      '.github/**',
      '.next/**',
      '.swc/**',
      '.vscode/**',
      'coverage/**',
      'node_modules/**',
      'build/**',
      'dist/**',
      'public/**',
      '**/@types/**',
      '**/index.js',
      '**/*.d.ts',
      '**/*.js',
    ],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
  eslintJs.configs.recommended,
  ...patchedConfig,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended, // no needed when using next/core-web-vitals
  // pluginReact.configs.flat['jsx-runtime'], // no needed when using next/core-web-vitals

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'import/no-cycle': 'warn',
      'import/no-unresolved': 'error',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {selector: 'classMethod', format: ['camelCase']},
        {selector: 'interface', format: ['PascalCase']},
        {selector: 'variable', modifiers: ['destructured'], format: null},
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'distinctGroup': true,
          'alphabetize': {
            order: 'asc',
          },
          'groups': [
            'index',
            'type',
            'sibling',
            'parent',
            'internal',
            'external',
            'builtin',
            'object',
          ],
          'pathGroups': [
            {
              pattern: '@/config/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/emails/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/libs/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/server/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/constants/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/locales/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/types/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/utils/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
]

export default config
