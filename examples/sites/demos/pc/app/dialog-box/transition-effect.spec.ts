import { test, expect } from '@playwright/test'

test('启动弹出动效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#transition-effect')
  const demo = page.locator('#transition-effect')
  const dialogBox = demo.locator('.tiny-dialog-box')
  await demo.getByRole('button', { name: '启动弹窗' }).click()
  await page.waitForTimeout(400)
  await demo.locator('div').filter({ hasText: /^启动弹窗动效$/ })
  await demo.getByLabel('Close').click()
  await expect(dialogBox).toBeHidden()
})
