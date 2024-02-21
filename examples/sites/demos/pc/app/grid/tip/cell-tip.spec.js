import { test, expect } from '@playwright/test'

test('单元格提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tip#tip-cell-tip')
  await page
    .getByRole('cell', { name: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00' })
    .hover()
  await expect(
    page.getByRole('tooltip', {
      name: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00'
    })
  ).toBeVisible()
})
