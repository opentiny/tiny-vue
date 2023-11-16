import { test, expect } from '@playwright/test'

test('PopEditor 自定义弹出框底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#slot-footer')

  const preview = page.locator('#preview')
  const textBox = preview.getByPlaceholder('请选择')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: 'Confirm' })
  const cancelBtn = dialogBox.getByRole('button', { name: 'Cancel' })

  // 自定义弹出框底部按钮
  await expect(textBox).toBeVisible()
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(confirmBtn).toBeVisible()
  await expect(cancelBtn).toBeVisible()
})
