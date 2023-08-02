import { test, expect } from '@playwright/test'

test('行展开收起事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-toggle-expand-change-event')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).locator('i').click()

  await expect(page.getByText('当前展开行：1')).toBeVisible()
})
