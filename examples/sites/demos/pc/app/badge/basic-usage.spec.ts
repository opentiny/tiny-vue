import { test, expect } from '@playwright/test'

test('测试基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#base')

  const preview = page.locator('#preview')
  const textWrapper = preview.locator('.tiny-badge__wrapper')
  const badge = textWrapper.locator('.tiny-badge')

  await expect(textWrapper).toContainText('我的待办')
  await expect(badge).toContainText('2')
  await expect(badge).toHaveCSS('background-color', 'rgb(246, 111, 106)')
  await expect(badge).toHaveCSS('color', 'rgb(255, 255, 255)')
})
