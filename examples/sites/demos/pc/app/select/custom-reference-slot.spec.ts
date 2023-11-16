import { test } from '@playwright/test'

test('custom-reference', async ({ page }) => {
  await page.goto('select#custom-reference-slot')
  const reference = page.locator('#preview .custom-reference')
  await reference.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
})
