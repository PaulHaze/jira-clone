import globals from 'globals';
import eslint from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

// import pluginImport from 'eslint-plugin-import';

const baseConfig = {
  name: 'Base Configuration',
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

const tsConfig = {
  name: 'Typescript Config',
  files: ['**/*.{ts,tsx}'],
  ignores: ['e2e/**', '**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  // custom rules
  rules: {},
};

const nextLint = {
  name: 'NextJs Plugin Config',
  plugins: {
    '@next/next': pluginNext,
  },
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs['core-web-vitals'].rules,
    '@next/next/no-img-element': 'off',
  },
};

export default tseslint.config(
  baseConfig,
  tsConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  // pluginImport.flatConfigs.recommended,
  nextLint,

  // CUSTOM RULES
  {
    rules: {
      'react/prop-types': off,
    },
  },

  // Turn off prettier conflicts
  eslintConfigPrettier,

  // Global Ignore
  {
    ignores: ['.next/*', 'node_modules/*', 'dist/*', 'build/*'],
  },
);
