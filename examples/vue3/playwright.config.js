import Config from '@opentiny-internal/playwright-config'

/**
 *  本地开发环境链接：'http://localhost:7130/pc/'
 *  本地官网链接：'http://localhost:3101'
 */
const origin = 'http://localhost:3101'

const baseURL = `${origin}/tiny-vue/zh-CN/os-theme/components/`
const devServerCommon = 'pnpm run -w site'

export default Config({
  testDir: '../sites/demos',
  baseURL,
  storageState: {
    origins: [
      {
        origin,
        localStorage: [
          { name: 'tiny-vue-api-mode', value: 'Composition' },
          { name: 'tiny-vue-demo-mode', value: 'single' }
        ]
      }
    ]
  },
  devServerCommon
})
