import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#basic-usage')

  const anchor = page.locator('.tiny-anchor')
  const link1 = anchor.getByRole('link', { name: '演示' })
  const link2 = anchor.getByRole('link', { name: 'On Change' })
  const hash1 = await page.evaluate(() => window.location.hash)

  await link1.click()
  const hash2 = await page.evaluate(() => window.location.hash)

  await expect(hash2).not.toEqual(hash1)
  await expect(hash2).toContain('#demonstrate')

  await link2.click()
  const hash3 = await page.evaluate(() => window.location.hash)

  await expect(hash3).toContain('#on-change')
})
