import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
      },
  }),
]

export default eslintConfig