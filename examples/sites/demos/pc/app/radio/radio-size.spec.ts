import { test, expect } from '@playwright/test'

test('尺寸设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-size')
  const radio1 = page.locator('.tiny-radio-button--medium')
  const radio2 = page.locator('.tiny-radio-button--small')
  const radio3 = page.locator('.tiny-radio-button--mini ')
  await expect(radio1.nth(0)).toBeVisible()
  await expect(radio2.nth(0)).toBeVisible()
  await expect(radio3.nth(0)).toBeVisible()
})
