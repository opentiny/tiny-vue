import { test, expect } from '@playwright/test'

test('disabled-options', async ({ page }) => {
  await page.goto('select#disabled-options')
  const select = page.locator('#preview .tiny-select')
  const tags = page.locator('#preview .tiny-select .tiny-tag')

  await select.click()
  await expect(page.getByRole('listitem').filter({ hasText: '黄金糕' })).toHaveClass(/is-disabled/)
  await expect(page.getByRole('listitem').filter({ hasText: '蚵仔煎' })).toHaveClass(/is-disabled/)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(tags).toHaveCount(0)
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(tags).toHaveCount(1)
  await expect(tags.filter({ hasText: '双皮奶' })).toHaveCount(1)
})
