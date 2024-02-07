import Config from '@opentiny-internal/playwright-config'

const origin = 'http://localhost:3101'
// or 'http://localhost:7130/pc/'
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
