import { test, expect } from '@playwright/test'

test('hidedrop', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#hide-drop')
  const wrap = page.locator('#hide-drop')
  const select = wrap.locator('.tiny-base-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toBeHidden()
})
