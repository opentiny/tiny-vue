import { test, expect } from '@playwright/test'

test('全局加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#fullscreen')
  await page.getByRole('button', { name: '指令方式加载全屏 Loading' }).click()
  const vLoading = page.locator('.circular')
  await expect(vLoading).toBeVisible()

  await page.getByRole('button', { name: '静态方法加载全屏 Loading' }).click()
  const sLoading = page.getByText('Loading', { exact: true })
  await expect(sLoading).toBeVisible()
})
