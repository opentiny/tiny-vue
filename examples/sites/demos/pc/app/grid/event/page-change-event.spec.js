import { test, expect } from '@playwright/test'

test('分页发生改变事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-page-change-event')
  await page.getByRole('listitem').filter({ hasText: '2' }).click()

  await expect(page.getByText('触发分页change事件')).toBeVisible()
})
