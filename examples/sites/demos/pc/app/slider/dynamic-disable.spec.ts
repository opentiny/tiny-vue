import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#dynamic-disable')

  // 判断按钮禁用
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper div')
  await expect(slider).toBeDisabled
})
