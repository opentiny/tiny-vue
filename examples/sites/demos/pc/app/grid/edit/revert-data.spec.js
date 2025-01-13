import { test, expect } from '@playwright/test'

test('表格编辑还原更改', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-revert-data')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page.locator('.tiny-grid-default-input').fill('sss')
  await page.getByText('RFV 有限责任公司').first().click()
  await page.locator('.tiny-grid-default-input').fill('eee')
  await page.locator('#edit-revert-data').getByRole('cell', { name: '名称' }).click()
  await page.getByRole('button', { name: '恢复全部' }).click()
  await expect(page.getByText('GFD 科技 YX 公司').first()).toBeVisible()
  await expect(page.getByText('RFV 有限责任公司').first()).toBeVisible()
})
