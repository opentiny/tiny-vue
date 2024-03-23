// import type { PlaywrightTestConfig } from '@playwright/test'
import { devices, defineConfig } from '@playwright/test';

const Config = ({ testDir, baseURL, storageState, devServerCommon }) =>
  defineConfig({
    testDir,
    /* 每个 test 用例最长时间。 */
    timeout: 20 * 1000,
    expect: {
      // 每个 expect() 用例最长时间。
      timeout: 10 * 1000,
    },
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* playwright 同时可以开启几个浏览器进行测试 */
    workers: process.env.CI ? 1 : 2,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
      /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
      actionTimeout: 0,
      /* Base URL to use in actions like `await page.goto('/')`. */
      baseURL: process.env.PYTEST_BASEURL || baseURL,
      storageState: process.env.PYTEST_STORAGE ? JSON.parse(process.env.PYTEST_STORAGE) : storageState,
      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
      trace: 'on-first-retry',

      /* Only on CI systems run the tests headless */
      headless: false,
      ignoreHTTPSErrors: true,
      screenshot: 'only-on-failure',
      permissions: ['clipboard-read'],

      /* Emulates the user timezone */
      timezoneId: 'Asia/Shanghai',
    },
    webServer: {
      command: devServerCommon,
      url: baseURL,
      reuseExistingServer: !process.env.CI,
      stdout: 'pipe',
    },
    projects: [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
        },
      },
    ],
  });

const origin = 'http://localhost:3101';
// or 'http://localhost:7130/pc/'
const baseURL = `${origin}/tiny-react/components/`;
const devServerCommon = 'pnpm run -w site';

export default Config({
  testDir: '../sites/demos',
  baseURL,
  storageState: {
    origins: [
      {
        origin,
        localStorage: [
          // { name: 'tiny-vue-api-mode', value: 'Composition' },
          // { name: 'tiny-vue-demo-mode', value: 'single' },
        ],
      },
    ],
  },
  devServerCommon,
});
