import { test, expect } from '@playwright/test'

test('dialogBox 头部和底部水平居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#center')
  await page.getByRole('button', { name: '弹出 Dialogfalse' }).click()
  await page.getByText('消息').click()
  // 底部水平居中
  await expect(page.locator('.tiny-dialog-box.is-center > .tiny-dialog-box__header')).toHaveCSS('text-align', 'center')
  await page.getByRole('button', { name: '确 定' }).click()
})
