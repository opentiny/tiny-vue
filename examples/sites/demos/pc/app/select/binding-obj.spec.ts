import { test, expect } from '@playwright/test'

test('binding-obj', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#binding-obj')

  const wrap = page.locator('#binding-obj')
  const input = wrap.locator('.tiny-input__inner')
  const dropdown = page.locator('.tiny-select-dropdown')
  const valueLocator = wrap.locator('.value')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '重庆' }).click()
  await expect(input).toHaveValue('重庆')
  await expect(valueLocator).toHaveText('{ "val": "选项4", "id": 4 }')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '天津' }).click()
  await expect(input).toHaveValue('天津')
  await expect(valueLocator).toHaveText('{ "val": "选项3", "id": 3 }')
})
