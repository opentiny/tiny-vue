import { test, expect } from '@playwright/test'

test('自定义背景颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#custom-background-color')
  const div1 = page.locator('.tiny-user-head__portrait')
  await expect(div1).toHaveCSS('background-color', 'rgb(164, 217, 198)')
})
