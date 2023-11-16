import { test, expect } from '@playwright/test'

test('页码按钮数量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-count')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const pageItem = pager.locator('.tiny-pager__pages li')

  await expect(pageItem).toHaveCount(16)
})
