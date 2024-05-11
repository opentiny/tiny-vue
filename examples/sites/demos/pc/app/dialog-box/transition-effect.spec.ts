import { test, expect } from '@playwright/test'

test('启动弹出动效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const dialogBox = page.locator('.tiny-dialog-box')
  await page.goto('dialog-box#transition-effect')
  await page.getByRole('button', { name: '启动弹窗' }).click()
  await page.waitForTimeout(400)
  await page.locator('div').filter({ hasText: /^启动弹窗动效$/ })
  await page.getByLabel('Close').click()
  await expect(dialogBox).toBeHidden()
})
