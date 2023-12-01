import { test, expect } from '@playwright/test'

test('页码按钮数量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#page-count')

  const demo = page.locator('#page-count')
  const pager = demo.locator('.tiny-pager')
  const pageItem = pager.locator('.tiny-pager__pages li')

  await expect(pageItem.last()).toHaveText('200')
})
