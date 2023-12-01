import { test, expect } from '@playwright/test'

test('手动聚焦失焦', async ({ page }) => {
  await page.goto('select#manual-focus-blur')
  const wrap = page.locator('#manual-focus-blur')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const button = wrap.locator('.tiny-button')

  await button.first().click()
  await expect(dropdown).toBeVisible()
  await button.nth(1).click()
  await expect(dropdown).toBeHidden()
})
