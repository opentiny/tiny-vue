import { test, expect } from '@playwright/test'

test('multiple-limit', async ({ page }) => {
  await page.goto('select#multiple-limit')
  const select = page.locator('#preview .tiny-select')

  await select.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await page.waitForTimeout(2000)
  const listitems = await page
    .locator('.tiny-select-dropdown')
    .getByRole('listitem')
    .filter({ hasNotText: /黄金糕|双皮奶/ })

  await expect(listitems.nth(0)).toHaveClass(/is-disabled/)
  await expect(listitems.nth(1)).toHaveClass(/is-disabled/)
  await expect(listitems.nth(2)).toHaveClass(/is-disabled/)
})
