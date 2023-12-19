import { test, expect } from '@playwright/test'

test('PopEditor 显示字段映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#text-field')

  const preview = page.locator('#text-field')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const seletItem = dialogBox.getByRole('row', { name: '1 GFD科技YX公司 福建 福州' }).locator('span')

  // 显示城市的字段映射
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await seletItem.nth(0).check()
  await confirmBtn.click()
  await expect(textBox).toHaveValue('福州')
})
