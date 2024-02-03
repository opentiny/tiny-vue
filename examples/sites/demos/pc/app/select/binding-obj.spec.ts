import { test, expect } from '@playwright/test'

test('binding-obj', async ({ page }) => {
  await page.goto('select#binding-obj')

  const wrap = page.locator('#binding-obj')
  const input = wrap.locator('.tiny-input__inner')
  const dropdown = page.locator('.tiny-select-dropdown')
  const valueLocator = wrap.locator('.value')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '龙须面' }).click()
  await expect(input).toHaveValue('龙须面')
  await expect(valueLocator).toHaveText('{ "val": "选项4", "id": 4 }')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '蚵仔煎' }).click()
  await expect(input).toHaveValue('蚵仔煎')
  await expect(valueLocator).toHaveText('{ "val": "选项3", "id": 3 }')
})
