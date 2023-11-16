import { test, expect } from '@playwright/test'

test('BulletinBoard 公告牌标题(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#title')

  const preview = page.locator('#preview')
  const title = preview.locator('.tiny-bulletin-board__title')

  await expect(title).toBeVisible()
})
