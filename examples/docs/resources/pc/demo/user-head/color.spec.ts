import { test, expect } from '@playwright/test'

test('自定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/user-head/color')
  const div1 = page.locator('.tiny-user-head__portrait').first()
  await expect(div1).toHaveCSS('background-color', 'rgb(64, 169, 255)')
  const div2 = page.locator('div:nth-child(2) > .tiny-user-head__portrait')
  await expect(div2).toHaveCSS('background-color', 'rgb(250, 140, 22)')
})
