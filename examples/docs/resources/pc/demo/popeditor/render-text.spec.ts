import { test, expect } from '@playwright/test'

test('PopEditor 渲染反查', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/render-text')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const company = dialogBox.getByRole('listitem').filter({ hasText: '公司名' }).getByRole('textbox')
  const searchBtn = dialogBox.getByRole('button', { name: '查 询' })
  const data = dialogBox.locator('.tiny-popeditor-body__left .tabs-body-item')

  await textBox.click()
  await company.fill('111')
  await searchBtn.click()
  await expect(data).toBeVisible()
})
