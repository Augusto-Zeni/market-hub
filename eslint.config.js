import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
    },
  },
]
