import { test, expect } from '@playwright/test'

test('dialogBox 弹窗距离顶部的高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-top-height')

  const preview = page.locator('#preview')
  const defaultHeightBtn = preview.getByRole('button', { name: '显示在顶部' })
  const customHeightBtn = preview.getByRole('button', { name: '距离顶部300px' })
  const dialogBox = preview.locator('.tiny-dialog-box')

  // 默认弹窗距离顶部的高度
  await defaultHeightBtn.click()
  await expect(dialogBox.nth(0)).toBeVisible()
  await expect(dialogBox.nth(0)).toHaveCSS('top', '0px')
  await page.locator('body').press('Escape')

  // 自定义弹窗距离顶部的高度
  await customHeightBtn.click()
  await expect(dialogBox.nth(1)).toBeVisible()
  await expect(dialogBox.nth(1)).toHaveCSS('top', '300px')
})
