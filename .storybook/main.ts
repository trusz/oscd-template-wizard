import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
  stories: [
    "../lib/**/*.mdx", 
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {
      builder:{
        viteConfigPath: "vite.config.ts",
      }
    },
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite'
  },
};
export default config;
