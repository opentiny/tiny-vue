import { test, expect } from '@playwright/test'

test('自定义背景颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/user-head/custom-background-color')
  const div1 = page.locator('.tiny-user-head__portrait')
  await expect(div1).toHaveCSS('background-color', 'rgb(94, 124, 224)')
})
