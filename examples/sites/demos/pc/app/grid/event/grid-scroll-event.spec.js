import { test, expect } from '@playwright/test'

test('表格滚动事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-grid-scroll-event')
  const scrollDom = page.getByText('深圳万众科技YX公司').first()
  await scrollDom.scrollIntoViewIfNeeded()
  await page.waitForTimeout(20)

  await expect(page.locator('.tiny-modal__box').first()).toBeVisible()
})
