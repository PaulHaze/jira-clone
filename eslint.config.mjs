import globals from 'globals';
import eslint from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
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
  files: ['**/*.{ts,tsx,mjs}'],
  ignores: ['e2e/**', '**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  // custom rules
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};

const nextLint = {
  name: 'NextJs Plugin Config',
  plugins: {
    '@next/next': pluginNext,
  },
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,mjs}'],
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs['core-web-vitals'].rules,
    '@next/next/no-img-element': 'off',
  },
};

const importPluginConfig = {
  name: 'Import Plugin Config',
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  ...pluginImport.flatConfigs.recommended,
  rules: {},
};

export default tseslint.config(
  baseConfig,
  tsConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  importPluginConfig,
  nextLint,

  // CUSTOM RULES
  {
    rules: {
      'react/prop-types': 'off',
    },
  },

  // Turn off prettier conflicts
  eslintConfigPrettier,

  // Global Ignore
  {
    ignores: ['.next/*', 'node_modules/*', 'dist/*', 'build/*'],
  },
);
