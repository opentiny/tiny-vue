import { test, expect } from '@playwright/test'

test('binding-obj', async ({ page }) => {
  await page.goto('select#binding-obj')
  const input = page.locator('#preview .tiny-input__inner')
  const valueLocator = page.locator('#preview .value')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '龙须面' }).click()
  await expect(input).toHaveValue('龙须面')
  await expect(valueLocator).toHaveText('{ "val": "选项4", "id": 4 }')
  await input.click()
  await page.getByRole('listitem').filter({ hasText: '蚵仔煎' }).click()
  await expect(input).toHaveValue('蚵仔煎')
  await expect(valueLocator).toHaveText('{ "val": "选项3", "id": 3 }')
})
