import { test, expect } from '@playwright/test'

test('手动选中指定行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#methods-set-selection')
  await page.getByRole('button', { name: 'setSelection' }).click()

  await expect(page.getByRole('row', { name: '5 810 2012-12-12 12:12:12 韶关' }).getByRole('img').first()).toBeVisible()
})
