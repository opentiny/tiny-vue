import { test, expect } from '@playwright/test'

test('测试尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#size')
  await expect(page.locator('.tiny-color-picker__trigger.tiny-color-picker--large')).toHaveCSS('width', '64px')
  await expect(page.locator('.tiny-color-picker__trigger.tiny-color-picker--medium')).toHaveCSS('width', '48px')
  await expect(page.locator('.tiny-color-picker__trigger.tiny-color-picker--small')).toHaveCSS('width', '36px')
  await expect(page.locator('.tiny-color-picker__trigger.tiny-color-picker--mini')).toHaveCSS('width', '24px')
})
