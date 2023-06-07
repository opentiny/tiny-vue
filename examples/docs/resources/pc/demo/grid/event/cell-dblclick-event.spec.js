import { test, expect } from '@playwright/test'

test('单元格双击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-cell-dblclick-event')
  await page.getByRole('cell', { name: 'GFD科技YX公司' }).click()
  await page.getByText('GFD科技YX公司').dblclick()

  await expect(page.getByText('单元格双击名称')).toBeVisible()
})
