// eslint-disable-next-line simple-import-sort/imports
import type { Preview } from '@storybook/react';
import '../src/styles/colors.css';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    dependencies: {
      // display only dependencies/dependents that have a story in storybook
      // by default this is false
      withStoriesOnly: true,
      // completely hide a dependency/dependents block if it has no elements
      // by default this is false
      hideEmpty: true,
    },
  },
};

export default preview;
