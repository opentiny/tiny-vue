import { test, expect } from '@playwright/test'

test('加载状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#loading')

  const demo = page.locator('#loading')
  const switchBtn = demo.locator('.tiny-switch__button').first().locator('svg')
  const switchBtn2 = demo.locator('span:nth-child(2) > .tiny-switch__button').locator('svg')

  await expect(switchBtn).toHaveClass(/tiny-switch__on-loading/)
  await expect(switchBtn2).toHaveClass(/tiny-switch__off-loading/)
})
