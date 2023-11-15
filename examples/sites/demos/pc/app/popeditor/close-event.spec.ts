import { test, expect } from '@playwright/test'

test('PopEditor close 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#close-event')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const infoModal = page.getByText('弹框关闭事件')
  const closeBtn = dialogBox.getByRole('button', { name: 'Close' })
  const cancelBtn = dialogBox.getByRole('button', { name: '取 消' })

  // 编辑弹出框弹出后点击取消按钮，弹出框消失
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await cancelBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(infoModal.nth(0)).toBeVisible()

  // 编辑弹出框弹出后点击关闭按钮，弹出框消失
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await closeBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(infoModal.nth(1)).toBeVisible()
})
