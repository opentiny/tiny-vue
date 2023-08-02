import { test, expect } from '@playwright/test'

test('自定义单元格提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-tip/tip-cell-tip-config')
  await page
    .getByRole('cell', { name: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00' })
    .hover()
  await expect(
    page.getByRole('tooltip', {
      name: '自定义提示：2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00'
    })
  ).toBeVisible()
})
