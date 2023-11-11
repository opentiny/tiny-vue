import { test, expect } from '@playwright/test'

test('手动激活编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#methods-set-active-cell')
  await page.getByRole('button', { name: 'setActiveCell' }).click()

  await expect(page.getByRole('row', { name: '1 2014-04-30 00:56:00 福州' }).getByRole('textbox')).toBeVisible()

  await page.getByText('员工数').click()
  await page.getByRole('button', { name: 'setActiveRow' }).click()
  await expect(page.getByRole('row', { name: '2 2016-07-08 12:36:22 深圳' }).getByRole('textbox')).toBeVisible()
})
