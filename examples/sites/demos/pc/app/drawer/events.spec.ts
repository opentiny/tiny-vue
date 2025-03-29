import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#events')
  const demo = page.locator('#events')
  const drawer = demo.locator('.tiny-drawer__main')

  // 显示事件
  const showMsg = page.locator('.tiny-modal.type__message').filter({ hasText: '打开事件' }).first()
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await expect(showMsg).toBeVisible()

  // 确定事件
  const confirmMsg = page.locator('.tiny-modal.type__message').filter({ hasText: '确定事件' }).first()
  await demo.getByRole('button', { name: '确定' }).click()
  await expect(confirmMsg).toBeVisible()
})

test('close事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#events')
  const demo = page.locator('#events')
  const drawer = demo.locator('.tiny-drawer__main')
  // 关闭事件
  const closeMsg = page.locator('.tiny-modal.type__message').filter({ hasText: '关闭事件' }).first()
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  // 右上角关闭按钮
  await drawer.locator('.tiny-drawer__headerbtn').click()
  await expect(closeMsg).toBeVisible()
  // 底部按钮关闭
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await demo.getByRole('button', { name: '取消' }).click()
  await expect(closeMsg).toBeVisible()
  // 点击蒙层关闭
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await demo.locator('.tiny-drawer__mask').click()
  await expect(closeMsg).toBeVisible()
})
