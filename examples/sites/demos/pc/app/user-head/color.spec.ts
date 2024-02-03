import { test, expect } from '@playwright/test'

test('自定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#color')
  const div1 = page.locator('.tiny-user-head__portrait').first()
  await expect(div1).toHaveCSS('background-color', 'rgb(184, 217, 249)')
  const div2 = page.locator('div:nth-child(2) > .tiny-user-head__portrait')
  await expect(div2).toHaveCSS('background-color', 'rgb(46, 134, 222)')
})
