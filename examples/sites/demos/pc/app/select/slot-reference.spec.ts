import { expect, test } from '@playwright/test'

test('custom-reference', async ({ page }) => {
  await page.goto('select#slot-reference')

  const wrap = page.locator('#slot-reference')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const reference = select.locator('.custom-reference')

  await expect(option).toHaveCount(0)
  await reference.click()
  await option.filter({ hasText: '黄金糕' }).click()
})
