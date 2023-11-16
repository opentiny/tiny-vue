import { test, expect } from '@playwright/test'

test('disabled-and-selected-options', async ({ page }) => {
  await page.goto('select#disabled-and-selected-options')
  const slect = page.locator('#preview .tiny-select')
  const tags = page.locator('#preview .tiny-select .tiny-tag')
  const listitem = page.getByRole('listitem')
  await expect(tags.filter({ hasText: '黄金糕' }).locator('svg')).toHaveCount(0)
  await slect.click()
  await expect(listitem.filter({ hasText: '全部' })).toHaveCount(0)
  await expect(listitem.filter({ hasText: '黄金糕' })).toHaveClass(/is-disabled/)
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(tags.filter({ hasText: '黄金糕' }).locator('.tiny-svg')).toHaveCount(0)
  await expect(tags.filter({ hasText: '双皮奶' }).locator('.tiny-svg')).toHaveCount(1)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(tags.filter({ hasText: '黄金糕' }).locator('.tiny-svg')).toHaveCount(0)
})
