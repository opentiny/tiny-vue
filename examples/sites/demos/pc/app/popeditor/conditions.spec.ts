import { test, expect } from '@playwright/test'

test('PopEditor 自定义查询条件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#conditions')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const company = dialogBox.getByRole('listitem').filter({ hasText: '公司名' }).getByRole('textbox')
  const city = dialogBox.getByRole('listitem').filter({ hasText: '城市' }).getByRole('textbox')
  const searchBtn = dialogBox.getByRole('button', { name: '查 询' })

  await textBox.click()
  // 点击查询按钮搜索
  await company.fill('111')
  await searchBtn.click()
  await expect(dialogBox.locator('.tiny-grid__empty-block')).toBeVisible()

  // 或者按enter键搜索
  await company.fill('')
  await city.fill('福州')
  await searchBtn.press('Enter')
  await expect(dialogBox.locator('.tiny-grid-body__row')).toHaveCount(1)
})
