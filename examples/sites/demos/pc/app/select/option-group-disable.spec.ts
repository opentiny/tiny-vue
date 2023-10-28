import { test, expect } from '@playwright/test'

test('option-group-disable', async ({ page }) => {
  await page.goto('select#option-group-disable')
  const select = page.locator('#preview .tiny-select')
  await select.click()
  const listitems = page.locator('.tiny-option')
  await expect(listitems.filter({ hasText: '上海' })).toHaveClass(/is-disabled/)
  await expect(listitems.filter({ hasText: '北京' })).toHaveClass(/is-disabled/)
})
