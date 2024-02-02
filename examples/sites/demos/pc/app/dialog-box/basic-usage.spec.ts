import { test, expect } from '@playwright/test'

test('dialogBox 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#basic-usage')

  await page.getByRole('button', { name: /Dialog/ }).click()
  await page.getByRole('button', { name: '确定' }).click()

  await page.getByRole('button', { name: /Dialog/ }).click()
  await page.getByRole('button', { name: '取消' }).click()

  // 点击 x 图标
  await page.getByRole('button', { name: /Dialog/ }).click()
  await page.getByLabel('Close').click()

  // 点击遮罩时，关闭dialogBox
  await page.getByRole('button', { name: /Dialog/ }).click()
  await page.locator('.tiny-dialog-box__wrapper').click()

  // 按 ESC 键，关闭dialogBox
  await page.getByRole('button', { name: /Dialog/ }).click()
  await page.locator('body').press('Escape')
  expect(page.locator('.tiny-dialog-box.is-center > .tiny-dialog-box__header')).toBeHidden()
})
