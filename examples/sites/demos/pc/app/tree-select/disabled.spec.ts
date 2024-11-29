import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#disabled')

  const wrap = page.locator('#disabled')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const input = select.locator('.tiny-input__inner')

  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)
})
