import { test, expect } from '@playwright/test'

test('指定行插入数据和删除指定行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-toolbar/toolbar-insert-remove-rows')
  await page.getByRole('row', { name: '1 800 2014-04-30 00:56:00 福州' }).getByRole('img').nth(1).click()
  await expect(page.getByText('540').first()).toBeVisible()
})
