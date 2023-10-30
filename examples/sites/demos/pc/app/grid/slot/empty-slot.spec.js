import { test, expect } from '@playwright/test'

test('暂无数据插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-empty-slot')
  const emptyDom = page.locator('.tiny-grid__empty-block')

  await expect(emptyDom).toContainText('暂无数据')
})
