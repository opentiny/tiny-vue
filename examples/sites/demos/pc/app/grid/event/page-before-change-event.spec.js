import { test, expect } from '@playwright/test'

test('分页发生改变前的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-page-before-change-event')
  await page.getByRole('listitem').filter({ hasText: '2' }).click()

  await expect(page.getByText('您确定要放弃修改吗？')).toBeVisible()
})
