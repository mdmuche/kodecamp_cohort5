import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'warn', // Allow console statements
    },
  },
  tseslint.configs.recommended,
]);
