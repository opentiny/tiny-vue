import { test, expect } from '@playwright/test'

test('测试 Alert 自定义提示内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/custom-description')

  // size为large时，才可自定义提示内容
  const largeAlert = page.locator('.tiny-alert--large').first()
  const description = largeAlert.locator('.tiny-alert__description')
  await expect(description).toBeVisible()
})
