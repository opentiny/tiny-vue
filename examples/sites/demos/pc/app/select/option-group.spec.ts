import { test, expect } from '@playwright/test'

test('option-group', async ({ page }) => {
  await page.goto('select#option-group')
  const select = page.locator('#preview .tiny-select')
  await select.click()
  const listitems = page.locator('.tiny-option')
  await expect(listitems.filter({ hasText: '上海' })).toHaveClass(/is-disabled/)
  await expect(listitems.filter({ hasText: '北京' })).toHaveClass(/is-disabled/)
  const groups = page.locator('.tiny-option-group')
  await expect((await groups.all()).length).toEqual(2)
})
