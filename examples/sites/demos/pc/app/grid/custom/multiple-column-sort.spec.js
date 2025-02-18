import { test, expect } from '@playwright/test'

test('多列排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const custom = page.locator('.tiny-grid-custom')
  await page.goto('grid-custom#custom-multiple-column-sort')
  await page.locator('.tiny-grid-custom__setting-btn').first().click()
  await custom.getByRole('row', { name: '员工数' }).getByTitle('未排序').locator('path').click()
  await custom.getByTitle('未排序').locator('path').click()
  await custom.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(3)).toContainText('GFD 科技有限公司')

  await page.locator('.tiny-grid-custom__setting-btn').nth(1).click()
  await custom.getByRole('row', { name: '员工数' }).getByTitle('未排序').getByRole('img').click()
  await custom.getByTitle('未排序').getByRole('img').click()
  await custom.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(10)).toContainText('YHN 科技有限公司')
})
