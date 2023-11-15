import { test, expect } from '@playwright/test'

test('hidedrop', async ({ page }) => {
  await page.goto('select#hide-select-input-border')
  const select = page.locator('#preview .tiny-select').first()
  const dropdown = page.locator('.tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toBeHidden()
})
