import { test, expect } from '@playwright/test'

test('表头单元格单击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-header-click-event')
  await page.getByText('名称').click()

  await expect(page.getByText('表头单元格点击名称')).toBeVisible()
})
