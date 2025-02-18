import { test, expect } from '@playwright/test'

test('检查数据是否改变', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#edit-has-row-change')
  await page.goto('grid-edit#edit-has-row-change')
  await demo.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-grid-body__row').first().locator('input[type="text"]').fill('sdf')
  await demo.locator('.tiny-grid-body__row').first().getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('保存成功！')).toBeVisible()
  await page.getByRole('button', { name: '确定' }).click()
  await demo.locator('.tiny-grid-body__row').nth(1).getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('当前数据未改变！')).toBeVisible()
  await page.getByRole('button', { name: '确定' }).click()
})
