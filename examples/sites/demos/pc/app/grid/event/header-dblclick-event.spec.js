import { test, expect } from '@playwright/test'

test('表头单元格双击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-header-dblclick-event')
  await page.getByText('名称').dblclick()

  await expect(page.getByText('表头单元格双击名称')).toBeVisible()
})
