import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-class')

  const demo = page.locator('#custom-class')
  const alertBox = demo.locator('.customClass')

  // 颜色边框正确
  await expect(alertBox).toHaveCSS('background-color', 'rgb(255, 192, 203)')
})
