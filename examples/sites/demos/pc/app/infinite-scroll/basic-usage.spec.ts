import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('infinite-scroll#basic-usage')
  const infiniteList = page.locator('#basic-usage .tiny-infinite-list')
  const infiniteListChild = infiniteList.locator('.tiny-infinite-list-item')
  await expect(infiniteList).toBeVisible()
  await expect(infiniteListChild.nth(0)).toBeVisible()
  await expect(infiniteListChild.nth(0)).toHaveText('1')
})
