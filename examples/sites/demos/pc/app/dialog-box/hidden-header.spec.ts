import { test, expect } from '@playwright/test'

test('隐藏标题区域', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#hidden-header')
  const demo = page.locator('#hidden-header')
  const dialogBox = demo.locator('.tiny-dialog-box')
  await demo.getByRole('button', { name: '无标题' }).click()
  await expect(dialogBox.locator('.tiny-dialog-box__header')).not.toBeVisible()
})
