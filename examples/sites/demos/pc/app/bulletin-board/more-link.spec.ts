import { test, expect } from '@playwright/test'

test('BulletinBoard 显示 “更多” 链接(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#more-link')

  const preview = page.locator('#more-link')
  const moreLink = preview.locator('.tiny-bulletin-board__more-link')

  await expect(moreLink.nth(0)).toContainText('更多')
  await expect(moreLink.nth(1)).toContainText('更多')
  await expect(moreLink.nth(2)).toContainText('更多')

  await expect(moreLink.nth(0)).toHaveAttribute('href', '/Alert')
  await expect(moreLink.nth(1)).toHaveAttribute('href', '/Alert')
  await expect(moreLink.nth(2)).toHaveAttribute('href', '/Alert')
})
