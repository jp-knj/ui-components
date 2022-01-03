import preact from '@preact/preset-vite'
import { StorybookConfig, CoreConfig, Options } from '@storybook/core-common'
import { UserConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { Weaken } from '../utils/weaken'

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig
  viteFinal?: (config: UserConfig, options: Options) => UserConfig
}

const config: CustomizedStorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite'
  },
  viteFinal: (config) => {
    config.plugins = [...config.plugins, preact(), vanillaExtractPlugin()]
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1200
    }
    return config
  }
}

export default config