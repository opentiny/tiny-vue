import { test, expect } from '@playwright/test'

test('单元格被激活编辑时会触发该事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-edit-actived-event')
  await page.getByText('GFD科技YX公司').first().click()

  await expect(page.getByText('激活编辑事件')).toBeVisible()
})
