import { test, expect } from '@playwright/test'

test('空数据插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#slot-empty')

  const demo = page.locator('#slot-empty')
  const emptySlot = demo.locator('.tiny-button-group .tiny-button-group--empty')
  await expect(emptySlot.first()).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(demo.locator('.tiny-button-group .custom-empty')).toHaveCSS('color', 'rgb(250, 194, 10)')
})
