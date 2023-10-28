import { test, expect } from '@playwright/test'

test('行选中事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-cell-mouseleave-event')
  await page.getByText('福州').first().hover()
  await page.getByText('深圳福田区').first().hover()

  await expect(page.getByText('鼠标离开单元格地址')).toBeVisible()
})
