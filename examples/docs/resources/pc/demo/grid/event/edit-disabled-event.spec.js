import { test, expect } from '@playwright/test'

test('当单元格激活时如果是禁用状态时会触发该事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-edit-disabled-event')
  await page.getByText('点我触发禁止编辑效果').click()

  await expect(page.getByText('激活editDisable事件')).toBeVisible()
})
