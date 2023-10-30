import { test, expect } from '@playwright/test'

test('dialogBox 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#basic-usage')

  const preview = page.locator('#preview')
  const dialogBox = preview.locator('.tiny-dialog-box')
  const mask = preview.locator('.tiny-dialog-box__wrapper')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const header = dialogBox.locator('.tiny-dialog-box__header')
  const body = dialogBox.locator('.tiny-dialog-box__body')
  const footer = dialogBox.locator('.tiny-dialog-box__footer')
  const close = header.getByRole('button', { name: 'Close' })
  const confirm = footer.getByRole('button', { name: '确定' })
  const cancel = footer.getByRole('button', { name: '取消' })

  // 点击button，dialogBox弹出及显示正确
  await button.click()
  await expect(dialogBox).toBeVisible()
  await expect(header).toBeVisible()
  await expect(body).toBeVisible()
  await expect(footer).toBeVisible()

  // 点击关闭按钮，关闭dialogBox
  await close.click()
  await expect(dialogBox).not.toBeVisible()

  // 点击确认按钮，关闭dialogBox
  await button.click()
  await expect(dialogBox).toBeVisible()
  await confirm.click()
  await expect(dialogBox).not.toBeVisible()

  // 点击取消按钮，关闭dialogBox
  await button.click()
  await expect(dialogBox).toBeVisible()
  await cancel.click()
  await expect(dialogBox).not.toBeVisible()

  // 点击遮罩时，关闭dialogBox
  await button.click()
  await expect(dialogBox).toBeVisible()
  await mask.click()
  await expect(dialogBox).not.toBeVisible()

  // 按 ESC 键，关闭dialogBox
  await button.click()
  await expect(dialogBox).toBeVisible()
  await page.locator('body').press('Escape')
  await expect(dialogBox).not.toBeVisible()
})
