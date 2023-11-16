import { test, expect } from '@playwright/test'

test('PopEditor 拦截弹窗关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#before-close')

  const preview = page.locator('#preview')
  const textBox = preview.getByPlaceholder('请选择')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const cancelBtn = dialogBox.getByRole('button', { name: '取 消' })
  const closeBtn = dialogBox.getByRole('button', { name: 'Close' })

  // 点击取消按钮，编辑框可关闭
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await cancelBtn.click()
  await expect(dialogBox).not.toBeVisible()

  // 点击确认按钮，编辑框可关闭
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()

  // 点击关闭按钮，编辑框不可关闭
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await closeBtn.click()
  await expect(dialogBox).toBeVisible()
})
