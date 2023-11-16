import { test, expect } from '@playwright/test'

test('collapse-tags', async ({ page }) => {
  await page.goto('select#collapse-tags')
  await expect(page.locator('span.tiny-tag')).toHaveCount(2)
  await expect(page.locator('span').filter({ hasText: '黄金糕' }).nth(1)).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '+ 1' }).nth(1)).toBeVisible()
  await page.getByText('黄金糕+ 1').click()
  await expect(page.getByRole('listitem').filter({ hasText: '黄金糕' })).toHaveClass(/selected/)
  await expect(page.getByRole('listitem').filter({ hasText: '双皮奶' })).toHaveClass(/selected/)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).locator('span').nth(2).click()
  await expect(page.locator('span').filter({ hasText: '+ 1' }).nth(1)).toBeHidden()
  await expect(page.locator('span.tiny-tag')).toHaveCount(1)
  await page.getByRole('listitem').filter({ hasText: '蚵仔煎' }).locator('span').nth(2).click()
  await page.getByRole('listitem').filter({ hasText: '北京烤鸭' }).locator('span').nth(2).click()
  await expect(page.locator('span').filter({ hasText: '+ 2' }).nth(1)).toBeVisible()
  await expect(page.locator('span.tiny-tag')).toHaveCount(2)
})
