import { test, expect } from '@playwright/test'

test('dialogBox 头部和底部水平居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#center')
  const demo = page.locator('#center')
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await demo.getByText('消息').click()
  // 底部水平居中
  await expect(demo.locator('.tiny-dialog-box.is-center > .tiny-dialog-box__header')).toHaveCSS('text-align', 'center')
  await demo.getByRole('button', { name: /确 定/ }).click()
})
