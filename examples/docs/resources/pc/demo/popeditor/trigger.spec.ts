import { test, expect } from '@playwright/test'

test('PopEditor 单选时触发勾选的方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/trigger')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const row = dialogBox.locator('.tiny-grid-body__row').nth(1)

  // 点击行中任意位置进行勾选
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await row.click()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(textBox).toHaveValue('WWW科技YX公司')


})
