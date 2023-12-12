import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('infinite-scroll#disabled')
  const infiniteList = page.locator('#disabled .tiny-infinite-list-wrapper')
  await expect(infiniteList.locator('.list')).not.toBeVisible()
  await page.waitForTimeout(400)
  await expect(infiniteList.locator('.list')).toBeVisible()
})
