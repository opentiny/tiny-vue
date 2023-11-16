import { test, expect } from '@playwright/test'

test('clearable', async ({ page }) => {
  await page.goto('select#clearable')
  const input = page.locator('#preview .tiny-input__inner')
  const icon = page.locator('#preview .tiny-input__suffix')

  await expect(input).toHaveValue('蚵仔煎')
  await input.hover()
  await icon.click()
  await expect(input).toHaveValue('')
  await icon.click()
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
})
