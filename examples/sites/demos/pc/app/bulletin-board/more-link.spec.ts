import { test, expect } from '@playwright/test'

test('BulletinBoard 显示 “更多” 链接(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/bulletin-board/more-link')

  const preview = page.locator('#preview')
  const moreLink = preview.locator('.tiny-bulletin-board__more-link')

  await expect(moreLink).toHaveCount(3)
})
