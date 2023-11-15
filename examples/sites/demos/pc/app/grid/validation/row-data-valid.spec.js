import { test, expect } from '@playwright/test'

test('数据关联校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#grid_Example-gridValid-row-data-valid')
  await page.getByText('70').first().click()
  await page.getByRole('row', { name: '1 100 0' }).getByRole('textbox').fill('700')

  await expect(page.getByRole('tooltip', { name: '数值不能大于100' })).toBeVisible()
})
