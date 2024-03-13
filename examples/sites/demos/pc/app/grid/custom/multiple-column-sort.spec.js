import { test, expect } from '@playwright/test'

test('多列排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-multiple-column-sort')
  await page.locator('.tiny-grid-custom__setting-btn').first().click()
  await page.getByRole('row', { name: '员工数 显示 未排序 未冻结' }).getByTitle('未排序').locator('path').click()
  await page.getByTitle('未排序').locator('path').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(3)).toContainText('GFD科技有限公司')

  await page.locator('.tiny-grid-custom__setting-btn').nth(1).click()
  await page.getByRole('row', { name: '员工数 显示 未排序 未冻结' }).getByTitle('未排序').getByRole('img').click()
  await page.getByTitle('未排序').getByRole('img').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(10)).toContainText('YHN科技有限公司')
})
