import { test, expect } from '@playwright/test'

test('顶部偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#offset-top')

  const anchor = page.locator('.tiny-anchor')
  const link1 = anchor.getByRole('link', { name: '基本用法' }).nth(0)
  const link2 = anchor.getByRole('link', { name: '顶部偏移量' }).nth(0)
  await link1.click()
  const hash1 = await page.evaluate(() => window.location.hash)

  await link2.click()
  const hash2 = await page.evaluate(() => window.location.hash)

  // 验证hash变化
  await expect(hash2).not.toEqual(hash1)
  await expect(hash2).toContain('#offset-top')
})
