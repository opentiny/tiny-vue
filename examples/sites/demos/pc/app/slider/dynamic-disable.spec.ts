import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#dynamic-disable')
  
  const slider = page.locator('.tiny-slider-container .tiny-slider')
  // 判断按钮禁用
  
  await expect(slider).toBeDisabled
})
