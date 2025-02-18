import { test, expect } from '@playwright/test'

test('编辑方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-editing')
  // 单元格编辑
  await page.getByRole('cell', { name: 'GFD 科技 YX 公司' }).first().click()
  await page.locator('.tiny-grid-default-input').fill('GFD 科技 Y 水电费第三方 X 公司')
  await page.getByRole('heading', { name: '单元格编辑：' }).click()
  await expect(await page.getByText('GFD 科技 Y 水电费第三方 X 公司')).toHaveCount(2)

  // 行编辑
  await page.getByText('华东区').nth(1).click()
  await page.getByRole('textbox').nth(2).click()
  await page.getByRole('textbox').nth(2).fill('水电费水电费')
  await page.getByRole('heading', { name: '行编辑：' }).click()
  await expect(page.getByRole('cell', { name: '水电费水电费' })).toHaveCount(2)
})
