import { test, expect } from '@playwright/test'

test('PopEditor 多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#multi')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const select1 = dialogBox.getByRole('row', { name: '1 GFD科技YX公司 福建 福州' }).locator('span')
  const select2 = dialogBox.getByRole('row', { name: '2 WWW科技YX公司 广东 深圳' }).locator('span')

  // 允许多选
  await textBox.click()
  await page.getByText('所有数据列表').click()
  await select1.click()
  await select2.click()
  await confirmBtn.click()

  // 多选后文本框里以“@”分割
  await expect(textBox).toHaveValue(/@/)
})
