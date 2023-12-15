import { test, expect } from '@playwright/test'

test('二维码纠错等级', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#level')

  const canvas = page.locator('.tiny-qr-code-container canvas')
  await expect(canvas).toBeVisible()

  const button = page.locator('.tiny-radio-button--small')
  await expect(button.nth(0).locator('.tiny-radio-button__inner')).toHaveText('Low')
  await expect(button.nth(1).locator('.tiny-radio-button__inner')).toHaveText('Medium')
  await expect(button.nth(2).locator('.tiny-radio-button__inner')).toHaveText('Quality')
  await expect(button.nth(3).locator('.tiny-radio-button__inner')).toHaveText('High')
})
