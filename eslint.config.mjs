import globals from 'globals';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

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

const nextPluginConfig = {
  name: 'Next Plugin Config',
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    '@next/next/no-img-element': 'off',
  },
};

export default tseslint.config(
  // Use tseslint.config instead of direct array export
  baseConfig,
  tsConfig,

  // React plugins
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],

  // Next.js plugin
  nextPluginConfig,

  // Prettier and additional configs
  eslintConfigPrettier,

  // Global Ignore
  {
    ignores: ['.next/*', 'node_modules/*', 'dist/*', 'build/*'],
  },
);
