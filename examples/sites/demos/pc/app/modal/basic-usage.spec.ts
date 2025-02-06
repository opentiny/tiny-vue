import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#basic-usage')

  const modal = page.locator('.tiny-modal__status-wrapper svg').first()
  const content = page.locator('.tiny-modal__content')

  // 基本提示框
  await page.getByRole('button', { name: '基本提示框' }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(modal).not.toBeVisible()

  // 成功提示框
  await page.getByRole('button', { name: '成功提示框' }).click()
  await expect(modal).toHaveClass(/tiny-modal-svg__success/)
  await page.getByRole('button', { name: '确定' }).click()

  // 消息提示
  await page.getByRole('button', { name: '消息提示' }).click()
  await expect(content.nth(3)).toHaveText(/简单的消息/)

  // 打开弹窗 1
  await page.getByRole('button', { name: '打开弹窗 1' }).click()
  await expect(content.nth(1)).toHaveText(/窗口内容1/)
  await page.getByRole('button', { name: '确定' }).click()

  // 打开弹窗 2
  await page.getByRole('button', { name: '打开弹窗 2' }).click()
  await expect(content.nth(2)).toHaveText(/窗口内容2/)
  await page.getByRole('button', { name: '确定' }).click()
})
