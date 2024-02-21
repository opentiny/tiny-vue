import { test, expect } from '@playwright/test'

test('拦截弹窗关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#before-close')

  const drawer = page.locator('.tiny-drawer__main')
  const message = page.locator('.tiny-modal.type__message')

  await page.getByRole('button', { name: '点击展开 Drawer' }).click()
  await expect(drawer).toBeVisible()

  // 点击关闭按钮
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(message).toContainText('close')
  await expect(drawer).toBeVisible()

  // 点击遮罩层
  await page.locator('.tiny-drawer__mask').click()
  await expect(drawer).toBeVisible()

  // 点击底部确认按钮
  await page.locator('#before-close').getByRole('button', { name: '确定' }).click()
  await expect(drawer).toBeVisible()

  // 点击底部取消按钮
  await page.getByRole('button', { name: '取消' }).click()
  await expect(drawer).toBeVisible()

  // 自定义关闭方法
  await page.getByRole('button', { name: '关闭 Drawer' }).click()
  await expect(drawer).not.toBeVisible()
})
