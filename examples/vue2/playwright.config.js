import Config from '@opentiny-internal/playwright-config'

const origin = 'http://localhost:7126'
const baseURL = `${origin}/pc/`
const devServerCommon = 'pnpm run -w dev2'

export default Config({
  testDir: '../sites/demos',
  baseURL,
  devServerCommon
})
