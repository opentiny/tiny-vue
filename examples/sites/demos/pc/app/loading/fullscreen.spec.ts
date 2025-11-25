import { test, expect } from '@playwright/test'

test('全局加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#fullscreen')

  const demo = page.locator('#fullscreen')
  await demo.getByRole('button', { name: '指令方式加载全屏 Loading' }).click()
  const vLoading = page.locator('.tiny-loading.tiny-loading__mask.is-fullscreen')
  await expect(vLoading).toBeVisible()

  await demo.getByRole('button', { name: '静态方法加载全屏 Loading' }).click()
  const sLoading = vLoading.getByText('正在提交...', { exact: true })
  await expect(sLoading).toBeVisible()
})
