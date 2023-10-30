import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('select#multiple')
  const select = page.locator('#preview .tiny-select')

  await expect(select.locator('.tiny-tag')).toHaveCount(2)
  await select.click()
  await page.getByRole('listitem').filter({ hasText: '全部' }).click()
  await expect(select.locator('.tiny-tag')).toHaveCount(7)
  await page.getByRole('listitem').filter({ hasText: '全部' }).click()
  await expect(select.locator('.tiny-tag')).toHaveCount(0)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(select.locator('.tiny-tag')).toHaveCount(1)
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(select.locator('.tiny-tag')).toHaveCount(2)
  await select.locator('.tiny-tag').filter({ hasText: '双皮奶' }).getByRole('img').click()
  await expect(select.locator('.tiny-tag')).toHaveCount(1)
})
