import { test, expect } from '@playwright/test'

test('dialogBox 弹窗距离顶部的高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-top-height')
  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('link', { name: '弹窗距离顶部的高度' }).click()
  await page.getByRole('button', { name: '显示在顶部' }).click()
  // 默认弹窗距离顶部的高度
  await expect(dialogBox.nth(0)).toHaveCSS('top', '0px')
  await page.getByRole('button', { name: '确 定' }).click()
  await page.getByRole('button', { name: '距离顶部300px' }).click()
  // 自定义弹窗距离顶部的高度
  await expect(dialogBox.nth(1)).toHaveCSS('top', '300px')
  await page.getByRole('button', { name: 'Close' }).nth(1).click()
})
