import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      '**/*.test.ts',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/*.config.cjs',
    ],
  },
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      prettier: prettier,
    },

    rules: {
      'no-console': 'warn',
      'no-undef': 'off',
      semi: ['error', 'always'],
      eqeqeq: 'warn',
      'no-invalid-this': 'error',
      'no-return-assign': 'error',
      'no-useless-return': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next' }],
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 120 }],
      'keyword-spacing': 'error',
      'arrow-spacing': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
    },
  },
];
