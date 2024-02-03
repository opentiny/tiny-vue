import { test, expect } from '@playwright/test'

test('鼠标进入离开单元格事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-cell-mouse-event')
  await page.getByText('福州').first().hover()
  await expect(page.getByText('鼠标进入单元格地址')).toBeVisible()
  await page.getByText('cell-mouseleave 可以监听到鼠标离开单元格事件').hover()
  await expect(page.getByText('鼠标离开单元格地址')).toBeVisible()
})
