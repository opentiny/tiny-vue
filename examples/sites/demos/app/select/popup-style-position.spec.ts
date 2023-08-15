import { test, expect } from '@playwright/test'

test('popup-style-position', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/popup-style-position')
  const select = page.locator('#preview .tiny-select')

  await select.click()
  const selectDropdown = select.locator('.tiny-select-dropdown')
  await expect(selectDropdown).toHaveCount(1)
  await expect(selectDropdown).toHaveClass(/drop/)
})
