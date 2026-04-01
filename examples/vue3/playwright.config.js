import Config from '@opentiny-internal/playwright-config'
import { defineConfig } from '@playwright/test'

/**
 *  本地开发环境链接：'http://localhost:7130/pc/'
 *  本地官网链接：'http://localhost:3101'
 *  外部测试官网链接：'https://opentiny.github.io/tiny-vue-web-doc'
 */
const origin = 'http://localhost:3101/tiny-vue'
const baseURL = `${origin}/zh-CN/os-theme/components/`
const devServerCommon = 'pnpm run -w site'

const baseConfig = Config({
  testDir: '../sites/demos/pc',
  baseURL,
  devServerCommon
})

// 合并，确保关键字段不丢失
export default defineConfig({
  // 保留 baseConfig
  ...baseConfig,

  // 显式覆盖 projects（完全替换）
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ['--window-size=1920,1080']
        }
      }
    }
  ],

  // 合并 use
  use: {
    ...baseConfig.use, // 保留 baseConfig 的 use 配置
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 10000
  },

  // 合并 storageState
  storageState: {
    origins: [
      {
        origin,
        localStorage: [
          { name: 'tiny-vue-api-mode', value: 'Composition' },
          { name: 'tiny-vue-demo-mode', value: 'single' },
          { name: 'tiny-e2e-test', value: 'true' }
        ]
      }
    ]
  }
})
