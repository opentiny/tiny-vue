import { test, expect } from '@playwright/test'

test('自定义比较方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-grid-equals')
  await page.getByText('800').click()
  await page.getByRole('row', { name: '1 2014-04-30 00:56:00' }).getByRole('textbox').fill('800')
  await page.getByRole('cell', { name: '人数' }).locator('div').first().click()
  await expect(page.locator('.tiny-grid .col__dirty')).toHaveCount(0)
})
