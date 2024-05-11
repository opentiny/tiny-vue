import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#base')

  const loading = page.locator('#base .tiny-mobile-loading')
  const loadingIcon = loading.locator('.tiny-mobile-loading__icon')

  await expect(loading).toBeVisible()
  await expect(loading).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.294)')
  await expect(loadingIcon).toBeVisible()
  await expect(loadingIcon).toHaveCSS('width', '24px')
  await expect(loadingIcon).toHaveCSS('height', '24px')

  // 可关闭
  await page.getByRole('button', { name: '关闭 Loading' }).click()
  await expect(loading).not.toBeVisible()
})
