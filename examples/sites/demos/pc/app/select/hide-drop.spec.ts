import { test, expect } from '@playwright/test'

test('hidedrop', async ({ page }) => {
  await page.goto('select#hide-drop')
  const wrap = page.locator('#hide-drop')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toBeHidden()
})
