import globals from 'globals'
import eslint from '@eslint/js'

import tseslint from 'typescript-eslint'

import pluginReact from 'eslint-plugin-react'

import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {globals: globals.browser},
  },
]
