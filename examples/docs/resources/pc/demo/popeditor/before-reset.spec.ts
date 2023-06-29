import { test, expect } from '@playwright/test'

test('PopEditor 重置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/before-reset')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const company = dialogBox.getByRole('listitem').filter({ hasText: '公司名' }).getByRole('textbox')
  const city = dialogBox.getByRole('listitem').filter({ hasText: '城市' }).getByRole('textbox')
  const resetBtn = dialogBox.getByRole('button', { name: '重 置' })
  const infoModal = page.locator('.tiny-modal')

  // 点击弹出框重置按钮，清空搜索框，modal弹出提示
  await textBox.click()
  await company.fill('111')
  await city.fill('222')
  await resetBtn.click()
  await expect(infoModal.filter({ hasText: /^重置前的钩子函数$/ })).toBeVisible()
  await expect(company).toHaveValue('')
  await expect(city).toHaveValue('')


})
