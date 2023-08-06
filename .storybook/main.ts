// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (options) => ({
    ...options,
    presets: ['next/babel'],
    plugins: [['styled-components']],
  }),
  // eslint-disable-next-line unused-imports/no-unused-vars
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles'),
      '@components': path.resolve(__dirname, '../components'),
      '@src': path.resolve(__dirname, '../src'),
    };
    config.resolve.alias['styled-components'] = path.resolve(
      __dirname,
      '../node_modules/styled-components'
    );
    return config;
  },
};
