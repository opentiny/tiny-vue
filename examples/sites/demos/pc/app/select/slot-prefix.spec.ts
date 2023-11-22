import { test, expect } from '@playwright/test'

test('custom-prefix', async ({ page }) => {
  await page.goto('select#custom-prefix')
  const prefix = page.locator('#preview .tiny-input .tiny-input__prefix .tiny-svg')

  await expect(prefix).toBeVisible()
  await page.locator('.tiny-select__tags').click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(page.locator('.tiny-select span').filter({ hasText: '黄金糕' }).nth(1)).toBeVisible()
})
