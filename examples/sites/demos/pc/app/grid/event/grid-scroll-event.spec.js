import { test, expect } from '@playwright/test'

test('表格滚动事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-grid-scroll-event')
  const scrollDom = page.getByText('深圳万众科技YX公司').first()
  await scrollDom.scrollIntoViewIfNeeded()
  await expect(page.getByText('提示：触发了表格滚动事件')).toBeVisible()
})
