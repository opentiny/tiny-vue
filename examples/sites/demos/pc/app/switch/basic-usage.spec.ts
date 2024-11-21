import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#basic-usage')

  const demo = page.locator('#basic-usage')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(switchBtn).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  await switchBtn.click()
  await expect(switchBtn).toHaveCSS('background-color', 'rgb(194, 194, 194)')
})
