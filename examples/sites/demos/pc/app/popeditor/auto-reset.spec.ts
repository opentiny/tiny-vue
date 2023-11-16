import { test, expect } from '@playwright/test'

test('PopEditor 自定义查询条件 自动重置参数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#auto-reset')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const company = dialogBox.getByRole('listitem').filter({ hasText: '公司名' }).getByRole('textbox')
  const city = dialogBox.getByRole('listitem').filter({ hasText: '城市' }).getByRole('textbox')
  const searchBtn = dialogBox.getByRole('button', { name: '查 询' })
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })

  await textBox.click()
  // 点击查询按钮搜索
  await company.fill('111')
  await searchBtn.click()
  await expect(dialogBox.locator('.tiny-grid__empty-block')).toBeVisible()
  //   点击确认按钮关闭
  await confirmBtn.click()
  await textBox.click()
  await expect(dialogBox.locator('.tiny-grid-body__row')).toHaveCount(10)
})
