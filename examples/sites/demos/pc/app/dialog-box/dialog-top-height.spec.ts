import { test, expect } from '@playwright/test'

test('dialogBox 弹窗距离顶部的高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-top-height')
  const demo = page.locator('#dialog-top-height')
  const dialogBox = demo.locator('.tiny-dialog-box')
  await demo.getByRole('button', { name: '显示在顶部' }).click()
  // 默认弹窗距离顶部的高度
  await expect(dialogBox.nth(0)).toHaveCSS('top', '0px')
  await demo.getByRole('button', { name: /确 定/ }).click()
  await demo.getByRole('button', { name: /300px/ }).click()
  // 自定义弹窗距离顶部的高度
  await expect(dialogBox.nth(1)).toHaveCSS('top', '300px')
})
