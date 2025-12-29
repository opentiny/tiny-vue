import { test, expect } from '@playwright/test'

test('dialogBox 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#basic-usage')
  const demo = page.locator('#basic-usage')

  await demo.getByRole('button', { name: /Dialog/ }).click()
  await demo.getByRole('button', { name: '确 定' }).click()

  await demo.getByRole('button', { name: /Dialog/ }).click()
  await demo.getByRole('button', { name: '取 消' }).click()

  // 点击 x 图标
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await demo.getByLabel('Close').click()

  // 点击遮罩时，关闭 dialogBox
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await demo.locator('.tiny-dialog-box__wrapper').click()

  // 按 ESC 键，关闭 dialogBox
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await page.locator('body').press('Escape')
  expect(demo.locator('.tiny-dialog-box.is-center > .tiny-dialog-box__header')).toBeHidden()
})
